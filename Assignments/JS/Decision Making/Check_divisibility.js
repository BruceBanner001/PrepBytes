// Check whether the condition is fulfilled or not?

// Write a program that takes a number and prints whether the number is divisible by 6
//  and 9

//  or not.

// Note: You have to complete Check_divisibility. No need to take any input
// Input Format

// The input contains a single number N

// .
// Output Format

// If the condition is satisfied return "Divisible by both" (without quotes) else return "Not Divisible by both" (without quotes). 
// Constraints

// 1≤N≤10000

// Time Limit

// 1 second
// Example
// Sample Input 1

// 36
// Sample Output 1

// Divisible by both
// Sample Input 2

// 27
// Sample Output 2

// Not Divisible by both

//Code:

const Check_divisibility = (N) => {
    if((N % 6 === 0) && (N % 9 === 0)){
      return "Divisible by both"
    }
    else{
      return 'Not Divisible by both'
    }
};