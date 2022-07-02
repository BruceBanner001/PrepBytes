// Eligible Voter

// You are given an integer A

// , denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.

// Note: You have to complete isEligible function. No need to take any input
// Input Format

// The first and the only line of the input contains an integer A

// , representing the age of a person.
// Output Format

// If the person is eligible to vote, return "Eligible for Voting" otherwise, return "Not Eligible for Voting" (without quotes).
// Constraints

// 0≤A≤120

// Time Limit

// 1 second
// Example
// Sample Input

// 13
// Sample Output

// Not Eligible for Voting

// Code:


const isEligible = (a) => {
    if(a >= 18){
      return 'Eligible for Voting';
    }
    else{
      return 'Not Eligible for Voting';
    }
  };