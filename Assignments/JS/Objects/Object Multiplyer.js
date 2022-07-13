// Object Multiplyer

// Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.
// Input Format

// There are three line in input, where the first one contains N,
// And the next two lines contains the first data member i.e. id and second data member i.e. houseno.
// Output Format

// Just complete the function, No need to print anything.
// Example
// Sample Input

// 2
// 12
// 146
// Sample Output

// 24
// 292

// Code:

function Check(a,obj1) {
    obj1.id *= a;
    obj1.houseno *= a;
    return obj1;
  }
  
  