// Hi, let's describe your characteristics

/*
    P1:
    Create a variable called `myFullName` 
    that stores your full name as a variable

    

*/

let firstName = "Nadav"
let lastName = "Green"
let myFullName = firstName + " " + lastName


// -------------------------------------------
/*
    P2:
    Create a variable called `myHeight`
    that represents your height in inches


*/

let feet = 6
let inches = 0
let myHeight = (12 * feet) + inches

// -------------------------------------------
/*
    P3:
    Create a variable called `myBirthYear`
    that stores your year of birth


*/

    let thisYear = 2018
    let currentAge = 23
    let myBirthYear = thisYear - currentAge
   
// -------------------------------------------
/*
    P4:
    Create a variable called `currentYear`
    that stores current year



*/

    let startYear = 2000
    let presidentTerm = 4
    let presidents = 4.5
    let currentYear = startYear + presidentTerm * presidents

// -------------------------------------------
/*
    P5:
    Create a variable called `myAge`
    that computes your current age
    from `myBirthYear` and `curentYear`


*/

    let myAge = currentYear - myBirthYear  

// -------------------------------------------
/*
    P6:
    Create a string called `myDescription`
    that incorporates the values above 
    into a small string description about you
    
    ie: Hello, my name is [fullName] and I am [myHeight]...
    etc


*/

let myDescription = "Hello, my name is " + myFullName + " and I am " + myHeight + " inches tall. The current year is " + currentYear + " but I was born in " + myBirthYear + ". I am currently " + myAge

console.log(myDescription)

// -------------------------------------------


