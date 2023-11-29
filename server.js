const express = require('express')
const app = express()
const PORT = 8000

const quotes = {
    'quote 1': {
        'movieName': 'Avengers Endgame',
        'movieQuote': 'I AM IRON MAN',
    },
    'quote 2': {
        'movieName': 'Avengers: Earths Mightiest Heroes',
        'movieQuote': 'J.A.R.V.I.S, MAKE A NOTE. REMIND ME NOT TO WAKE UP IN THE MORNING EVER AGAIN',
    },
    'quote 3': {
        'movieName': 'Avengers Endgame',
        'movieQuote': 'I LOVE YOU 3000',
    },
    'quote 4': {
        'movieName': 'unknown',
        'movieQuote': 'You can work hard, but if you dont work smart you will work for the rest of your life',
    },
    'quote 5': {
        'movieName': 'Iron Man',
        'movieQuote': 'Sometimes you gotta run before you can walk',
    },
    'quote 6': {
        'movieName': 'The Avengers',
        'movieQuote': 'Big man in his suit of armor. Take that off and what are you? GENIUS, BILLIONAIRE, PLAYBOY, PHILANTROPIST!',
    },
    'quote 7': {
        'movieQuote': 'When someone tells me no, it doesnt mean I cant do it. It simply means I cant do it with them.',
        'movieName': 'Iron Man',
    },
    'quote 8': {
        'movieQuote': 'Heroes are made by the paths they choose, not the powers they are graced with',
        'movieName': 'Iron Man',
    },
    'quote 9': {
        'movieQuote': 'Do what you can, where you are with what you have.',
        'movieName': 'Iron Man',
    },
    'unknown': {
        'movieQuote': 'unknown',
        'movieName': 'unknown',
    }    
}  

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:quote',  (request, response)=>{
    const movieQuote = request.params.quote.toLowerCase()
    if(quotes[movieQuote]){
        response.json(quotes[movieQuote])
    }else{
        response.json(movieQuote['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})