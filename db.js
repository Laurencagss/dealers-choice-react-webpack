const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dcrw');
  
const Game = db.define('game', {
  name: {
    type: Sequelize.STRING,
  },
  price : {
    type: Sequelize.STRING,
  }
})

const desc = db.define('desc', {
  name: {
    type: Sequelize.STRING,
  },
})


const syncAndSeed = async() =>{
    await db.sync( { force: true } )}

    module.exports = {
        syncAndSeed, 
        db,
        }
