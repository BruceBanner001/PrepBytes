// Check whether the Package is Dream Package or not

// Complete the function in the editor. In which you are given an object as a parameter.
// In that object, there is one property named as salary if the salary is maximum than 5 lakh then return "Dream" otherwise  return "NotDream".
// Input Format

// The first Line contains 1 package of a student.
// Output Format

// If the salary is a maximum of 5 lakh then return "Dream" otherwise return "NotDream".
// Example
// Sample Input

// 100000
// Sample Output

// NotDream

// Code:

function Check(obj1) {
    if(obj1.salary > 500000){
      return 'Dream';
    }
    else{
      return 'NotDream';
    }
  }
  
  