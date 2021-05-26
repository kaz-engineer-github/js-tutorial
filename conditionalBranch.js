// task
if ("0") {
    alert( 'Hello' ); // work? -> Yes
}

// task
let question = prompt("What's official name of JavaScript?", '');

if ( question == 'ECMAScript' ) 
{
    alert( 'Right!' );
}
else
{
    alert( "Didn’t know? ECMAScript!" );
}

// task
let q_comparison = prompt("please type a number", ''); // variable name should be value
if ( q_comparison > 0 )
{
    alert("greater than 0");
}
else if ( q_comparison < -1 )
{
    alert("less than -1");
}
else if ( q_comparison == 0 )
{
    alert("equal to 0");
}

// task
// if (a + b < 4) {
//     result = 'Below';
//   } else {
//     result = 'Over';
// }

// rewite conditional operator -> "?"
let a = prompt("type a", '');
let b = prompt("type b", '');

result = ( a + b < 4 ) ? 'Below' : 'Over';
alert(result);

// task
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// rewite conditional operator -> "?"
let message;
let login = prompt("login message", '')

message = ( login == 'Employee' ) ? message = 'Hello' :
          ( login == 'Director' ) ? message = 'Greetings' :
          ( login == '' ) ? message = 'No login' :
          message = '';

alert( message );