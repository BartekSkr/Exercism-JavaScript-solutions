export const encode = (str) => {
    return str.replace(/(.)\1+/g, ({ length }, char) => length + char);
};

export const decode = (str) => {
    return str.replace(/(\d+)(.)/g, (_, length, char) => char.repeat(length));
};