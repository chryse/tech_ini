// make prototype of map

Array.prototype.map = function(callback) {
	console.log("this", this);
	var result = [];
	for(var i = 0; i < this.length; i++) {
		result.push(callback(this[i]));
	}
	return result;
}

var arr = [1, 2, 3, 4];

var newArr = arr.map(function(item) {
	return item * 2;
});

console.log("newArray", newArr);
