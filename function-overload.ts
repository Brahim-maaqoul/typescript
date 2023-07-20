 interface  coordinate{
    x:number,
    y:number
 }

 function   getCoordinate(obj:coordinate):coordinate;
 function   getCoordinate(x:number, y:number):coordinate;
 function   getCoordinate(str:string):coordinate;
 function   getCoordinate(arg1:unknown, arg2?:unknown):coordinate{//the '?' mark to set the parameter to optional
    let coord:coordinate = {
        x:0,
        y:0,
    };
    if (typeof arg1 === 'string')
    {
        (arg1 as string).split(",").map(str => {
            let [key, value] = str.split(":");
            coord[key as 'x' | 'y'] = parseInt(value, 10);
        })
    }
    else if (typeof arg1 === 'object')
        coord = {
            ...(arg1 as coordinate)
        }
    else
        coord = {
            x:arg1 as number,
            y:arg2 as number
        }
    return coord;
 }

 console.log(getCoordinate(10, 15));
 console.log(getCoordinate({x:20,y:40}));
 console.log(getCoordinate("x:20,y:41"));