//Present in Typescript but not in Javascript

//Tuples


let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

//general definition
let rgb: [number, number, number] = [255, 123, 112]

//type definition for tuples
type uUser = [number, string]

const newUser: uUser = [112, "example@google.com"]

newUser[1] = "hc.com"
//newUser.push(true)
//newUser.push([123,'abc'])//push doesnt work on string | number 
//cant catch tuple array for push function