



export = class Array2D{

    private array2d;

    constructor(row, col, value){
        this.array2d = [];
        for(var i = 0; i < row; i++){
            var array = [];
            for(var j = 0; j < col; j++){
                array.push(value);
            }
            this.array2d.push(array);
        }
    }

    public get(y, x){
        if(this.array2d[y] == undefined){
            return undefined;
        }
        return this.array2d[y][x];
    }

    public set(y, x, value): void{
        if(this.array2d[y] == undefined){
            return;
        }
        this.array2d[y][x] = value;
    }

    // reset: (value) ->
    //
    // clone: ->

}
