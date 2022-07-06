// Count Occurrences

// You are given an array A
//  containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A

// .

// Note: You have to complete findCount function. No need to take any input.
// Input Format

// The first line of the input contains two space-separated integers N
//  and K, denoting the number of elements in the array A and the element whose count needs to be determined, respectively.
// The second line of the input contains N space-separated integers, denoting the elements of the array A

// .
// Output Format

// Return the count of occurrences of K
//  in array A

// .
// Constraints

// 1≤N≤100

// 1≤K≤100
// 0≤Ai≤100

// Time Limit

// 1 second
// Example
// Sample Input

// 4 3
// 3 3 1 2
// Sample Output

// 2

// Code:


const findCount = (N, K, Arr) => 
{
  let result = 0;
  for(let i = 0; i < N; i++){
    if(K === Arr[i]){
      result += 1;
    }
  }
  return result;  
};
 
