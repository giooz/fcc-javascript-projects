function rot13(str) {
    
    
    let arr = str.split('');
    let result = '';
    
    //using created dict
    const dict = {  
        'A': 0,  'B': 1,  'C': 2,  'D': 3,  'E': 4,  'F': 5,  'G': 6,  
        'H': 7,  'I': 8,  'J': 9,  'K': 10,  'L': 11,  'M': 12, 'N': 13, 
        'O': 14,  'P': 15,  'Q': 16,  'R': 17,  'S': 18,  'T': 19, 
        'U': 20,  'V': 21,  'W': 22,  'X': 23,  'Y': 24,  'Z': 25  }
        
        arr.forEach (letter => {
            if (letter.match(/[A-Z]+/)) {
                letter = dict[letter] - 13;
                if (letter < 0){
                    letter += 26;
                }
                letter = Object.keys(dict)[letter];
            }
            result += letter
        })
        
        return result;
    }
    
    // using ASCII table
    arr.forEach(letter => {   
        if (letter.match(/[A-Z]+/)){
            let ascii = letter.charCodeAt() - 13;
            if (ascii < 65){
                ascii += 26;
            }
            letter = String.fromCharCode(ascii);
        }
        result += letter;
    })
    
    return result;