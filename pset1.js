// Hi, let's describe your characteristics

/*
    P1:
    Create a variable called `myFullName` 
    that stores your full name as a variable

*/

const myFullName = "Karan Taneja"


// -------------------------------------------
/*
    P2:
    Create a variable called `myHeight`
    that represents your height in inches

*/

const myHeight = 65

// -------------------------------------------
/*
    P3:
    Create a variable called `myBirthYear`
    that stores your year of birth

*/

const myBirthYear = 1993

// -------------------------------------------
/*
    P4:
    Create a variable called `currentYear`
    that stores current year

*/

const currentYear = 2018;

// -------------------------------------------
/*
    P5:
    Create a variable called `myAge`
    that computes your current age
    from `myBirthYear` and `curentYear`

*/

const myAge = currentYear - myBirthYear

// -------------------------------------------
/*
    P6:
    Create a string called `myDescription`
    that incorporates the values above 
    into a small string description about you
    
    ie: Hello, my name is [fullName] and I am [myHeight]...
    etc
    

*/

const myDescription = "Hello, my name is " + myFullName + " and I am " + myHeight + " inches talls. I was born in " + myBirthYear + " so I will be " +  myAge + " in " + currentYear + "."

// -------------------------------------------

console.log(myDescription)
