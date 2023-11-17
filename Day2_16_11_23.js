// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

const nums = [1,2,3,4,5,6];
const target = 9;

//      Not optimized
function twoNumberSum(arr, sum) {
    for(let i = 0 ; i < arr.length ; i++) {
        for (let j = 1 ; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                return [i,j];
            }
        }        
    }
}
console.log(twoNumberSum(nums , 7))

let temp;
let res = {};
function twoNumberSumOptimized(arr, sum) {
    for (let i = 0 ; i < arr.length ; i++)  {
        temp = sum - arr[i];
        if(arr.includes(temp)) {
         return res.temp , i ; 
        }
    }
}   

console.log(twoNumberSumOptimized(nums, 7));
var result = 1;
function factorial(n)  {
    if (n == 0 || n == 1) {
        return result;
    }
    else if (n > 1) {
        for (let i = n ; i > 1 ; i--) {
            result = result * i;
        }
    }
    return result;
}

console.log(factorial(4));