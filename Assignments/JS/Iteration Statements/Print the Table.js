// Print the Table

// Write a program which takes a number from user and print the table.

// Note: You have to complete Print_Table. No need to take any input.
// Input Format

// The input contains a single number N

// .
// Output Format

// Print the table of the given number.
// Constraints

// 1≤N≤100

// Time Limit

// 1 second
// Example
// Sample Input

// 3
// Sample Output

// 3∗1=3

// 3∗2=6
// 3∗3=9
// 3∗4=12
// 3∗5=15
// 3∗6=18
// 3∗7=21
// 3∗8=24
// 3∗9=27
// 3∗10=30

// Code:


const Print_Table = (N) => 
{
  for(i = 1; i <= 10; i++){
      console.log(`${N} * ${i} = ${N * i}`);
  }
};

