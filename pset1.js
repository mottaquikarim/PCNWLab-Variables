// Hi, let's describe your characteristics

/*
    P1:
    Create a variable called `myFullName` 
    that stores your full name as a variable

*/


// -------------------------------------------
/*
    P2:
    Create a variable called `myHeight`
    that represents your height in inches

*/

// -------------------------------------------
/*
    P3:
    Create a variable called `myBirthYear`
    that stores your year of birth

*/

// -------------------------------------------
/*
    P4:
    Create a variable called `currentYear`
    that stores current year

*/

// -------------------------------------------
/*
    P5:
    Create a variable called `myAge`
    that computes your current age
    from `myBirthYear` and `curentYear`

*/

// -------------------------------------------
/*
    P6:
    Create a string called `myDescription`
    that incorporates the values above 
    into a small string description about you
    
    ie: Hello, my name is [fullName] and I am [myHeight]...
    etc
    

*/

// -------------------------------------------
let myFullName = "Kevin Zheng";
let myHeight = 5.8;
let myBirthyear = 1995;
let currentYear = 2018;
let myAge = currentYear - myBirthyear;
let myDescription = "Hello, my name is " + myFullName + " and I am " + myHeight + " inches. I am " + myAge + " years old.";
console.log(myDescription);