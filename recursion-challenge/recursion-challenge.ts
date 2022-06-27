function factorial(n: number): number {
    const array: number[] = [];
    for (let i = n; i >= 1; i -= 1) {
      array.push(i);
    }
  
    return array.reduce((prev, curr) => prev * curr);
  }