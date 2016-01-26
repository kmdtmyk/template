

class Util

  @array2d: (row, col, value) ->
    array2d = []
    for i in [0...row]
      array = []
      for j in [0...col]
        array.push(value)
      array2d.push(array)
    array2d


module.exports = Util
