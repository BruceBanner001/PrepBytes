// Check whether the Objects are same or not.

// Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables name and id.
// Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
// Return "true" if new_name and id are same as objects name and id otherwise return  "false".
// Input Format

// The first line contains one name and one id separated by new line.
// The second line contains new_name and new_id separated by new line.
// Output Format

// Return "true" if both objects are same else return "false".
// Example
// Sample Input

// Utkarsh 
// 2 
// Prepbytes 
// 3
// Sample Output

// false

// Code:

function check(obj1,a,b) {
    if(obj1.name === a && obj1.id === b){
      return 'true';
    }  
    else{
      return 'false';
    }
  }
  
  