Array2D = require("../src/array2d")

describe 'array2d', ->

  beforeEach ->
    @array2d = new Array2D(2, 3, 0)

  it 'get', ->
    expect = [
      [0, 0, 0]
      [0, 0, 0]
    ]
    assert(@array2d.get(0, 0) == expect[0][0])
    assert(@array2d.get(0, 1) == expect[0][1])
    assert(@array2d.get(0, 2) == expect[0][2])
    assert(@array2d.get(1, 0) == expect[1][0])
    assert(@array2d.get(1, 1) == expect[1][1])
    assert(@array2d.get(1, 2) == expect[1][2])

  it 'index out of bounds returns undefined', ->
    assert(@array2d.get(0, 100) == undefined)
    assert(@array2d.get(100, 0) == undefined)
    assert(@array2d.get(100, 100) == undefined)

  it 'set', ->
    @array2d.set(0, 1, 5)
    @array2d.set(1, 2, 7)
    expect = [
      [0, 5, 0]
      [0, 0, 7]
    ]
    assert(@array2d.get(0, 0) == expect[0][0])
    assert(@array2d.get(0, 1) == expect[0][1])
    assert(@array2d.get(0, 2) == expect[0][2])
    assert(@array2d.get(1, 0) == expect[1][0])
    assert(@array2d.get(1, 1) == expect[1][1])
    assert(@array2d.get(1, 2) == expect[1][2])

  # it 'const', ->
  #   array2d = Array2D.create(2, 3, 0);
  #   expectArray2d = [
  #     [0, 0, 0]
  #     [0, 0, 0]
  #   ]
  #   assert.deepEqual(array2d, expectArray2d)
  #
  #   array2d[1][2] = 1
  #   expectArray2d = [
  #     [0, 0, 0]
  #     [0, 0, 1]
  #   ]
  #   assert.deepEqual(array2d, expectArray2d)
  #
  # it 'get', ->
  #   array2d = [
  #     [0, 1, 2]
  #   ]
  #   assert(Array2D.get(array2d, 1, 1) == undefined)

  # it 'constructor', ->
