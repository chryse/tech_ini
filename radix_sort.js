function radixSort(arr) {

	// figure out the number of binary digits we're dealing with
	var len = Math.ceil(Math.log(Math.max.apply(Math, arr)) / Math.log(2));

	for (var i = 0; i < len; i++) {
		var digit = 0;
		var bit = 1 << i;
		console.log("bit:", bit);
    	for (var j = 0; j < arr.length; j++) {
        	var tmp = arr[j];
        	if ((tmp & bit) == 0) {
				// this number is a 0 for this digit
				// move it to the front of the list
            	arr.splice(digit++, 0, arr.splice(j, 1)[0]);
            	console.log("arr:", arr);
        	}
    	}
	}

	return arr;
}


var arr = [34, 2, 45, 102, 45, 203, 10001, 1];

console.log(radixSort(arr));
