const { expect } = require('chai')
const { syncAndSeed }= require('../db')
const app = require('../server')
describe('Models', () =>{
	let seed
	beforeEach( async()=> {
		seed = await syncAndSeed()
	})

	describe('data layer', () => {
		it('there are 5 games', () => {
			expect(Object.keys(seed.games).length).to.equal(5)
		})
	})
})