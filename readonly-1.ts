interface Cat {
    name: string;//we can use the 'readonly' keyword to make that field immutable
    breed: string;
}

// type readOnlyCat = Readonly<Cat>;//make every field in this interface immutable

function makeCat(name:string, breed:string): Readonly<Cat> {
    return {
        name,
        breed
    }
}

const usul = makeCat("Usul", "Tabby");
// usul.name = "hitler";

function makeCoordinates(x:number, y:number, z:number):readonly [number,number,number]{
    return [x,y,z];
}

const c1 = makeCoordinates(10,20,30);
// c1[0] = 50;//to make this immutable in tuples we use 'readonly' keyword too but with lower-case 'r'!
const reallyConst = [1,2,3] as const//to make the array immutable
// reallyConst[0] = 50;