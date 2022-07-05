// Check whether a Number is a prime or not.

// Write a program which takes  a number from user and check whether number is prime number or not a prime number.

// Note: You have to complete Prime_Check. No need to take any input.
// Input Format

// The input contains a single number N

// .
// Output Format

// Return "YES" if the given number is Prime, else print "NO"(without quotes).
// Constraints

// 1≤N≤10000

// Time Limit

// 1 second
// Example
// Sample Input 1

// 7
// Sample Output 1

// YES
// Sample Input 2

// 4
// Sample Output 2

// NO

// Code:


const Prime_Check = (N) => 
{
	 if(N < 2){
	   return 'NO';
	 }
	 else if(N === 2){
	   return 'YES';
	 }
	 for(let i = 2; i < N; i++){
	   if(N % i === 0){
	     return 'NO';
	   }
	 }
	 return 'YES';
};
