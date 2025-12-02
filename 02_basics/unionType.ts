let score:number | string =33 //useof uniontype string or number values are acceptable
score='34'

type User={
    name:string,
    id:number
}

type Admin={
    username:string,
    id:number
}
let people:User | Admin ={name:'xyz',id:224}

//redifining
people={username:'abc',id:23}

function getDbId(id: number | string){
    //making some API calls
    console.log(`DB id is: ${id}`);
    //you cant individually make use of any methods from eithrt datatype 
    //like to lowerCase or floor on number|string
    //union narrowing
    if(typeof id==='number'){
        console.log('Its a number')
        id.toPrecision(5)
    }
    else{
        console.log('Its a string')
        id.toLowerCase()
    }
}
getDbId(3)
getDbId("3") //acceptable

//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window" //specific words not datatype

seatAllotment = "aisle"
// seatAllotment = "crew"

export {}