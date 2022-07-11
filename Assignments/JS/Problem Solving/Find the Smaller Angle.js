// Find the Smaller Angle

// PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.

// Note: You have to complete Minimal_Angle function. No need to take any input.
// Input Format

// The input contains two number h
//  and m

// , which represents the current time as hour and minutes.
// Output Format

// Return the Minimal angle formed between the Hour hand and Minute hand.
// Constraints

// All valid times
// Time Limit

// 1 second
// Example
// Sample Input 1

// 5 30
// Sample Output 1

// 15
// Sample Input 2

// 6 0
// Sample Output 2

// 180

// Code:


var Minimal_Angle = (h, m) => 
{
  const minute = m * 6;
  const hour = (h * 30) + (m * 0.5);
  const angle = Math.abs(hour -  minute);
  return Math.min(angle, 360 - angle);
};
 
