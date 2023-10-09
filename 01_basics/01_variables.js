const accountId=8575
let accountEmail="nayan@gmail.com"
var accountPassword="1234"
accountCity="Siliguri"
let accountState

accountEmail="babu@google.com"
accountPassword="55896"
accountCity="Darjeeling"

//accountId=258//
/*
> prefer not to use var, because of issue in block scope and functional scope.
> scope means {}.
> In js you may or maynot use semicolon ;  doesn't matter at all.
> In Js if you mention any variable but did not declare any value, then automatically the state of the variable will be undefined.
*/

/*
In JavaScript variables can be declared without using any keyword.
so, it's just a note, but for good practice, one always should use keyword
*/
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])