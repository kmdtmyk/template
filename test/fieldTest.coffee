Field = require("../src/field")

describe 'field test', ->

  it 'constructor', ->
    field = new Field()
    assert(field.col == 6)
    assert(field.row == 13)


  it 'size', ->
    field = new Field(6, 13)
    assert(field.size() == 6 * 13)


  # it "1+1は2であるべき！", ->
    # assert(Field.RED == 1)
    # console.log (Field.DEFAULT_COL)
    # assert.notEqual(1 + 1, 3)
