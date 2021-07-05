/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
    tempDict={}
    newstr =""
    for (var i = 0; i < str.length; i++) {
        if(tempDict.hasOwnProperty(str[i])) {
        }else{
            newstr += str[i]
            tempDict[str[i]] = true
        }
    }
    return newstr
}
console.log(stringDedupe(str1))
console.log(stringDedupe(str2))



/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {
    var words = str.split
    var wordreversed = "";

    for (var word of words){
    var reverseWord="";

    for (var i; word.length - 1; i >= 0; i--;)
    }
}