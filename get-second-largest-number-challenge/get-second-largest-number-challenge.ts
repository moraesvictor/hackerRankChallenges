/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 * */
 function getSecondLargest(nums: number[]): number {
    // Complete the function
    const orderedNumbers = nums.sort((a, b) => b - a);
  
    const setOrderedNumbers = [...new Set(orderedNumbers)];
  
    const secondLargestNumber = setOrderedNumbers[1];
  
    return secondLargestNumber;
  }
  