// task
alert( null || 2 || undefined ); // What's output? -> 2

// task
alert( alert(1) || 2 || alert(3) ); // What's output? -> alert(1) -> Wrong. First 1, next 2.

// task
alert( 1 && null && 2 ); // What's output? -> null

// task
alert( alert(1) && alert(2) ); // What's output? -> first 1, next 2 -> Wrong. First 1, next undefined

// task
alert( null || 2 && 3 || 4 ); // What's output? -> 3

// task
// Write program to check age is between 14 and 90. Use if.
let age = prompt("input age", '');
if ( age >= 14 && age <= 90 )
{
    alert("age is between 14 and 90.");
}

// task
// Write 2 programs to check age is not between 14 and 90.
// Use Not operand in one program. Don't use Not operand in another program.
if ( !(age >= 14 && age <= 90))
{
    alert("age is not between 14 and 90.");
}

if ( age < 14 || age > 90 )
{
    alert("age is not between 14 and 90.");
}

// task
// What's output? 
if (-1 || 0) alert( 'first' ); // Nothing -> Wrong. Output is 'first'.
if (-1 && 0) alert( 'second' ); // Nothing
if (null || -1 && 1) alert( 'third' ); // 'third'

// task
// Write login program. Use prompt function.
let userInput = prompt("Who's there?", '');
// let userPassword = prompt("Password?", ''); // -> Not here.

if ( userInput == "Admin" )
{

    let userPassword = prompt("Password?", '');

    if ( userPassword == "TheMaster" )
    {
        alert("Welcome!");
    }
    else if ( userPassword == null )
    {
        alert("Canceled");
    }
    else if ( userPassword != "TheMaster" )
    {
        alert("Wrong password!");
    }
}
else if ( userInput == null )
{
    alert("Canceled");
}
else if ( userInput != "Admin" )
{
    alert("I don't know you");
}
