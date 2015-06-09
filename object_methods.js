// var obj = Object.create(Object.prototype);
var user = {
	id: 1,
	name: "Jun",
	age: 26
};

Object.observe(user, function(changes) {
	console.log("changes", changes);
	changes.forEach(function(change) {
		console.log("change", change);
	})
});

user.name = "ka";
user.age = 30;

// console.log(user);