function palindrome(str) 
{
  //The /[\W]/gi is used to remove any non alphabetic characters...
  //from the word/sentence.
  const strconv = str.replace(/[\W_]/gi,'').toLowerCase();   
  //A variable to store the inverse of the word/sentence.     
  const revstr  = strconv.split('').reverse().join('');
 return strconv === revstr;
 

}
console.log(palindrome("eye"));