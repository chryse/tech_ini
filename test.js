function reverse(num) {
	var result = [];
	while(num > 0) {
		result.push(num % 10);
		num = (num / 10)^0;
	}

	reverseNum = 0;
	for(var i = 0; i < result.length; i++) {
		reverseNum += result[i] * Math.pow(10, result.length-1-i);
	}

	return reverseNum;
}


console.log(reverse(123));