function pow(a, b) {
	var result = 1;
	var flag = true;
	if(b == 0) {
		return 1;
	}
	if(b == 1) {
		return a;
	}
	if(a == 0) {
		return 0;
	}
	if(a == 1) {
		return 1;
	}

	if(b < 0) {
		flag = false;
	}

	var len = Math.abs(b);
	for(var i = 0; i < len; i++) {
		console.log("b:", Math.abs(b));
		result *= a;
		console.log("result:", result);
	}

	if(flag) {
		return result;
	}
	else {
		return 1/result;
	}
}

function helper(a, b) {
	if(b == 1) {
		return a;
	}
	return a * helper(a, b-1);
	// if(b % 2 == 0) {
	// 	var result = a * helper(a, b-1);
	// 	return result * result;
	// }
}

// console.log(pow(4, 1));
console.log(pow(-2, 9));
// console.log(pow(3, 2));
// console.log(pow(3, -1));

//console.log(helper(4,1));
//console.log(helper(4,2));
