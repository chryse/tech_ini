//You are given a function mergeArrays which takes in two sorted arrays a and b as parameters.
//The first array has M elements in it. The second on also has M elements, but it's capacity is 2M.
//The function mergeArrays takes both the arrys as parameters along with M. Merge the first array into present in the system.
//There is no need to edit that part of the program.
//Your task is to complete the body of mergeArrays with the signature provied, and to return the correct output.
//Constraints 10 <= M <= 1,000
//Sample input:
// a = {3, 5, 6, 9, 12, 14, 18, 20 ,25, 28}
// b = {30, 32, 34, 36, 38, 40, 42, 44, 46, 48}
//Sample output:
// {3, 5, 6, 9, 12, 14, 18, 20 ,25, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48}
//Explanation
//As stated in the question, the second array contains enough space to accomodate the first array. Return the merged sorted array.

function mergeArrays(arr1, arr2) {
	var result = [];
	while(arr1.length && arr2.length) {
		if(arr1[0] < arr2[0]) {
			result.push(arr1.shift());
		}
		else {
			result.push(arr2.shift());
		}
	}

	while(arr1.length) {
		result.push(arr1.shift());
	}

	while(arr2.length) {
		result.push(arr2.shift());
	}

	return result;
}

var arr1 = [3, 5, 6, 9, 12, 14, 18, 20 ,25, 90, 102];
var arr2 = [1, 3, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48];

console.log(mergeArrays(arr1, arr2));