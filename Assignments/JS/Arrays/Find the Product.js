// Find the Product.

// Write a program that takes an array as input from the user and find out the product of the elements.

// Note: You have to complete Find_Prod. No need to take any input.
// Input Format

// The input contains a single number N
// , followed by N

//  numbers as array elements.
// Output Format

// Return the required answer.
// Constraints

// 1≤N≤20

// 1≤ElementoftheArray≤100

// Time Limit

// 1 second
// Example
// Sample Input

// 5
// 1 2 3 4 5
// Sample Output

// 120

// Code:

const Find_Prod = (array, N) => 
{
  let result = 1;
  for(let i = 0; i < N; i++){
    result *= array[i];
  }
  return result;
};
 
