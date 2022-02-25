const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    let testArray = [1, 2, 3, 4, 5]

    test('Shufflearray Length', () => {
        expect(shuffleArray(testArray).length).toBe(testArray.length);
    })
})