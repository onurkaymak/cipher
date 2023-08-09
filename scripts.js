const userInput = window.prompt('Say Something');
window.alert(userInput);

function converter(sentence) {
    const firstLetter = sentence.slice(0, 1).toUpperCase();
    const lastLetter = sentence.slice(-1).toUpperCase();
    return firstLetter.concat(lastLetter);
}

function reverser(converted) {
    const reversed = converted.split('').reverse().join('')
    return reversed
}

function functionCaller(userInput) {
    const converted = converter(userInput);
    const reversed = reverser(converted);
    const turnTooriginal = userInput + reversed;
    return turnTooriginal
}

function counter(userInput, reversedSentence) {
    const counted = userInput.length / 2
    const indexNum = Math.floor(counted)
    const indexLetter = userInput.charAt(indexNum)
    const newSentence = indexLetter.concat('', reversedSentence)
    window.alert(newSentence);
    const reversedAgain = newSentence.split('').reverse().join('')
    window.alert(reversedAgain);
}