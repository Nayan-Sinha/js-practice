console.log(2>1);     // output you will get true
console.log(2>=1);      // output you will get true
console.log(2<1);       // output you will get false
console.log(2==1);      // output you will get false
console.log(2!=1);      // output you will get true

//for commenting first slelect the area you want and then press shift+alt+a
// single line comment just use //(doble back-slash)

//so remeber one thing when you compare any thing be assured that the DATATYPES must be same otherwise the actual output you might get different.
                            
console.log("2" > 1);       // output you will get true
console.log("02" >= 1);     // output you will get true
console.log("02" > 2);      // output you will get false
console.log("02" >= 2);     // output you will get true 
console.log("2" == 2);      // output you will get true

// In JS >, < >=, <= and == operator works a bit different
//Comparisions convert null to number, treating it as 0.
// so here null is euals to 0 

console.log(null > 0);      // output you will get false
console.log(null == 0);     // output you will get false
console.log(null >= 0);     // output you will get true

// strict check i.e with ===

console.log("2" === 2);     // output you will get false

