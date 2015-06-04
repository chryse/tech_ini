function bubbleSort(arr) {
	for(var i = 0; i < arr.length-1; i++) {
		for(var j = 0; j < arr.length-1-i; j++) {
			if(arr[j] > arr[j+1]) {
				var tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([3, 20, 2, 1, 30, 15]));

function betterBubbleSort(arr) {
	var isSwapped;
	var count = 0;

	do {
		isSwapped = false;
		for(var i = 0; i < arr.length-1-count; i++){
			if(arr[i] > arr[i+1]) {
				var tmp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = tmp;
				isSwapped = true;
			}
		}
		count++;
	}
	while(isSwapped);
	return arr;
}

console.log(betterBubbleSort([3, 20, 2, 1, 30, 15]));
