// Find the Fives.

// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

// Note: You have to complete Find_Five. No need to take any input.
// Input Format

// The input contains a single number N

// .
// Output Format

// Return the number of fives as the desired output.
// Constraints

// 1≤N≤10000000

// Time Limit

// 1 second
// Example
// Sample Input

// 345654
// Sample Output

// 2

// Code:

const Find_Five = (N) => 
{
  let count = 0;
  while(N > 0){
    if(N % 10 == 5){
      count += 1;
    }
    N = parseInt(N /10)
  }
  return count;
};

