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

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }// -->> acts as a custom datatype composed of multiple datatypes


// function createUser(user: User): User{ //return type is also a user
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}


myUser.email = "h@gmail.com"
// myUser._id = "asa"


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}
//you need a card no and card date befor entering cvv so use & all of them together
type cardDetails = cardNumber & cardDate & {//mix and match of types
    cvv: number
}












export {}