// Min and Max

// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given N

//  elements, find the minimum and maximum numbers among those elements.
// Input format

// First-line contains N
//  representing the length of the array.
// The second line contains N

//  space-separated integers.
// Output format

// Return minimum and maximum elements.
// Constraints

// 1<=N<107

// 0<=A[i]<=107

// Time limit

// 1

//  second
// Example
// Input

// 6

// 3 1 4 6 2 7

// Output

// 1
//  7

// Sample Test Case Explanation

// In the first test case
// minimum element = 1
//  and
// maximum element = 7

// Code:

 
function arrayMin(arr) {
    let minimum = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(minimum > arr[i]){
        minimum = arr[i];
      }
    }
    return minimum;
  }
  
  function arrayMax(arr) {
    let maximum = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(maximum < arr[i]){
        maximum = arr[i];
      }
    }
    return maximum;
  }
  
  