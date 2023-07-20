// function	printIngrediant(quantity:string, ingrediant:string, optional?:string){
// 	console.log(`${quantity} ${ingrediant} ${optional ? ` ${optional}` : ""}`);
// }

// printIngrediant("lhwa", "zen")

interface	User{
	id:string;
	info?:{
		email?:string
	}
}

function	getEmail(user:User):string{
	return user?.info?.email ?? "";//the '?' mark to check if the field exist or not and the '??' to check if it's NULL
}
let user:User = {
	id:"d",
	info:{
		email:"r4r"
	}
}
console.log(getEmail(user));

function	addWithCallback(x:number, y:number, callback?: () => void){
	console.log([x, y]);
	callback?.();//so in functions callbacks we add '.' next to '?' to check if it exists or not
}

let map:Record<number, string>;