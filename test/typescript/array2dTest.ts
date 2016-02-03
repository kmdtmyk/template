import Array2D = require('../../src/typescript/array2d');


describe('array2d', () => {

    var array2d;

    beforeEach(function(){
        array2d = new Array2D(2, 3, 0);
    });

    it('toArray', () => {
        var expect = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        assert.deepEqual(expect, array2d.toArray());
    });

    it('get', () => {
        var expect = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        assert(array2d.get(0, 0) == expect[0][0]);
        assert(array2d.get(0, 1) == expect[0][1]);
        assert(array2d.get(0, 2) == expect[0][2]);
        assert(array2d.get(1, 0) == expect[1][0]);
        assert(array2d.get(1, 1) == expect[1][1]);
        assert(array2d.get(1, 2) == expect[1][2]);
    });


});
