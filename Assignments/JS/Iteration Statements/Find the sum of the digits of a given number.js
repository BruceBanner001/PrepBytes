// Find the sum of the digits of a given number.

// Write a program that takes a number from the user and get the sum of the digits present in the number.

// Note: You have to complete Number_Sum. No need to take any input.
// Input Format

// The input contains a single number N

// .
// Output Format

// Return the sum of the digits of the number.
// Constraints

// 1≤N≤10000

// Time Limit

// 1 second
// Example
// Sample Input

// 1234
// Sample Output

// 10

// Code:


const Number_Sum = (N) => 
{
	let count = 0;
  while(N > 0){
    count += N % 10;
    N = parseInt(N / 10);
  }
  return count;
};

