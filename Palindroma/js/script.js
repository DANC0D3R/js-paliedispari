const userWordBox = document.getElementById('user-word')
const button = document.getElementById('button')
const form = document.getElementById('form')
const resultMessageBox = document.getElementById('result-message')

// Funznione che crea una parola inserendo i caratteri in ordine inverso
function reverseWord(word){
    let result = ''

    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i]
    }

    return result
}

// Al click sul bottone controllo e stampa del risultato
form.addEventListener("submit", function(event){
    // Cancella la funzione predefinita di "submit"
    event.preventDefault()
    // Converte i caratteri in muinuscolo
    const userWord = userWordBox.value.toLowerCase()

    const reversedWord = reverseWord(userWord)

    let resultMessage = ''
    // Controllo
    if (reversedWord === userWord){
        resultMessage = `"${userWord}" è palindroma`
    } else {
        resultMessage = `"${userWord}" non è palindroma, al contrario è "${reversedWord}"`
    }

    resultMessageBox.innerText = resultMessage
})