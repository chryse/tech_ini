// Write a function and return true or false
//if there is a  pair of number that sum up as 10.

function pairTen(arr) {
	for(var i = 0; i < arr.length; i++) {

		for(var j = 0; j < arr.length; j++) {
			if(i == j ) break;
			if(arr[i] + arr[j] == 10) {
				return true;
			}
		}
	}
	return false;
}


console.log(pairTen([2, 4, 9, 9, 0]));
console.log(pairTen([1, 0, 8, 4, 7, 5, 11, 5, 5]));
