
function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {

        console.log(`String ${string} is a palindrome`);
    }
    else {
        console.log(`String ${string} is not a palindrome`);
    }
}


checkPalindrome("Rutuja");
checkPalindrome("mom");
