var arr = [4, 3, 2, 5, 6, 1, 8];

function quickSort(arr) {
	if(arr.length < 2) return arr;
	var pivot = arr[0];
	var left = []
	var right = [];

	for(var i = 1; i < arr.length; i++) {
		if(pivot > arr[i]) left.push(arr[i]);
		else right.push(arr[i]);
	}

	return quickSort(left).concat([pivot]).concat(quickSort(right));
}

console.log(quickSort(arr));

function quickSort1(arr) {
	if(arr.length < 2) return arr;
	var half = Math.floor(arr.length /2);
	var pivot = arr[half];
	var left = [];
	var right = [];

	for(var i = 0; i < half; i++) {
		if(pivot > arr[i]) left.push(arr[i]);
		else right.push(arr[i]);
	}
	for(var j = half+1; j < arr.length; j++) {
		if(pivot > arr[j]) left.push(arr[j]);
		else right.push(arr[j]);
	}

	return quickSort1(left).concat([pivot]).concat(quickSort1(right));
}

console.log(quickSort1(arr));
console.log([4, 1, 2, 6, 3, 6, 7, 10, 3, 2, 5]);
console.log(quickSort1([4, 1, 2, 6, 3, 6, 7, 10, 3, 2, 5]));
