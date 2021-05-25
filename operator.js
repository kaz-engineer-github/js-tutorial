// task
let a = 1, b = 1;

let c = ++a; // ? -> c will be 2
let d = b++; // ? -> d will be 1
console.log(`c is ${c}`, `d is ${d}`);

// task
let e = 2;

let x = 1 + (e *= 2); // ? -> x will be 5, e will be 4
console.log(`x is ${x}`, `e is ${e}`);

// task
"" + 1 + 0 // -> "10"
"" - 1 + 0 // -> -1
true + false // -> 1
6 / "3" // -> 2
"2" * "3" // -> 6
4 + 5 + "px" // -> "9px"
"$" + 4 + 5 // -> "$45"
"4" - 2 // -> 2
"4px" - 2 // -> NaN
7 / 0 // -> 0
"  -9  " + 5 // -> -95
"  -9  " - 5 // -> -14
null + 1 // -> 1
undefined + 1 // -> 1
" \t \n" - 2 // -> ???

// Answer
"" + 1 + 0 // -> "10" (1)
"" - 1 + 0 // -> -1 (2)
true + false // -> 1
6 / "3" // -> 2
"2" * "3" // -> 6
4 + 5 + "px" // -> "9px"
"$" + 4 + 5 // -> "$45"
"4" - 2 // -> 2
"4px" - 2 // -> NaN
7 / 0 // -> Infinity
" -9  " + 5 // -> " -9  5" (3)
" -9  " - 5 // -> -14 (4)
null + 1 // -> 1 (5)
undefined + 1 // -> NaN (6)
" \t \n" - 2 // -> -2 (7)

// task
let y = prompt("First number?", 1);
let z = prompt("Second number?", 2);

alert(y + z); // 12
alert(+y + +z); // 3