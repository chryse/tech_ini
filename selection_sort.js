function selectionSort(arr) {
	var minIndex;
	for(var i = 0; i < arr.length-1; i++) {
		minIndex = i;
		for(var j = i+1; j < arr.length; j++) {
			if(arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		var tmp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = tmp;
	}
	return arr;
}

console.log(selectionSort([2, 1, 4, 10, 9]));
