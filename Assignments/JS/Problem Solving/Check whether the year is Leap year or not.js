// Check whether the year is Leap year or not.

// Write a program which takes an year N

//  as input from the user and find out whether the given year is a Leap Year or not.

// Note: You have to complete Check_Leap function. No need to take any input.
// Input Format

// The input contains a single number N

// , which represents a year.
// Output Format

// Return "Leap Year" if the given year is a Leap Year  else return "Non Leap Year".
// Constraints

// 1000≤N≤10000

// Time Limit

// 1 second
// Example
// Sample Input 1

// 1900
// Sample Output 1

// Non Leap Year
// Sample Input 2

// 2012
// Sample Output 2

// Leap Year 

// Code:
 
var Check_Leap = (year) => 
{
  if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return 'Leap Year';
  }
  else{
    return 'Non Leap Year';
  }
};
 
