// Find the  sum of Object Members

// You are given a function Check which takes an object Obj

//  as a parameter.
// Your taks is to find out the sum of the three data members of the object. The data members are named as p1, p2, p3.

// Note: You have to complete Check function. No need to take any input.
// Input Format

// The input contains three number p1
// , p2 and p3

// , which represents the data members of the object.
// Output Format

// Return the sum of all members of the given object.
// Constraints

// 1≤p1,p2,p3≤1000

// Time Limit

// 1 second
// Example
// Sample Input

// 1
// 2
// 3
// Sample Output

// 6

// Code:


function Check(obj1) {
    let result = obj1.p1 + obj1.p2 + obj1.p3;
    return result;
  }
  
  
  