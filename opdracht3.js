module.exports.flipText = flipText;
module.exports.checkPalindrome = checkPalindrome;

//assignment 3.1, flip a string when entererd. the value is returned, and printed in the display function, pure logic here.
function flipText(text) {
    //check if empty string, this is our ending condition (recursion!)
    if (text === "") {
        return "";
    } else {
        // like pythonic slice, it grabs a part of the string. for each recursion it chops the first one off and adds it to the back. Then it shoves that new string into a recursive function call, those calls keep happening untill the string is empty "", then it returns the results. 
        return flipText(text.slice(1)) + text.charAt(0);
    }
}


function checkPalindrome(text) {
    var isPalindrome = true;
    //again ending condition, either empty or a single character left
    if (text === "" || text.length == 1) {
        return isPalindrome;
    }
    //checking wether the first and last letters are identical, if not, its not a palindrome.
    if (text.charAt(0).toLowerCase() !== text.charAt(text.length - 1).toLowerCase()) {
        isPalindrome = false;
        return isPalindrome;
    }
    //recursion happens here, cuts off first and last letter with slice (not natively available in java apparently), and returns the result
    return checkPalindrome(text.slice(1, -1));

}