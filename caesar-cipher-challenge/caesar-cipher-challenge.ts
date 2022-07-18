function caesarCipher(s: string, k: number) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const splitedAlphabet = alphabet.split('');
  
    for (let i = 0; i < k; i += 1) {
      splitedAlphabet.push(splitedAlphabet[0]);
      splitedAlphabet.shift();
    }
  
    const phrase = s.split('');
  
    phrase.forEach((letter, i) => {
      for (let j = 0; j < alphabet.length; j += 1) {
        if (letter === alphabet[j]) {
          phrase.splice(i, 1, splitedAlphabet[j]);
        }
        if (letter === alphabet[j].toUpperCase()) {
          phrase.splice(i, 1, splitedAlphabet[j].toUpperCase());
        }
      }
    });
  
    return phrase.join('');
  }
  