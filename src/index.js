const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
  '**********': ' ',
};


function decode(expr) {
  function getDecChiefer(chiferChar){
    switch (chiferChar){
      case '10':
        return '.';
      case '11':
        return '-';
      case '**':
        return '**'
      default:
        return undefined;
    }
  }
  let morseMap = new Map(Object.entries(MORSE_TABLE));
  let resultString = '';
  let onlyCipher =''
  let numOfLetter = expr.length/10;
  for(let i = 0; i<=numOfLetter-1; i++){
    symb=expr.slice(i*10, i*10+10); 
    let count=0;
    while(symb[count]==='0'){
      count++;
    }
    onlyCipher = symb.slice(count);
    let charMorse = '';
    for(let j = 0; j<=onlyCipher.length/2-1; j++){
      char = onlyCipher.slice(j*2,j*2+2);
      charMorse += getDecChiefer(char);
    }
    morseMap.forEach(function (value, key){
      if (charMorse === key) {
        resultString += value;
      }
    });
  }
  return resultString
}

module.exports = {
    decode
}