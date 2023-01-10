const userNumber = document.getElementById('user-number')
const button = document.getElementById('button')
const form = document.getElementById('form')
const select = document.getElementById('even-odd')

const calcMessage = document.getElementById('calculation')
const winnerMessage = document.getElementById('winner')

/* FUNZIONI*/
// Genera numero casuale
function generateNumber() {
    const random = Math.random()
    const randomNumber = Math.floor(random * 5 + 1)

    return randomNumber
}

// Controlla se il numero è pari
function isEven(number) {
    let result = false

    if (number % 2 === 0){
        result = true
    }

    return result
}

// Al click sul bottone genera il numero del computer e lo somma a quello scelto dal giocatore, controlla se la somma è pari o dispari e dichiara il vincitore
form.addEventListener("submit", function(event){
    // Cancella la funzione predefinita di "submit"
    event.preventDefault()
    // Genera numero del computer
    const computerNumber = generateNumber()

    const sum = computerNumber + parseInt(userNumber.value.trim())  /* ".value.trim()" rimuove gli spazi e restituisce la stringa originale */

    let calculation = `${userNumber.value} + ${computerNumber} = ${sum}`
    let winner = ''

    console.log(sum % 2)
    // Controlla se la somma è pari e dichiara il vincitore
    if (select.value === 'even') {  
        if (isEven(sum)) {
            winner = 'giocatore!'
        } else {
            winner = 'computer!'
        }
    } else {
        if (!isEven(sum)) {
            winner = 'giocatore!'
        } else {
            winner = 'computer!'
        }
    }

    calcMessage.innerText = calculation
    winnerMessage.innerText = `Vince il ${winner}`
})