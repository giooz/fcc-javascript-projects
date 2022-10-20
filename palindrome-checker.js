function palindrome(str) {
    const regex = new RegExp (/[a-zA-Z0-9]+/g);
    
    let newStr = str.toLowerCase().match(regex).join('');
    
    for (let i = 0, j = newStr.length - 1; i < newStr.length, j > 0; i++, j--){
        if (newStr[i] != newStr[j]) {
            return false;
        }
    }
    return true;
}