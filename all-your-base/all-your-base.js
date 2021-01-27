export const convert = (arr, inputBase, outputBase) => {
    if (inputBase < 2) throw "Wrong input base";
    if (outputBase < 2) throw "Wrong output base";
    if (arr.length === 1 && arr[0] === 0) return [0];
    if (!arr.length || arr[0] === 0 || arr.some(el => el < 0 || el === inputBase)) throw "Input has wrong format";

    let outputArray = [];
    let number = 0;

    for (let digit of arr) {
        number = number * inputBase + digit;
    }

    while (number > 0) {
        outputArray.unshift(number % outputBase);
        number = Math.floor(number / outputBase);
    }

    return outputArray;
};