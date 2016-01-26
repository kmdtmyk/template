

class Field

  @EMPTY = 0

  @RED = 1
  @BLUE = 2
  @YELLOW = 3
  @GREEN = 4
  @PURPLE = 5
  @BLACK

  @NUISANCE
  @TOKUTEN
  @KATA
  @SUN

  @BLOCK

  @DEFAULT_COL = 6
  @DEFAULT_ROW = 13


  constructor: (options) ->
    options = options || {}
    @col = options.col || Field.DEFAULT_COL
    @row = options.row || Field.DEFAULT_ROW

  size: ->
    @col * @row

  reset: ->

  step: ->

  set: (x, y, type) ->


  get: (x, y, type) ->




module.exports = Field;
