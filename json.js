function User(id, firstName, lastName, age) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

User.prototype.display = function() {
	console.log(this.firstName + " " + this.lastName + ", " + this.age);
}

var usersFetched = '[{"id": "zadf1", "firstName": "Jun", "lastName": "Kim", "age": 28, "email": "example1@example.com"}, {"id": "dfg2d", "firstName": "Claire", "lastName": "Kim", "age": 28 , "email": "example2@example.com"}, {"id": "thd3", "firstName": "Michael", "lastName": "Choi", "age": 30, "email": "example3@example.com"}, null, {"id": "ghe4", "firstName": "James", "lastName": "Calaway", "age": 32, "email": "example4@example.com"}]';


var fetchUser = function(input) {
	var result = [];
	var users =  JSON.parse(input);

	for(var i = 0; i < users.length; i++) {
		if(users[i] != null) {
			var newUser = new User(users[i].id, users[i].firstName, users[i].lastName, users[i].age);
			result.push(newUser);	
		}		
	}
	return result;
}

var userCache = null;
var newUsers = fetchUser(usersFetched);

// put users into cache using user's id
function cacheUsers(newUsers) {
	var tmp = {};
	for(var i = 0; i < newUsers.length; i++) {
		var key = newUsers[i].id;
		tmp[key] = newUsers[i];
	}
	return tmp;
}

console.log(cacheUsers(newUsers));



// sorting helper
var sortUsers = function(users, filters) {
	
	users.sort(function(a, b) {
		// console.log(a.firstName);
		for(var i = 0; i < filters.length; i++) {
			if(a[filters[i]] > b[filters[i]]) {
				return 1;
			}
			else if(a[filters[i]] < b[filters[i]]) {
				return -1;
			}
		}
		return 0;
	});
	return users;
}


var newSort = function(users, filters) {
	users = sortUsers(users, filters);
	return users;
}

console.log(newSort(newUsers, ["lastName", "age", "firstName"]));