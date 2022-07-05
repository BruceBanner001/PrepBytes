// Print the Odds.

// Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

// Note: You have to complete Print_Odd. No need to take any input.
// Input Format

// The input contains a single number N

// .
// Output Format

// Print the desired output.
// Constraints

// 2≤N≤100

// Time Limit

// 1 second
// Example
// Sample Input

// 10
// Sample Output

// 2
// 3
// 5
// 7
// 9

// Code:

const Print_Odd = (N) => 
{
	 for(i = 2; i <= N; i++){
	   if((i == 2) || (i % 2 != 0)){
	     console.log(i);
	   }
	 }
};

