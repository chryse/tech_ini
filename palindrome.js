function palindrome(word) {
	word = word.replace(/\W/g, "").toLowerCase();
	var arr = word.split("");
	var middle = Math.floor(arr.length / 2);
	var isPalindrome = false;
	console.log("word:", word, " middle:", middle);
	for(var i = 0; i < middle; i++) {
		console.log("i: ", i);
		if(arr[i] == arr[arr.length-1-i]) {
			isPalindrome = true;
		}
		//else isPalindrome = false;
	}
	return isPalindrome;
}

console.log(palindrome("dod"));
console.log(palindrome("ddasadd"));
console.log(palindrome("dog"));
console.log(palindrome("cat"));
console.log(palindrome("dddd"));
console.log("levels", palindrome("levels"));
console.log("level", palindrome("level"));
console.log("A car, a man, a maraca", palindrome("A car, a man, a maraca"));

console.log("=================");

// write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.
function isPalindrome(string) {
	string = string.replace(/\W/g, "").toLowerCase();
	console.log(string);
	return string == string.split("").reverse().join("");
}

console.log("level", isPalindrome("level"));
console.log("levels", isPalindrome("levels"));
console.log("A car, a man, a maraca", isPalindrome("A car, a man, a maraca"));
