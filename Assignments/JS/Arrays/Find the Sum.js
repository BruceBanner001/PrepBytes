// Find the Sum.

// Write a program which takes an array as input from the user and find out the sum of the array elements.

// Note: You have to complete Find_Sum. No need to take any input.
// Input Format

// The input contains a single number N
// , followed by N

//  numbers as array elements.
// Output Format

// Return the required answer.
// Constraints

// 1≤N≤100

// 1≤ElementoftheArray≤1000

// Note: You have to complete Find_Sum function. No need to take any input.
// Time Limit

// 1 second
// Example
// Sample Input

// 5
// 1 2 3 4 5
// Sample Output

// 15

// Code:


const Find_Sum = (array, N) => 
{
  let result = 0;
  for(let i = 0; i < N; i++){
    result += array[i];
  }
  return result;
};
 
