// String Replace

// You are given a string S
// , along with a pattern string and a text string. 
// You need to repalce the pattern string in S

//  to the text string.

// Note: You have to complete Replace function. No need to take any input.
// Input Format

// The first and the only line of the input contains a string S

// .
// Output Format

// Return updated String S

//  as output.
// Constraints

// 1≤|S|≤100
// , where |S| denotes the length of string S. 
// S

//  contains both lowercase and uppercase alphabets.
// Time Limit

// 1 second
// Example
// Sample Input

// Hi, I am You.
// You
// Prepbytes
// Sample Output

// Hi, I am Prepbytes.

// Code:


var Replace = (S, pattern , text) => 
{
  return S.replace(pattern, text);
};
 
