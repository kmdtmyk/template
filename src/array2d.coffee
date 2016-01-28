

module.exports = class Array2D

  constructor: (row, col, value) ->
    @array2d = []
    for i in [0...row]
      array = []
      for j in [0...col]
        array.push(value)
      @array2d.push(array)

  get: (y, x) ->
    if @array2d[y] == undefined
      return undefined
    @array2d[y][x]

  set: (y, x, value) ->
    if @array2d[y] == undefined
      return
    @array2d[y][x] = value
    return

  reset: (value) ->

  clone: ->



  # @create: (row, col, value) ->
  #   array2d = []
  #   for i in [0...row]
  #     array = []
  #     for j in [0...col]
  #       array.push(value)
  #     array2d.push(array)
  #   array2d
  #
  # @get: (array2d, y, x) ->
  #   if array2d[y] == undefined
  #     undefined
  #
  #   array2d[y][x]
