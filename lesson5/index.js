// Function to return the max of two numbers
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Function to return the max of three numbers
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

// Function to check if a character is a vowel
function isVowel(char) {
    return 'aeiouAEIOU'.indexOf(char) !== -1;
}

// Function to sum all numbers in an array
function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Function to multiply all numbers in an array
function multiply(arr) {
    return arr.reduce((acc, num) => acc * num, 1);
}

// Function to reverse a string
function reverse(str) {
    return str.split('').reverse().join('');
}

// Function to find the length of the longest word in an array
function findLongestWord(words) {
    return words.reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
}

// Function to filter words longer than a given length
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

// Function to test other functions
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

// Test cases
console.log("Expected output of max(20,10) is 20 and " + myFunctionTest(20, function(){return max(20, 10);}));
console.assert(max(20, 10) === 20, 'Test Failed: max(20, 10)');

console.log("Expected output of maxOfThree(20,10,30) is 30 and " + myFunctionTest(30, function(){return maxOfThree(20, 10, 30);}));
console.assert(maxOfThree(20, 10, 30) === 30, 'Test Failed: maxOfThree(20, 10, 30)');

console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, function(){return isVowel('a');}));
console.assert(isVowel('a') === true, 'Test Failed: isVowel(a)');

console.log("Expected output of sum([1,2,3,4]) is 10 and " + myFunctionTest(10, function(){return sum([1, 2, 3, 4]);}));
console.assert(sum([1, 2, 3, 4]) === 10, 'Test Failed: sum([1, 2, 3, 4])');

console.log("Expected output of multiply([1,2,3,4]) is 24 and " + myFunctionTest(24, function(){return multiply([1, 2, 3, 4]);}));
console.assert(multiply([1, 2, 3, 4]) === 24, 'Test Failed: multiply([1, 2, 3, 4])');

console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " + myFunctionTest("ratset gaj", function(){return reverse("jag testar");}));
console.assert(reverse('jag testar') === 'ratset gaj', 'Test Failed: reverse(jag testar)');

console.log("Expected output of findLongestWord(['a', 'aa', 'aaa']) is 3 and " + myFunctionTest(3, function(){return findLongestWord(['a', 'aa', 'aaa']);}));
console.assert(findLongestWord(['a', 'aa', 'aaa']) === 3, 'Test Failed: findLongestWord([a, aa, aaa])');

console.log("Expected output of filterLongWords(['a', 'aa', 'aaa'], 1) is ['aa', 'aaa'] and " + myFunctionTest(JSON.stringify(['aa', 'aaa']), function(){return JSON.stringify(filterLongWords(['a', 'aa', 'aaa'], 1));}));
console.assert(JSON.stringify(filterLongWords(['a', 'aa', 'aaa'], 1)) === JSON.stringify(['aa', 'aaa']), 'Test Failed: filterLongWords([a, aa, aaa], 1)');

// Further instructions on map/filter/reduce slide
let arr = [1, 2, 3, 4, 5];

// a) multiply each element by 10
let multipliedBy10 = arr.map(x => x * 10);
console.log("Expected output of arr.map(x => x * 10) is [10, 20, 30, 40, 50] and " + myFunctionTest(JSON.stringify([10, 20, 30, 40, 50]), function(){return JSON.stringify(multipliedBy10);}));
console.assert(JSON.stringify(multipliedBy10) === JSON.stringify([10, 20, 30, 40, 50]), 'Test Failed: arr.map(x => x * 10)');

// b) return array with all elements equal to 3
let allEqual3 = arr.map(x => 3);
console.log("Expected output of arr.map(x => 3) is [3, 3, 3, 3, 3] and " + myFunctionTest(JSON.stringify([3, 3, 3, 3, 3]), function(){return JSON.stringify(allEqual3);}));
console.assert(JSON.stringify(allEqual3) === JSON.stringify([3, 3, 3, 3, 3]), 'Test Failed: arr.map(x => 3)');

// c) return the product of all elements
let productOfAll = arr.reduce((acc, x) => acc * x, 1);
console.log("Expected output of arr.reduce((acc, x) => acc * x, 1) is 120 and " + myFunctionTest(120, function(){return productOfAll;}));
console.assert(productOfAll === 120, 'Test Failed: arr.reduce((acc, x) => acc * x, 1)');
