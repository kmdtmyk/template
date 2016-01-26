Util = require("../src/util")

describe 'util test', ->

  it 'array2d', ->
    array2d = Util.array2d(2, 3, 0);
    expectArray2d = [
      [0, 0, 0]
      [0, 0, 0]
    ]
    assert.deepEqual(array2d, expectArray2d)

    array2d[1][2] = 1
    expectArray2d = [
      [0, 0, 0]
      [0, 0, 1]
    ]
    assert.deepEqual(array2d, expectArray2d)
