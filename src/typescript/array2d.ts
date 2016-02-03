



export = class{

    private map;

    constructor(row, col, value){
        this.map = [];
        for(var i = 0; i < row; i++){
            var array = [];
            for(var j = 0; j < col; j++){
                array.push(value);
            }
            this.map.push(array);
        }
    }

    public get(y, x){
        if(this.map[y] == undefined){
            return undefined;
        }
        return this.map[y][x];
    }

    public set(y, x, value): void{
        if(this.map[y] == undefined){
            return;
        }
        this.map[y][x] = value;
    }

    public toArray(){
        return JSON.parse(JSON.stringify(this.map));
    }
    // reset: (value) ->
    //
    // clone: ->

}
