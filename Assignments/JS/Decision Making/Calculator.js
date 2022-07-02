// Calculator

// Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.

// Note: You have to complete Calculator. No need to take any input
// Input Format

// The input contains a operator symbol (+,−,∗,/)
//  along with two natural numbers B and C

// .
// Output Format

// Return the required result.
// Constraints

// 1≤B,C≤1000

// Time Limit

// 1 second
// Example
// Sample Input

// +

//  1 2
// Sample Output

// 3

//Code:


const Calculator = (A, B, C) => 
{
	switch (A){
	  case '+':
	    return B + C;
	  case '-':
	    return B - C;
	  case '*':
	    return B * C;
	  case '/':
	    return B / C;
	  default:
	    break;
	}
};