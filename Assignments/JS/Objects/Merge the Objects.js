// Merge the Objects

// Complete the function in the editor. In which you are given two objects as a parameter.In which you have to merge two objects and return a single object.
// Input Format

// The input consists of four lines,
// In which first lines contains two data members of first object which are defined as name and id. And the next two lines contains two data members for the second object which are defined as state and code.
// Output Format

// Just complete the function.
// Example
// Sample Input

// Utkarsh 
// 129
// Haryana
// 121009
// Sample Output

// Utkarsh
// 129
// Haryana
// 121009

// Code:


function Check(obj1,obj2) {
    return Object.assign(obj1, obj2);
  }
  
  