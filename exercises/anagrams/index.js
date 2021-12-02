// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    // Check to see if same length
    if (stringA.length !== stringB.length) {
        return false;
    }

    // See if strings are anagrams of eachother
    // Break strings down to see if they have same chars and same quantity
        // Create object for breakdown
        // Create loop to breakdown string and a loop to compare
    let lookup = {};

    for (let i = 0; i < stringA.length; i++) {
        let letter = stringA[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // Then compare the strings
    for (let i = 0; i < stringB.length; i++) {
        let letter = stringB[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(anagrams("spell", "pells"));
console.log(anagrams('Hi there', 'Bye there'));

module.exports = anagrams;
