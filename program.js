function convertToRoman(num) {

  const convertTable = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

  let romanAccumulator = ''; 

  for (const key in convertTable) {
    const arabicNum = convertTable[key];

    while (arabicNum <= num) {
        console.log(arabicNum);
       num = num - arabicNum;
       console.log(num);

       romanAccumulator = romanAccumulator + key;
       console.log(romanAccumulator);
    }
  }


 return romanAccumulator;
}

convertToRoman(36);
