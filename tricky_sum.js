console.log(sum(2,3)); // output 5
console.log(sum(2)(3)); //output 5


function sum(a, b) {
	if(arguments.length == 2) {
		return arguments[0] + arguments[1];
	}
	else {
		return function(b) {
			return a+b;
		};
	}
}


console.log(sum1(2,3));
console.log(sum1(2)(3));


function sum1(a, b) {
	if(b !== undefined) {
		return a + b;
	}
	else {
		return function(b) {
			return a+b;
		}
	}
}

console.log(sum2(2,3));
console.log(sum2(2)(3));

function sum2(a, b) {
	if(b !== undefined) return a + b;
	else {
		return function (b) {
			return a+b;
		};
	}
}
