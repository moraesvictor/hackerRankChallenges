/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s: string | number) {
    if (typeof s !== 'string')
      return console.log(`s.split is not a function`), console.log(s);
    const fromStringToArray = s.split('');
    if (
      typeof fromStringToArray[0] === 'string' &&
      !parseInt(fromStringToArray[0], 10)
    ) {
      const sortedArray = fromStringToArray.sort((a, b) => b.localeCompare(a));
      console.log(sortedArray.join(''));
    }
    if (parseInt(fromStringToArray[0], 10)) {
      const sortedArray = fromStringToArray
        .map(item => parseInt(item, 10))
        .sort((a, b) => b - a);
      console.log(sortedArray.join(''));
    }
  }
  