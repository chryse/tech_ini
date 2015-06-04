function mergeSort(arr) {
	if(arr.length < 2) return arr;
	var middle = Math.floor(arr.length /2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length);
	console.log("left:", left, " right:", right);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	var result = [];

	while(left.length && right.length) {
		if(left[0] < right[0]) result.push(left.shift());
		else result.push(right.shift());
	}

	while(left.length) {
		result.push(left.shift());
	}

	while(right.length) {
		result.push(right.shift());
	}
	console.log("merge result:", result);
	return result;
}

var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("input: ", arr);
console.log(mergeSort(arr));
