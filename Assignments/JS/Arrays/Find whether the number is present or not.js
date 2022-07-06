// Find whether the number is present or not

// Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.

// Note: You have to complete Find_Num. No need to take any input.
// Input Format

// The first line contains an integer N
// , denoting the size of the array.
// The second line contains N space-separated integers, denoting the elements of the array.
// The third line contains an integer M

// , denoting the element that needs to be searched.
// Output Format

// Return the "YES" (without quotes) else return "NO" (without quotes).
// Constraints

// 1≤N≤100

// 1≤ElementoftheArray≤1000

// Time Limit

// 1 second
// Example
// Sample Input

// 5
// 1 2 3 4 5
// 2
// Sample Output

// YES

// Code:

const Find_Num = (array,N,M) => 
{
  for(let i = 0; i < N; i++){
    if(M === array[i]){
      return 'YES';
    }
  }
  return 'NO';
};
 
