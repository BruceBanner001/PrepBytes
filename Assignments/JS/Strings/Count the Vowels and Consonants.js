// Count the Vowels and Consonants

// You are given a string S

//  containing both uppercase and lowercase letters. 
// You need to find out the number of vowels and the number of consonants in the given string.

// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.
// Input Format

// The first and only line of the input contains string  S

// . 
// Output Format

// Return the number of Vowels and the number of Consonants in the string S

//  in the functions.
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
// 7

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
var Count_Consonants= (S) => 
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
  return S.length - count;
};
 