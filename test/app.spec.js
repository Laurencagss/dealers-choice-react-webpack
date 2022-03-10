const { expect } = require('chai')
const { db, syncAndSeed} = require('../db')
const request = require('supertest')
const app = request(require('../server'))


describe('App', () => {
	let seed
	beforeEach( async()=> {
		seed = await syncAndSeed()
	})

	describe('name datatype', () => {
		it('name is a string', async() => {
			const tetris = {name: 'TETRIS'}
			expect(tetris.name).to.equal('TETRIS')
		})
	})

	describe('GET /api/characters', () => {
		it('returns 2 games', async() => {
			const response = await app.get('/api/games')
			expect(response.status).to.equal(200)
			expect(response._body.length).to.equal(2)
		})
	})

	describe('GET /api/games/:id', () => {
		it('returns 1 game', async() => {
			const game = { id: 1, name: 'animal crossing' }
			const response = await app.get(`/api/games/${game.id}`)
			expect(response.status).to.equal(200)
			expect(response._body).to.be.an('object')
		})
	})
})