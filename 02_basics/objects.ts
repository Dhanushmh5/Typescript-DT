const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isAvtive: true
}

// function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)



// function createCourse():{name: string, price: number}{//argument is also an object
//     return {name: "reactjs", price: 399} //return type in object format
// }

// Type aliasing in TS

type User = {
    name: string;
    email: string;
    isActive: boolean
}// -->> acts as a custom datatype composed of multiple datatypes


function createUser(user: User): User{ //return type is also a user
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})











export {}