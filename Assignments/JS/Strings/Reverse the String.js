// Reverse the String

// You are given a string S

// , Your task is to Reverse the string.
// String can contain both upppercase lowercase letters. 
// Note: You have to complete Reverse_String function. No need to take any input.
// Input Format

// The first and the only line of the input contains a string S

// .
// Output Format

// Return the reversed String.
// Constraints

// 1≤|S|≤100
// , where |S| denotes the length of string S. 
// S

//  contains both lowercase and uppercase alphabets.
// Time Limit

// 1 second
// Example
// Sample Input

// I am utkarsh raj
// Sample Output

// jar hsraktu ma I

// Code:


var Reverse_String = (str) => 
{
  let result = '';
  for(let i = str.length-1; i >= 0; i--){
    result += str[i];
  }
  return result;
};
 
