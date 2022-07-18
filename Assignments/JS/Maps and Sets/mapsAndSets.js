// Problem  1:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef

function removeDuplicate(inp){
    const uniqueElements = [...new Set(inp.split(''))];
    console.log(uniqueElements.join(''));
}

removeDuplicate('abcadeecfb');

// Problem 2:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

function countingLetters(inp){
    const uniqueElements = inp.split('');
    let count = {};
    uniqueElements.map((value) => {
        if(count[value]){
            count[value] += 1;
        }
        else{
            count[value] = 1;
        }
    }
    )
    for(i in count){
        console.log(`${i} = ${count[i]}`);
    }
}
countingLetters('abcadeecfb');