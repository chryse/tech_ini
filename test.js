var arr = [10, 3, 5, 1, 6];

console.log(arr);

arr.sort(function(a, b) {
	console.log("a", a, "   b", b);
	return a > b;
});

console.log(arr);