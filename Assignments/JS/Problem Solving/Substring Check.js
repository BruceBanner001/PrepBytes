// Substring Check.

// You are given two strings S1
//  and S2

// , you need to check whether the string S1 is a substring of string S2 or not.

// Note: You have to complete Substring_Check function. No need to take any input.
// Input Format

// The first line of input contains the first string S1
// .
// The second line of input contains the second string S2

// .
// Output Format

// Return "YES" if S1
//  is a substring of S2

//   else return "NO".
// Constraints

// 1≤|S1|,|S2|≤100
// , where |S| denotes the length of string S

// . 
// Time Limit

// 1 second
// Example
// Sample Input 1

// Hii this is Prepbuddy
// Prepbuddy
// Sample Output 1

// YES
// Sample Input 2

// Hii this is Prepbuddy
// Prepbytes
// Sample Output 2

// NO

// Code:


var Substring_Check = (S1, S2) => 
{
  for(let i in S1.split(' ')){
    if(S1.split(' ')[i] === S2){
      return 'YES';
    }
  }
  return 'NO';
};
 