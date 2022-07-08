// Count Characters

// You are given a string S
// , and your task is to return an array B (having a size of 2), where B[0] contains the count of character A (uppercase) in string S and B[1]

//  contains the count of character D (uppercase) in string S.

// Note: You have to complete countCharacters function. No need to take any input.
// Input Format

// The first and the only line of the input contains a string S

// .
// Output Format

// Return array B

//  as output.
// Constraints

// 1≤|S|≤100
// , where |S| denotes the length of string S. 
// S

//  contains both lowercase and uppercase alphabets.
// Time Limit

// 1 second
// Example
// Sample Input

// AbaDd
// Sample Output

// 1 1

// Code:


const countCharacters = (S) => 
{
  let count = [0, 0];
  for(let i = 0; i < S.length; i++){
    if(S[i] === 'A'){
      count[0]++;
    }
    else if(S[i] === 'D'){
      count[1]++;
    }
  }
  return count;
};