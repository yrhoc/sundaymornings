/*
The palindrome function return true when the given string
is a palindrome. If not, it returns false.

A palindrome is a word or sentence that's spelled
the same way both forward and backward.
We ignore punctuation, case, and spacing.

Complexity is in O(n)
*/

function palindrome(str) {

  //We ignore punctuation and spacing.
  str = str.replace(/[^a-zA-Z0-9]/g,"");
  //We ignore case
  str = str.toLowerCase();

  var i = 0;
  var j = str.length - 1;

  //Now let's compare characters between the beginning and the end
  while(i < (str.length - 1) / 2 && j > (str.length - 1) / 2) {
    if(str[i] !== str[j])
    {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

palindrome("not a palindrome");
palindrome("kayak");
