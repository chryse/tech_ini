function isAnagram(word, pattern) {
	var pattern_word = new RegExp(pattern, "gi");
	if(pattern_word.test(word)) return true;
	else return false;
}


console.log(isAnagram("palindrome", "rome"));
console.log(isAnagram("wikipedia", "Wiki"));
console.log(isAnagram("wikipedia", "diaaa"));