function convertToRoman(num) {
    
    let number = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i = 12;
    let result = '';
    
    while(num > 0) {    
        let div = Math.floor(num / number[i]);
        num = num % number[i];    
        while(div--) {
            result += sym[i];
        }      
        i--;
    }
    return result;
}