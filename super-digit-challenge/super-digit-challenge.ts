/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n: string, k: number) {
    let superString = '';
    for (let i = 0; i < k; i += 1) {
      superString = `${superString}${n}`;
    }
    const splitSuperString = superString.split('');
  
    const mapInt = splitSuperString.map(number => parseInt(number, 10));
  
    let sum = mapInt.reduce((acc, curr) => {
      return acc + curr;
    });
  
    while(sum > 10) {
      const sumString = sum.toString();
      const splitSum = sumString.split('');
  
      const mapInt = splitSum.map(number => parseInt(number, 10));
  
      sum = mapInt.reduce((acc, curr) => {
        return acc + curr;
      });
    }
  
    return sum;
  }