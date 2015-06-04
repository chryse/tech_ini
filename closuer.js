// closuer

for(var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000 * i);
}
// this will print 5 five times 0, 1000, 2000, 3000, 4000 milliseconds

// How could the use of closures help here?

for(var i = 0; i < 5; i++) {
	(function(x) {
		setTimeout(function() {
			console.log(x);
		}, 1000 * i);
	})(i);

}
