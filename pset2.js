// MAKE SURE YOU CONSOLE LOG EVERY ANSWER TO ENSURE 
// YOU'RE DOING IT CORRECTLY (please)

// pleae create:
// a variable called `helloWrold`, you can set it equal to whatever you want
let helloWrold = "Hello World";
console.log(helloWrold);

// a variable called `this_is_snake_cased`, you can set it equal to whatever you want
let this_is_snake_cased = "thisIsSnakeCased";

console.log(this_is_snake_cased);



// a variable called `thisVarHasNumbers111`, you can set it equal to whatever you want
let thisVarHasNumbers111 = '111';
console.log(thisVarHasNumbers111);


// 1. create a string - it should be your first name
const firstName = 'Robert';
console.log(firstName);


// 2. create another string - it should be your last name
const lastName = 'Abreu';
console.log(lastName);

// 3. create a third string using the first two strings you've defined
// it should read [FIRST NAME][SPACE][LAST NAME]
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// 4. create a string - it should be your middle name

const middleName = 'Jose';
console.log(middleName);
// 5. redefine the string in step 3. so that it now shows 
// [FIRST NAME][SPACE][MIDDLE NAME][SPACE][LAST NAME]

fullName = firstName + ' ' + middleName+ ' ' + lastName;
console.log(fullName);

fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);

