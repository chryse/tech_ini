// In a given list of words, find matching words in the list
// that can be generated from the patterns of a given word.

var list = ["cat", "dog", "bird", "cat", "dog", "rat", "pig"];

function matchWord(list) {
	var result = {};
	for(var i = 0; i < list.length; i++) {
		if(result[list[i]]) result[list[i]]++;
		else result[list[i]] = 1;
	}

	return result;
}

console.log(matchWord(list));
