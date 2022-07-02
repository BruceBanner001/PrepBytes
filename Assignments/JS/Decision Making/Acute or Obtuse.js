// Check whether the triangle is Acute or Obtuse

// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

// Note: You have to complete Triangle_Check. No need to take any input
// Input Format

// The input contains three numbers A
// , B and C

//  which denotes the angles of a triangle.
// Output Format

// Return the required result.
// Constraints

// 0≤A,B,C≤180

// Time Limit

// 1 second
// Example
// Sample Input

// 60 100 20
// Sample Output

// obtuse

// Code:


const Triangle_Check = (A,B,C) => {
    if(A < 90 && B < 90 && C < 90){
      return 'acute'
    }
    else if((A >90 && A < 180) || (B >90 && B < 180) || (C >90 && C < 180)){
      return 'obtuse'  
    }
    else{
      return 'The triangle is not acute or obtuse'
    }
  };