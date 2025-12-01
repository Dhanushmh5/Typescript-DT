let greetings:string='Dhanush'
console.log(greetings)

// greetings=true //error due to type mismatch

// greetings.toLowercase()

//number

let userid:number=2233445
let str:string=userid.toLocaleString()

//boolean

let isLoggedIn:boolean=false
console.log(isLoggedIn)

//Type Inference

let num=234.45//--> TS is smart enough to infer type in such cases avoid colon
num.toFixed()
// num='asjc'//error

// any

let hero; //any datatype

function getHero(){
    return "thor"
}

hero = getHero()




export {} //temporary way to avoid error