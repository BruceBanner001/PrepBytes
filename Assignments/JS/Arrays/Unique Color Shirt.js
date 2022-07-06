// Unique Color Shirt

// Prepbuddy is very tasteful of clothes. 
// He has N
//  numbers of shirts hanging in the hanger in his wardrobe.
// Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. 
// Prepbuddy wants you to find M

// .

// Note: As there are many shades of a color so consider integers as a color name.
// i.e, color of shirt is 0,1,2, … , N.
// Input Format

// The first line of the input contains an integer N
//  denoting the number of shirts in the wardrobe.
// The second line of the input contains N integers C1,C2,C3,C4,...,CN

//  color of shirts (separated by space).
// Output Format

// Return a single integer M

//  denoting the unique colored shirts left in the wardrobe. 
// Constraints

// 1<=N<=103

// 1<=C[i]<=103

// Time Limit

//  1 second
// Example
// Input

// 6
// 3 2 4 1 2 3
// Output

// 2
// Sample test case explanation

// Input: C=3, 2, 4, 1, 2, 3
// Output: 2

// There are two 2-color shirts, and two 3-color shirts.
// So, after removing 2-color and 3-color shirts, the remaining shirts are one 4-color shirt and one 1-color shirt i.e, 4, 1.
// Hence, the output will be 2. 

// Code:


function Unique_Shirts (arr,N) {
    let result = {};
    let count = 0;
    for(let i = 0; i < N; i++){
      if(result[arr[i]]){
        result[arr[i]] += 1;
      }
      else{
        result[arr[i]] = 1;
      }
    }
    let resultValues = Object.values(result);
    for(let j = 0; j < resultValues.length; j++){
      if(resultValues[j] === 1){
        count += 1;
      }
    }
    return count;
}