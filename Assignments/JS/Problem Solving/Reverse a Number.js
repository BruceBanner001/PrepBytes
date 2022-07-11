// Reverse a Number.

// Write a program which takes a numebr N

//  as input from the user and You need to reverse the number.

// Note: You have to complete Reverse_Number function. No need to take any input.
// Input Format

// The input contains a single number N

// .
// Output Format

// Return the reversed number.
// Constraints

// 1≤N≤100000

// Time Limit

// 1 second
// Example
// Sample Input 1

// 1900
// Sample Output 1

// 91
// Sample Input 2

// 2012
// Sample Output 2

// 2102

// Code:

 
var Reverse_Number = (N) => 
{
  let result = 0;
  while(N > 0){
    result = (result + N % 10) * 10;
    N = parseInt(N / 10);
  }
  return result / 10;
};
 
 
// var Reverse_Number = (N) => 
// {
//     let result = 0;
//     for(i =1; N > 0; N /10){
//         result = (result + N % 10) *10;
//         console.log(result);
//         N = parseInt(N /10)
//     }
//     return N / 10;
// };
 
