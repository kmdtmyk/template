
Util = require("./util");

class Field

    constructor: (col, row)->
        @col = col
        @row = row

    size: ->
        Util.multi(@col, @row)


module.exports = Field;
