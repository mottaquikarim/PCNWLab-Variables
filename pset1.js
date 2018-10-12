// Hi, let's describe your characteristics

/*
    P1:
    Create a variable called `myFullName` 
    that stores your full name as a variable

*/

const myFullName = "Srirupa Datta"
console.log(myFullName);

// -------------------------------------------
/*
    P2:
    Create a variable called `myHeight`
    that represents your height in inches

*/

const heightFeet = 5;
const heightInches = 6;
const myHeight = heightFeet + " feet, " + heightInches + " inches";
console.log(myHeight);

// -------------------------------------------
/*
    P3:
    Create a variable called `myBirthYear`
    that stores your year of birth

*/

const myBirthYear = 1987
console.log(myBirthYear);
// -------------------------------------------
/*
    P4:
    Create a variable called `currentYear`
    that stores current year

*/

let currentYear = 2018
console.log(currentYear);
// -------------------------------------------
/*
    P5:
    Create a variable called `myAge`
    that computes your current age
    from `myBirthYear` and `curentYear`

*/

let myAge = ((currentYear - myBirthYear) - 1)
console.log(myAge);
// -------------------------------------------
/*
    P6:
    Create a string called `myDescription`
    that incorporates the values above 
    into a small string description about you
    
    ie: Hello, my name is [fullName] and I am [myHeight]...
    etc
    

*/

let myDescription = ("Hello my name is " + myFullName + ". I'm " + myAge + " years old and " +myHeight + " tall.");
console.log(myDescription);

// -------------------------------------------


