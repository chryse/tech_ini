function insertionSort(arr) {
	for(var i = 0; i < arr.length; i++) {
		var tmp = arr[i];
		console.log("tmp:", tmp, " i:", i);
		for(var j = -1+i; j > -1 && arr[j] > tmp; j--) {
			arr[j+1] = arr[j];
			//console.log("arr:", arr);
		}
		arr[j+1] = tmp;
		//console.log("after inner for loop:", arr);
	}
	return arr;
}

var arr = [5, 4, 3, 2, 1]
console.log("input:", arr);
console.log("result:");
console.log(insertionSort(arr));

var arr = [5, 4, 3, 2, 1];

function insertionSort1(arr) {
	for(var i = 1; i < arr.length; i++) {
		var tmp = arr[i];
		var counter = i;
		console.log("i:" ,i, " counter:", counter, " tmp:", tmp);
		while(counter > 0 && arr[counter-1] > tmp) {
			arr[counter] = arr[counter-1];
			console.log("i:", i, " counter: ", counter, " arr: ", arr);
			counter--;
		}
		arr[counter] = tmp;
		console.log("counter:", counter, " arr:", arr);
	}
	return arr;
}

console.log("==========new function=========");
console.log("input:", arr);
console.log(insertionSort1(arr));
