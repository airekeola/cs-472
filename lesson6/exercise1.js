
//Exercise 1

String.prototype.filter = function(bannedWords) {
    // Convert the string to an array of words
    let words = this.split(' ');

    // Filter out the banned words
    words = words.filter(word => !bannedWords.includes(word));

    // Join the words back into a string and return
    return words.join(' ');
};

// Example 1 usage:
console.log("EX.1")
console.log("This house is not nice!".filter(['not'])); // Output: "This house is nice!"

