const accountId = 12345
let accountEmail = 'vikash@gmail.com'
var accountPass='4321'
accountCity = 'jaipur'



// accountId =2 // not allowed

accountEmail ='a@b.c'
accountPass ='0000'
accountCity ='pune'

console.log(accountId)

console.table([accountId,accountEmail,accountPass,accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope

*/