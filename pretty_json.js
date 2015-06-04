var user = { name: "Jun" , age: 23 }

function prettyJson(object) {
    var result = "";
    for(var i in object) {
        result += i + " : " + object[i] + "\n";
    }
    return result;
}

console.log(prettyJson(user));