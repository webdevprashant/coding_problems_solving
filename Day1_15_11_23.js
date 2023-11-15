// A valid subsequence of an array is classified as a set of numbers that aren't necessarily adjacent in the array but are in the same order as they appear in the array. For example, [2, 5, 6] and [2, 6] are both considered as valid subsequences of the array [2, 3, 4, 5, 6].

function isArraySubSequence(array, sequence) {
    let arrElement = 0;
    let seq = 0;
while (arrElement < array.length && seq < sequence.length) {    // Loop runs till array and sequence length
if (array[arrElement] == sequence[seq]) {                   // If sequence elem match with array element then increment seq only 
    seq++
}
    arrElement++;
}
 return seq === sequence.length;         // when seq ad sequence array length matches only, then sequence arr is subsequent of arr.
}

console.log(isArraySubSequence([2, 3, 4, 5, 6] , [2,4,6]));