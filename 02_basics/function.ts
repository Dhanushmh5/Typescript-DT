function addTwo(num1:number){

    //no need to check the type
    return num1+2
}
addTwo(5) //'5' also works so apply strict check in parameters
//addTwo("5")

function getUpper(val: string){
    return val.toUpperCase()
}

getUpper('abc')
//getUpper(5)-->error

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

loginUser("h", "h@h.com")

function signUpUser(name: string, email: string, isPaid: boolean){}
signUpUser("hitesh", "hitesh@lco.dev", false)


// function getVal(myVal:number){
//     if(myVal>5){
//         return true;

//     }
//     else{
//         return '200 ok'
//     }
// }
//accepatble code how to handle more than one return data type

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`//automatically intitaes into string for hero
    //context switching of TS is clean
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);//never is advisable to use for handling errors 
    //function stops execution or
    
}



export {}