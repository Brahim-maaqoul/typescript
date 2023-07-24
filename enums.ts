enum    FutureIsLoading {
    load="load",
    loaded="loaded",
    loading="loading"
}

function    isLoading(loadingg:FutureIsLoading):boolean{
    return loadingg === FutureIsLoading.loading;
}

console.log(isLoading(FutureIsLoading.load));

function    rollDice(d: 1 | 3 | 7):number{
    let dice = 0;
    for (let i = 0; i < d; i++)
        dice+= Math.floor(Math.random() * i) + 5;
    return dice;
}

console.log(rollDice(1));

function sendEvent(name:"checkOut", data:{prod: number}):void
function sendEvent(name:"addToCart", data:{productId: number}):void


function    sendEvent(name:string, data:unknown):void{
    console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent("addToCart",{productId:123});