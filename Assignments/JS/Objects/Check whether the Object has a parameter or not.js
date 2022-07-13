// Check whether the Object has a parameter or not

// Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no parameter in the object otherwise return "true".
// Input Format

// 0 as a means no variable in an object and 1 means there are variables in an object.
// Output Format

// Return "false" if there is no parameter in the object otherwise return "true".
// Example
// Sample Input

// 1
// Sample Output

// true

// Code:


function Check(obj1) {
    if(Object.entries(obj1) === 0){
      return 'false';
    }  
    else{
      return 'true';
    }
  }
  
  