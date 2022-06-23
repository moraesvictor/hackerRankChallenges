/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a: number[]) {
    const uniqueValues = [...new Set(a)];
    const getRepeatedValues = a.filter((v, i) => a.indexOf(v) !== i);
  
    const removeRepeatedValues = uniqueValues.filter(
      item => !getRepeatedValues.includes(item)
    );
  
    return removeRepeatedValues;
  }
