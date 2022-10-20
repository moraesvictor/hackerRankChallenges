const matrix = (arr: number[][]) => {
    const vetorLength = arr[1]?.length;
    let diagonal1 = 0;
    let diagonal2 = 0;
    let count = 0;
    for (let i = 0; i < vetorLength; i += 1) {
      diagonal1 += arr[i][i];
    }
    for (let i = vetorLength; i > 0; i -= 1) {
      diagonal2 += arr[count][i];
      count += 1;
    }
    const result = diagonal1 - diagonal2;

    if (result < 0) return result * -1;
    return result;
  };