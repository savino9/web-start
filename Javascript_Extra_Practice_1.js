// Javascript Extra Practice 1

/* level 0.9 */
// write a function that, given an array of both letters and numbers, returns a new array that contains only the letters from the first array.

var arr = [1,"ciccio",50,6,"susan"];

function newArr(arg) {
	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		if(typeof arr[i] === 'string'){
			arr2.push(arr[i]);
		}
	}
}
newArr(arr);
console.log(arr2);

// Level 0.9
// create a function that takes in two strings and prints out the first letter in each of them.

// examples:
// "happy", "face" ---> "hf"
// "abra", "cadabra" ---> "ac"

/**
* level 1
*
* Implement an "equals with epsilon" function. The function should check if two numbers are
* equal within a certain margin of error. The function should take in three parameters: the
* two values to compare, and an "epsilon" value that determines the error margin. The function
* should return true or false.
*
* You are not allowed to use any "Math.*" functions.
* examples:
* 10, 11, epsilon 0.5 ---> false
* 10, 10.2, epsilon 0.3 ---> true
*/

// level 1.5

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

// level 2

// given an array of integers, return that array, sorted. You may not use the "sort"
// function or any other array functions