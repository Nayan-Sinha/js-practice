const name = "Nayan "
const age = 25

/* console.log(name + age); */  //don't use this syntax of concatenation, it's outdated

console.log(`hello my name is ${name.toUpperCase()}and my age is ${age}`);       // use this syntax and it is call string interpolation

 const fullName = new String('NayanSinha')        // It is also another way to declare string.

/*  console.log(fullName[5]);      // to access the key i.e. 0=N, 1=a,2=y etc

 console.log(fullName.length);  // to get the string length */

 /* console.log(fullName.toUpperCase());   // the string will be all in uppercase letter

 console.log(fullName.charAt(3));       // it will show the position of the character

 console.log(fullName.indexOf('y'));    // it will show the indexing of the character */

const newString = fullName.substring(0, 5)
console.log(newString);                         //the output will be Nayan, remember it will count total -1 means if you give 0 to 3 the total character you will get upto 0 to 2 means (Nay)

const anotherString = fullName.slice(0, 4)
console.log(anotherString);                     // the output will be Naya

let newStringOne = "  Hii there!!  " 
console.log(newStringOne);                      // it will show the output with space of first and last
console.log(newStringOne.trim());               // it will ommit the space of first and last

let url = "https://nayan.com/nayan$3sinha"      // it will replace any thing
console.log(url.replace('$3', '_'));           // for example the output came https://nayan.com/nayan_sinha
                                                
console.log(url.includes('nayan'));            // The includes() method returns true if a string contains a specified string.

const newName = new String('Krishna Ram Mahadev')        // so it's converting string into array form
console.log(newName.split(' '));                        // output we get [ 'Krishna', 'Ram', 'Mahadev' ]





