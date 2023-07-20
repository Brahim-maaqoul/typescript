function    pluck<DataType, KeyType extends keyof DataType>(
 items:DataType[],
 key:KeyType
):DataType[KeyType][] {
	return items.map((item) => item[key])
}

const	dogs = [
	{name:"mimi", age:12},
	{name: "LG", age:14},
]
console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));

interface	BaseEvent {
	time:number;
	user:string;
}

interface	EventMap {
	addToCart: BaseEvent & { quantity: number; productID: string;},//addToCart is BaseEvent + the other properties
	checkOut: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name:Name,data:EventMap[Name]):void{
	console.log([name, data]);
}

sendEvent("addToCart", {time:10,user:"bmaaqoul",quantity:20,productID:"1"})

//So basically generics are like templates in c++