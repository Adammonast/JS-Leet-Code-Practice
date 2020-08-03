/* 

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  // Use built-in Set constructor function to create a new Set
  // Assign the newly created set to a new variable
  // That set will contain the numbers
  let numberSet = new Set();
  // Iterate over the numbers
  for (let i = 0; i < nums.length; i++) {
    // Check if the set already contains those numbers
    // If so, return true
    if (numberSet.has(nums[i])) return true;
    // If not, add those numbers to the set
    numberSet.add(nums[i]);
  }
  // Return false if the number is already in the set
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
