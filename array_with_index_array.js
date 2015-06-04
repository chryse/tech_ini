//Given an input array and another array that describes a new index
//for each element, mutate the input array so that each element ends up
//in their new index. Discuss the runtime of the algorithm
//and how you can be sure there won't be any infinite loops.

var arr1 = ["a" ,"b", "c", "d", "e", "f"];
var arr2 = [2, 3, 4, 0, 5, 1];
function mutate(arr1, arr2) {
	if(arr1.length != arr2.length) return [];
	var result = [];
	for(var i = 0; i < arr2.length; i++) {
		result[arr2[i]] = arr1[i];
		console.log(result);
	}
	return result;
}

console.log("input:", arr1);
console.log("index arr:", arr2);
console.log(mutate(arr1, arr2));


console.log("=========");

function mutate1(arr1, arr2) {
	var result = [];
	if(arr1.length != arr2.length) return result;

	for(var i = 0; i < arr2.length; i++) {
		for(var j = 0; j < arr2.length; j++) {
			console.log("i:", i, " j:", j, " arr2[j]:", arr2[j]);
			if(i == arr2[j]) {
				result.push(arr1[j]);
				break;
			}
		}
	}

	return result;
}

console.log(mutate1(arr1, arr2));
