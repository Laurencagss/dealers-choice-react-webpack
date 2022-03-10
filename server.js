const {syncAndSeed, db, Games } = require('./db.js');
const PORT = 3030;
const express = require('express');
const path = require('path');
const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, './index.html'));
}
)

app.get('/games', async(req, res)=>{
  const games = await db.models.game.findAll();
  res.send(games);
}
)

const init = async()=>{
    try {
      await syncAndSeed();
      await app.listen(PORT, ()=>{
        console.log(`listening on port ${PORT}`)
      })
    }
    catch(e){
      console.log(e)
    }
  }
  init();