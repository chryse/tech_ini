// Find the kth hightest element in a given array

function kth_high(arr, k) {
	var max;
	for(var i = 0; i < arr.length-1; i++) {
		max = i;
		for(var j = i+1; j < arr.length; j++) {
			if(arr[j] > arr[max]) {
				max = j;
			}
		}
		var tmp = arr[max];
		arr[max] = arr[i];
		arr[i] = tmp;
	}

	return arr.splice(0, 3);
}


console.log(kth_high([1, 23, 12, 9, 30, 2, 50], 3));
