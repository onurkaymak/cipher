const userInput = window.prompt('Say Something');
window.alert(userInput);

function converter(sentence) {
    const firstLetter = sentence.slice(0, 1).toUpperCase();
    const lastLetter = sentence.slice(-1).toUpperCase();
    return firstLetter.concat(lastLetter);

}