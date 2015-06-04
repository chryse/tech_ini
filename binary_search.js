var arr = [11, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function(a, b) {
	return a - b;
});
console.log(arr);
var input = 9;

function binarySearch(arr, input) {
	var middle = Math.floor(arr.length /2);
	console.log("middle", middle);

	if(arr[middle] == input) return input;

	else if(arr[middle] > input && arr.length > 1) {
		console.log("middle:", middle, " input:", input);
		return binarySearch(arr.splice(0, middle), input);
	}

	else if(arr[middle] < input && arr.length > 1) {
		console.log("middle:", middle, " input:", input);
		return binarySearch(arr.splice(middle+1, arr.length), input);
	}

	else return -1;
}

console.log(binarySearch(arr, input));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11));
