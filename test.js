
function User(id, firstName, lastName, age) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

User.prototype.display = function() {
	console.log(this.firstName + " " + this.lastName + ", " + this.age);
}

var usersFetched = '[{"id": 1, "firstName": "Jun", "lastName": "Kim", "age": 28, "email": "example1@example.com"}, {"id": 2, "firstName": "Claire", "lastName": "Kim", "age": 26 , "email": "example2@example.com"}, {"id": 3, "firstName": "Michael", "lastName": "Choi", "age": 30, "email": "example3@example.com"}, null, {"id": 4, "firstName": "James", "lastName": "Calaway", "age": 32, "email": "example4@example.com"}]';

// var text = '[{"firstName":"John","lastName":"Doe" },{"firstName":"Anna","lastName":"Smith" },{"firstName":"Peter","lastName":"Jones" }]';
// console.log(JSON.parse(text));

var fetchUser = function(input) {
	var result = [];
	var users =  JSON.parse(input);
	// console.log(users);
	for(var i = 0; i < users.length; i++) {
		if(users[i] != null) {
			var newUser = new User(users[i].id, users[i].firstName, users[i].lastName, users[i].age);
			result.push(newUser);	
		}		
	}
	return result;
}

var newUsers = fetchUser(usersFetched);
console.log(newUsers);

