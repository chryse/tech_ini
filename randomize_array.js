var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffle(arr) {
	for(var i = 0; i < arr.length; i++) {
		var randPos = Math.floor(Math.random() * (arr.length-1));
		//console.log(randPos);
		var tmp = arr[i];
		arr[i] = arr[randPos];
		arr[randPos] = tmp;
	}
	return arr;
}

console.log(shuffle(arr));
