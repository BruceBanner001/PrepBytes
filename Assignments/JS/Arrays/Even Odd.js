// Even Odd

// You are given an array A
//  containing N integer elements, and your task is to return an array B (having a size equal to 2), where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A

// .

// Note: You have to complete findEvenOdd function. No need to take any input.
// Input Format

// The first line of the input contains an integer N
// , denoting the number of elements in the array A.
// The second line of the input contains N space-separated integers, denoting the elements of array A

// .
// Output Format

// Return array B

//  as output.
// Constraints

// 1≤N≤100

// 0≤Ai≤100

// Time Limit

// 1 second
// Example
// Sample Input

// 7
// 1 2 3 4 5 6 7
// Sample Output

// 12 16

// Code:


const findEvenOdd = (N, Arr) => 
{
  let result = [0, 0];
  for(let i = 0; i < N; i++){
    if(Arr[i] % 2 === 0){
      result[0] += Arr[i];
    }
    else{
      result[1] += Arr[i];
    }
  }
  return result;
};
 
