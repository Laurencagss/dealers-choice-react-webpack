const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dcrw');
  
const Game = db.define('game', {
  name: {
    type: Sequelize.STRING,
  },
})

const desc = db.define('desc', {
  name: {
    type: Sequelize.STRING,
  },
})



const syncAndSeed = async() =>{
    await db.sync( { force: true } )
    await Game.create({name: 'pokemon'} )
    await Game.create({name: 'sea garden'} )
    await Game.create({name: 'harvest moon'} )
    await Game.create({name: 'time presents'} )
    await Game.create({name: 'mario'} )

	return {
		game: ['pokemon', 'sea garden', 'harvest moon', 'time presents', 'mario'],
	}
}

    module.exports = {
        syncAndSeed, 
        db,
        models: {
            Game,
            desc
        }
        }
