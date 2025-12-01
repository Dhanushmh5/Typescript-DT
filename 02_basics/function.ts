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


export {}