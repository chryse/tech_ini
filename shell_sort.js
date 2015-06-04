function shellSort (arr) {
    var len = parseInt(arr.length /2);
    for (var i = len; i < arr.length; i++) {
        var tmp = arr[i];
        for (var j = i; j >= len && tmp < arr[j - len]; j -= len) {
            arr[j] = arr[j - len];
        }
        arr[j] = tmp;
    }
    return arr;
}

var arr = [5,4,3,2,1];
console.log(shellSort(arr));

var arr1 = [5, 1, 2, 4, 3];
console.log(shellSort(arr1));

function insertionSort(arr) {
	for(var i = 1; i < arr.length; i++) {
		var tmp = arr[i];
		count = i;
		while(count > 0 && arr[count-1] > tmp) {
			arr[count] = arr[count-1];
			count--;
		}
		arr[count] = tmp;
	}
	return arr;
}
