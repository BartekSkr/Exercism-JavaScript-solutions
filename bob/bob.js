export const hey = (message) => {
    const newMessage = message.trim();
    
    if (/[a-z]/.test(newMessage)) return newMessage.slice(-1) === '?' ? "Sure." : "Whatever.";
    if (/[A-Z]/.test(newMessage)) return newMessage.slice(-1) === '?' ? "Calm down, I know what I'm doing!" : "Whoa, chill out!";
    if (/[ -~]/.test(newMessage)) return newMessage.slice(-1) === '?' ? "Sure." : "Whatever.";
    return "Fine. Be that way!";
}