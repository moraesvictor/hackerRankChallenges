/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums: number[]): number[] {
    const modifiedArray: number[] = [];
  
    nums.forEach(num => {
      if (num % 2 === 0) modifiedArray.push(num * 2);
      if (num % 2 !== 0) modifiedArray.push(num * 3);
    });
  
    return modifiedArray;
  }
  