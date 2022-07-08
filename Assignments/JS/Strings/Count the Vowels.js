// Count the Vowels

// You are given a string S

//  containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

// Note: You have to complete Count_Vowel function. No need to take any input.
// Input Format

// The first and only line of the input contains string  S

// . 
// Output Format

// Return the number of Vowels in the string S

//  as output.
// Constraints

// 1≤|S|≤100
// , where |S| denotes the length of string S

// . 
// Time Limit

// 1 second
// Example
// Sample Input

// Prepbytes
// Sample Output

// 2

// Code:


var Count_Vowels= (S) => 
{
  let vowels = ['a','e','i','o','u'];
  let count = 0;
  for(let i in S){
    for(let j in vowels){
      if(vowels[j] === S[i].toLowerCase()){
        count++;
      }
    }
  }
  return count;
};
 
