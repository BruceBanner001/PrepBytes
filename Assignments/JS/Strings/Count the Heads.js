// Count the Heads

// Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.

// Note: You have to complete Count Head function. No need to take any input.
// Input Format

// The first and the only line of the input contains a string  S

//  (with no space and contains only lowercase letters).
// Output Format

// Return updated String S

//  as output, where the string contains the charcter followed by their occurrence(if greater than 1) in alphabetical order.
// Constraints

// 1≤|S|≤100
// , where |S| denotes the length of string S. 
// S

//  contains only lowercase alphabets.
// Time Limit

// 1 second
// Example
// Sample Input

// prepbytes
// Sample Output

// e2p2

// Code:


var Count_Occ = (s) => 
{
  let result = '';
  const uniqueSet = new Set(s.split(''));
  let array = [];
  for(const element of uniqueSet){
    array.push(element);
  }
  array.sort();
  for(let i in array){
    let count = 0;
    for(let j in s){
      if(array[i] === s[j]){
        count++;
      }
    }
    if(count > 1){
      result +=array[i]+count;
    }
  }
  return result;
};
 
