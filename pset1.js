// Hi, let's describe your characteristics

/*
    P1:
    Create a variable called `myFullName` 
    that stores your full name as a variable

*/
 
 
let myFullName = 'Mielyn Acosta'



// -------------------------------------------
/*
    P2:
    Create a variable called `myHeight`
    that represents your height in inches

*/



 let myHeight = 64;


// -------------------------------------------
/*
    P3:
    Create a variable called `myBirthYear`
    that stores your year of birth

*/


let myBirthYear = 1988; 


// -------------------------------------------
/*
    P4:
    Create a variable called `currentYear`
    that stores current year

*/


let currentYear = 2018;


// -------------------------------------------
/*
    P5:
    Create a variable called `myAge`
    that computes your current age
    from `myBirthYear` and `curentYear`

*/


let myAge = currentYear - myBirthYear;



// -------------------------------------------
/*
    P6:
    Create a string called `myDescription`
    that incorporates the values above 
    into a small string description about you
    
    ie: Hello, my name is [fullName] and I am [myHeight]...
    etc
    

*/


let myDescription = "Hello, my name is "  + myFullName + " and I am "  + myAge  + " years old." + 
                  "my height is" + myHeight + "inches." + " We are in the year of " + currentYear.

  console.log(myDescription); 
// -------------------------------------------


