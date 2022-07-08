// Plaindrome Check

// You are given a string S
// , Your task is to check wether the given string is a Palindrome

//  or not.

// A Palindrome

//  is a string, which turnout same when read in reverse direction.
// Example: "naman" is a Palindrome.
// String can contain both upppercase lowercase letters.

// Note: You have to complete Plain_Check function. No need to take any input.
// Input Format

// The first and the only line of the input contains a string S

// .
// Output Format

// Return "True" if the given string is Palindrome

//  else return "False" (without " ") .
// Constraints

// 1≤|S|≤100
// , where |S| denotes the length of string S. 
// S

//  contains both lowercase and uppercase alphabets.
// Time Limit

// 1 second
// Example
// Sample Input 1

// Naman
// Sample Output 1

// False
// Sample Input 2

// naman
// Sample Output 2

// True

// Code:

 
var Palin_Check = (str) =>
{
	let reversed = '';
  for(let i = str.length-1; i >= 0; i--){
    reversed += str[i];
  }
  if(str === reversed){
    return 'True';
  }
  else{
    return 'False';
  }
}

