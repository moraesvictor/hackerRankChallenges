/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s: string) {
    const splitedS = s.split('');
   const newArr: string[] = [];

   const filteredA = splitedS.filter(letter => letter !== 'a');
   const filteredE = filteredA.filter(letter => letter !== 'e');
   const filteredI = filteredE.filter(letter => letter !== 'i');
   const filteredO = filteredI.filter(letter => letter !== 'o');
   const sWithoutVowels = filteredO.filter(letter => letter !== 'u');
 
   splitedS.forEach(letter => {
     if (letter === 'a') newArr.push('a');
     if (letter === 'e') newArr.push('e');
     if (letter === 'i') newArr.push('i');
     if (letter === 'o') newArr.push('o');
     if (letter === 'u') newArr.push('u');
   });
     
   const concat = newArr.concat(sWithoutVowels);
   
   concat.map(letter => console.log(letter))
 }