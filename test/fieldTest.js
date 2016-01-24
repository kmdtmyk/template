Field = require("../src/field")


describe('test', function(){

    it('field test', function(){
        field = new Field(2, 3)

        assert(field.col == 2)
        assert(field.row == 3)
    });


    it('size', function(){
        // expect(field.size()).toEqual(781)
    });

    it("1+1は2であるべき！", function(){
        assert(1 + 1 == 3)
    });

});
