const { sequelize } = require('./db');
const { Cheese } = require('./cheese.js');
const { Board } = require('./board.js');
const { User } = require('./user.js')
const { DESCRIBE } = require('sequelize/types/query-types');

describe('Checking models are working', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
})

test('Checking Cheese model is working', () =>{ 
    async() => {
        const cheesetest = await Cheese.create({name: 'cuajada', description: 'melted' });
        expect(cheesetest.name).toBe('cuajada');
        expect(cheesetest.description).toBe('melted');

    }
})

test('Checking User model is working', () => {
    async() => {
        const userTest = await User.create({name:'Dwight Shrute', email: 'schruteFarms@ymail.com'});
        expect(userTest.name).toBe('Dwight Shrute');
        expect(userTest.email).toBe('schruteFarms@ymail.com');
    }
})
test('Checking board model is working', () => {
    async() => {
        const boardTest = await Board.create({type:'wood', description: 'fancy-like', rating: 5});
        expect(boardTest.type).toBe('wood');
        expect(boardTest.description).toBe('fancy-like');
        expect(boardTest.rating).toBe(5);

    }
})

})