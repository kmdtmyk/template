Field = require("../src/field")

describe 'test', ->

  it 'field test', ->
    field = new Field(2, 3)
    assert(field.col == 2)
    assert(field.row == 3)


  it 'size', ->
    field = new Field(6, 13)
    assert(field.size() == 6 * 13)


  it "1+1は2であるべき！", ->
    assert(1 + 1 == 3)
    # assert.notEqual(1 + 1, 3)
