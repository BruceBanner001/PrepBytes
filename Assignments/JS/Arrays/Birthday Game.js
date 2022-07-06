// Birthday Game

// Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by A[i]

// . 

// She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month M
//  and the sum of the integers on the squares is equal to his birthday D

// . 

// You must determine how many ways she can divide the chocolate.
// Input Format

//     The first line consists of an integer N

//  which denotes the number of squares in the chocolate bar.       
// The second line consists of N
//  space-separated integers A[i]
// , consisting of numbers on the chocolate bar squares.        
// The third line contains an integer D
//  and M

//      which denotes Yatharth's birthday and his birth month respectively.     

// Output Format

// Print an integer denoting the total number of ways that Anamika can partition her chocolate bar to share with Yatharth.
// Constraints

// 1<=N<=90

// 1<=A[i]<=5
// 1<=D<=31
// 1<=M<=12

// Example
// Input

// 5
// 2 2 1 3 2
// 4 2
// Output

// 2
// Explanation

// Anamika wants to find segments summing to Yatharth's birthday, D=4
//  with a length matching his birth month, M=2. In this case, two segments are meeting her criteria: [2,2] and [1,3].

//  Code:
 
function Birthday_Game(arr,D ,M) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < M; i++){
      sum += arr[i];
    }
    if(sum === D){
      count++;
    }
    for(let i = M; i < arr.length; i++){
      sum += arr[i];
      sum -= arr[i - M];
      if(sum === D){
      count++;
    }
    }
    return count;
  }
  
  