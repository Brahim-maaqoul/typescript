class   Doggy {
    constructor(public readonly name: string, public age: number){
    }
}

const   lg = new Doggy("LG", 13);
// lg.name = "foo";
console.log(lg.name);

class   DogList {
    private doggies: Doggy[] = [];

    static  instance: DogList = new DogList();

    private constructor(){}

    static  addDog(dog:Doggy){
        DogList.instance.doggies.push(dog)
    }
    getDogs(){
        return this.doggies;
    }
}

DogList.addDog(lg);
console.log(DogList.instance.getDogs());
DogList.instance;
// const dl = new DogList();