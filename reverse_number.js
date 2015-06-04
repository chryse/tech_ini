// use only arithmetic operations

function reverse(num) {
	var result = "";
	console.log("num", num);
	while(num > 0) {
		result += num % 10;
		num = parseInt(num/10);
		// console.log("num:", num);
	}

	return Number(result);
}

console.log(reverse(1234));
console.log(reverse(12340));
console.log(reverse(12304));
console.log(reverse(401021));


function reverse1(num) {
	var arr = [];
	var result = 0;
	while(num > 0) {
		arr.push(num % 10);
		num = Math.floor(num / 10);
	}
	for(var i = 0; i < arr.length; i++) {
		result += arr[i] * Math.pow(10, arr.length-1-i);
	}

	return result;
}

console.log("new function");
console.log(reverse1(1234));
console.log(reverse1(100000));
