Field = require("../src/field")
# assert = require("power-assert")

describe 'test', ->

    it 'field test', ->
        field = new Field(2, 3)
        # expect(field.col).toEqual(2)
        # expect(field.row).toEqual(3)
        assert(field.col == 2)
        assert(field.row == 3)


    it 'size', ->
        # field = new Field(6, 13)
        # expect(field.size()).toEqual(781)

    it "1+1は2であるべき！", ->
        
        assert(1 + 1 == 3)
