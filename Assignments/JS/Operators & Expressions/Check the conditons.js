/* You are given two numbers A and B

. You need to do the following checks:

    if both are divisible by 10 console true.
    if both are not divisible by 10 console false.
    if one of them only is divisible by 10 console true.

Use operator to do this.

Note: You have to complete Check function. No need to take any input.*/

const Check = (A, B) => 
{
  if (A % 10 === 0 || B % 10 === 0) {
    return true;
  }
  else{
    return false;
  }
};

