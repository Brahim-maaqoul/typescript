function myLogFunction() {
    return (str:string) => {
        console.log(str);
    }
}

const logger = myLogFunction();
logger("my string");

function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog:string = "";
        log(str:string) {
            this.completeLog += str + "\n";
        }
        dumpLog() {
            return this.completeLog;
        }
    }
}

const   MyLogger = createLoggerClass();
const   logger2 = new MyLogger();

logger2.log("foo");
console.log(logger2.dumpLog());

function CreateSimpleMemoryDatabase<T>() {
    return class SimpleMemoryDatabase {
        private db:Record<string, T> = {};

        set(id:string, value: T) {
            this.db[id] = value;
        }
        get(id:string): T {
            return this.db[id];
        }
        getObject(): object {
            return this.db;
        }
    }
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();
const simpleMemoryDatabae = new StringDatabase();
// simpleMemoryDatabae.set("1", "bmaaqoul");
// console.log(simpleMemoryDatabae.get("1"));

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{
    getObject(): object;
}>>(Base: T) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject());
        }
    };
}

const DumpableStringDatabase = Dumpable(StringDatabase);
const dsd = new DumpableStringDatabase();
dsd.set("Brahim", "hello Brahim");
dsd.dump();