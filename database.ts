interface   database{
    get(id:string):string,
    set(id:string,value:string):void
}

interface   save{
    saveString():string,
    restoreFromString(str:string):void
}

class data implements database{
    protected map:Record<string,string> = {};
    get(id:string):string{
        return this.map[id];
    }
    set(id:string, value:string):void{
        this.map[id] = value;
    }
}

class   saving extends data implements save{
    saveString(): string {
        return JSON.stringify(this.map);
    }
    restoreFromString(str: string): void {
        this.map = JSON.parse(str);
    }
}


const myDB = new saving();

myDB.set("1", "bmaaqoul");
myDB.set("2", "tbouzalm");
console.log(myDB.get("1"));
const saved = myDB.saveString();
console.log(saved);
myDB.restoreFromString(saved);
// myDB.map["foo"] = "baz";
console.log(myDB.get("2"));
//redaJAANIT1337@2020