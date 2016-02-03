Array2D = require("../../src/coffee/array2d")

describe 'array2d', ->

  beforeEach ->
    @array2d = new Array2D(2, 3, 0)

  it 'toArray', ->
    expect = [
      [0, 0, 0]
      [0, 0, 0]
    ]
    assert.deepEqual(expect, @array2d.toArray())

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
    assert.deepEqual(expect, @array2d.toArray())
