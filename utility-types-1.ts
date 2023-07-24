interface   MyUser {
    name:string;
    id:string;
    email?:string;
}

type    MyUserOptionals = Partial<MyUser>;//set all fields to optional

const merger = (user:MyUser, overrides:MyUserOptionals):MyUser => {
    return{
        ...user,
        ...overrides,
    }
}
console.log(merger({name:"brahim", id:"1",email:"gyro"},{}));

type    RequiredMyUser = Required<MyUser>;//opposite of Partial<>

type    JustEmailAndName = Pick<MyUser, "email" | "name">;//pick<type, key> picks a key from the type

const   mapById = (users:MyUser[]): Record<MyUser["id"], MyUser> => {//MyUser["id"] to make sure if we change the type of the id field, it changes dynamically in all
    return users.reduce((a, v) => {
        return {
            ...a,
            [v.id]: v,
        }
    },{});
}

console.log(mapById([
    {
        id: "foo",
        name: "Mr. Foo"
    },
    {
        id:"baz",
        name:"Mr. Baz"
    }
]))
//we don't have an error cause the email is optional
type UserwithoutId = Omit<MyUser, "id">;//Omit is the opposit of Pick