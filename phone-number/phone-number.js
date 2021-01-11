export const clean = (str) => {
    if (str.match(/[a-zA-Z]/gm)) {
        throw "Letters not permitted"
    } else if (str.match(/[,\/#!$%\^&\*;:{}=\_`~]/gm)) {
        throw "Punctuations not permitted"
    } else {
        const newStr = str.split('');
        let onlyNumbers = newStr.map(el => {
            return el.match(/^[0-9]+$/g);
        })
        if (onlyNumbers.join('').length < 10) {
            throw "Incorrect number of digits"
        } else if (onlyNumbers.join('').length === 11 && onlyNumbers.join('')[0] !== '1') {
            throw "11 digits must start with 1"
        } else if (onlyNumbers.join('').length > 11) {
            throw "More than 11 digits"
        } else if ((onlyNumbers.join('').length === 10 && onlyNumbers.join('')[0] === '0')||(onlyNumbers.join('').length === 11 && onlyNumbers.join('')[1] === '0')) {
            throw "Area code cannot start with zero"
        } else if ((onlyNumbers.join('').length === 10 && onlyNumbers.join('')[0] === '1')||(onlyNumbers.join('').length === 11 && onlyNumbers.join('')[1] === '1')) {
            throw "Area code cannot start with one"
        } else if ((onlyNumbers.join('').length === 10 && onlyNumbers.join('')[3] === "0")||(onlyNumbers.join('').length === 11 && onlyNumbers.join('')[4] === "0")) {
            throw "Exchange code cannot start with zero"
        } else if ((onlyNumbers.join('').length === 10 && onlyNumbers.join('')[3] === "1")||(onlyNumbers.join('').length === 11 && onlyNumbers.join('')[4] === "1")) {
            throw "Exchange code cannot start with one"
        } else if (onlyNumbers.join('').length === 11) {
            return onlyNumbers.join('').substring(1);
        } else {
            return onlyNumbers.join('');
        }
    }
};