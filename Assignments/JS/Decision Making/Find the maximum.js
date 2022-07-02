// Find the maximum out of three numbers.

// Take three numbers and print the largest number among them if all of three are same print  −1

// .

// Note: You have to complete Max_out_of_three. No need to take any input.
// Input Format

// The input contains three numbers A
// , B and C

// .
// Output Format

// Return the maximum number out of the three numbers as result.
// Constraints

// 1≤A,B,C≤10000

// Time Limit

// 1 second
// Example
// Sample Input

// 2 5 4
// Sample Output

// 5

// Code:


const Max_out_of_three = (A,B,C) => {
    if((A > B) && (A > C)){
      return A;
    }  
    else if((B > A) && (B > C)){
      return B;
    }
    else if((C > A) && (C > B)){
      return C;
    }
    else{
      return -1;
    }
  
  };