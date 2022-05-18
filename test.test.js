const  sequelize  = require('./sequelize.js');
const { Cheese } = require('./cheese.js');
const { Board } = require('./board.js');
const { User } = require('./user.js')

// const { DESCRIBE } = require('sequelize/types/query-types');

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
describe('Checking model relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    })

    test('Checking that user can have many boards', () => {
        async() => {
            //Creating multiple boards and one User
            const board1 = await Board.create({name: 'Cedar board', description: 'Spectacular design and from the amazon', rating: 5});
            const board2 = await Board.create({name: 'Pine', description: 'Made from an all-exclusive forest in seattle', rating: 3});
            const DwightS = await User.create({name: 'Dwight S.', email: 'dwights@gmail.com'});

            await DwightS.addBoard('Cedar board');
            await DwightS.addBoard('Pine');

            const DwightBoards = await DwightS.getBoards();

            expect(DwightBoards.length).toBe(2);
            expect(DwightBoards[0]).toBeInstanceOf(Board);


        }
    })

    test('Checking that cheese & boards is a many to many relationship', () => {
        async() => {
            const board1 = await Board.create({name: 'Cedar board', description: 'Spectacular design and from the amazon', rating: 5});
            const board2 = await Board.create({name: 'Pine', description: 'Made from an all-exclusive forest in seattle', rating: 3});
            const cauajada = await Cheese.create({title: "Cuajada", description: "melted"});
            const swissCheese = await Cheese.create({title: "Swiss Cheese", description: "Very satisfactory"});

            await board2.addCheese('Cuajada');
            await board2.addCheese('Swiss Cheese');
            await cauajada.addBoard('Cedar board');
            await cauajada.addBoard('Pine');

            const board2Cheeses = await board1.getCheese();
            const cauajadaBoards = await cauajada.getBoard();

            expect(board1Cheeses.length).toBe(2);
            expect(proveloneBoards.length).toBe(2);
        }
    })

    test('Cheese-board relationship is working', () => {
        async() => {
            const board2 = await Board.create({name: 'Maple board', description: 'Made from an all-exclusive forest in seattle', rating: 3});
            const cuajada = await Cheese.create({title: "Cuajada", description: "melted"});

            await board2.addCheese('Cuajada');

            expect(board2[0]).toBeInstanceOf(Cheese);
        }
    })

    test('Eager loading- a board can be loaded with its cheeses', () => {
        async () => {
            const board1 = await Board.create({name: 'Maple board', description: 'Maple Board with varnish', rating: 5});
            const cuajada = await Cheese.create({title: "Cuajada", description: "melted"});
            const swissCheese = await Cheese.create({title: "Sharp Cheddar", description: "Very satisfactory"});
            const Queso  = await Cheese.create({title: "Queso", description: "So, So good!"});

            await board1.addCheese("Cuajada");
            await board1.addCheese("SwissCheese");
            await board1.addCheese("Queso");

            const allBoard1Cheeses = await board1.getCheese();

            expect(allBoard1Cheeses.length).toBe(3);
            expect(allBoard1Cheeses[0]).toBeInstanceOf(Cheese);
        }
    })
})
