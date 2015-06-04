function prime(num) {
	if(num == 1) return false;
	var i, j;
	for(i = num; i > 1; i--) {
		for(j = 2; j < i; j++) {
			if(i % j == 0) break;
		}
		console.log("i:", i, " j:", j);
		if(i == j) return true;
		else return false;
	}
}

console.log(prime(3));
console.log(prime(4));
console.log(prime(137));
console.log(prime(12));
