function getLetter(s: string) {
    let letter: string;

    const splitedS = s.split('');  
    const firstLetter = splitedS[0];
  
    switch (firstLetter) {
      case 'a' || 'e' || 'i' || 'o' || 'u':
        letter = 'A';
        break;
      case 'b' || 'c' || 'd' || 'e' || 'f' || 'g':
        letter = 'B';
        break;
      case 'h' || 'j' || 'k' || 'l' || 'm':
        letter = 'C';
        break;
      default:
        letter = 'D';
        break;
    }
    return letter;
  }
  