
var Field = require("../src/field.js");
// import {*} from "../src/field.js";

var Util = require("../src/util");

describe('test', function() {

    it('入力した文字列が大文字に変換される', function() {
        var array = []
        expect(array.length).toEqual(0);
    });

    it("field test", function(){
        var field = new Field(1, 5);
        expect(field.col).toEqual(1);
        expect(field.row).toEqual(5);
    })

    it("Util test", function(){
        expect(Util.add(1, 2)).toEqual(3);
    })

});
