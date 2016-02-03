

module.exports = class

  constructor: (row, col, value) ->
    @map = []
    for i in [0...row]
      array = []
      for j in [0...col]
        array.push(value)
      @map.push(array)

  get: (y, x) ->
    if @map[y] == undefined
      return undefined
    @map[y][x]

  set: (y, x, value) ->
    if @map[y] == undefined
      return
    @map[y][x] = value
    return

  reset: (value) ->

  clone: ->

  toArray: ->
    JSON.parse(JSON.stringify(@map))


  # @create: (row, col, value) ->
  #   map = []
  #   for i in [0...row]
  #     array = []
  #     for j in [0...col]
  #       array.push(value)
  #     map.push(array)
  #   map
  #
  # @get: (map, y, x) ->
  #   if map[y] == undefined
  #     undefined
  #
  #   map[y][x]
