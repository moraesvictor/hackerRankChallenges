function miniMaxSum(arr: number[]) {
    const minValue = Math.min.apply(null, arr);
    const maxValue = Math.max.apply(null, arr);

    if (minValue === maxValue) {
      const sum =
        arr.reduce((prevValue, currentValue) => prevValue + currentValue, 0) -
        minValue;

      return console.log(sum, sum);
    }

     
      const filteredMaxArray = arr.filter(number => number !== minValue);
      const filteredMinArray = arr.filter(number => number !== maxValue);

      const maxSum = filteredMaxArray.reduce(
        (prevValue, currentValue) => prevValue + currentValue
      );

      const minSum = filteredMinArray.reduce(
        (prevValue, currentValue) => prevValue + currentValue
      );

      console.log(minSum, maxSum);
    
  }