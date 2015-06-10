// closuer

for(var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log("first i", i);
	}, 1000 * i);
}
// this will print 5 five times 0, 1000, 2000, 3000, 4000 milliseconds

// How could the use of closures help here?

/*
for(var i = 0; i < 5; i++) {
	(function(x) {
		setTimeout(function() {
			console.log("i", i);
			console.log("x", x);
		}, 1000 * x);
	})(i);
}
*/

function makeFunc() {
	var name = "Mozilla";
	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc();
/*
The solution to this puzzle is that myFunc has become a closure.
A closure is a special kind of object that combines two things: 
a function, and the environment in which that function was created. 
The environment consists of any local variables that were in-scope at the time that the closure was created. 
In this case, myFunc is a closure that incorporates both the displayName function and the "Mozilla" string 
that existed when the closure was created.
*/