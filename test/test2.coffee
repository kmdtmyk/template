Field = require("../src/field")

describe 'test', ->

    it 'field test', ->
        field = new Field(2, 3)
        expect(field.col).toEqual(2)
        expect(field.row).toEqual(3)
