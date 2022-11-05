const reverseString = function(text) {
    let reversedString = "";
    for(i = text.length-1; i >= 0; i--){
        reversedString = reversedString + text.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;


//using array solution
//const reverseString = function(string) {
//    return string.split('').reverse().join('');
//   };