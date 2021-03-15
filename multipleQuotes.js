document.addEventListener("DOMContentLoaded",function(){

    let sportQuotes = [
        {
            quote: 'An athlete cannot run with money in his pockets. He must run with hope in his heart and dreams in his head.',
            author: 'Emil Zatopek',
            font: 'Arial'
        },
        {
            quote: 'One man can be a crucial ingredient on a team, but one man cannot make a team.',
            author: 'Kareem Abdul-Jabbar',
            font: 'Futura'
        },
        {
            quote: 'You’ve got to take the initiative and play your game. In a decisive set, confidence is the difference.',
            author: 'Chris Evert',
            font: 'Tahoma'
        },
        {
            quote: 'When you win, say nothing, when you lose, say less.',
            author: 'Paul Brown',
            font: 'Gotham'
        },
        {
            quote: 'Always make a total effort, even when the odds are against you.',
            author: 'Arnold Palmer',
            font: 'Graphik'
        },
        {
            quote: 'If you don’t have confidence, you’ll always find a way not to win.',
            author: 'Carl Lewis',
            font: 'Tahoma'
        },
        {
            quote: 'Excellence is the gradual result of always striving to do better.',
            author: 'Pat Riley',
            font: 'Arial'
        },
        {
            quote: 'Push yourself again and again. Don’t give an inch until the final buzzer sounds.',
            author: 'Larry Bird',
            font: 'Gotham'
        },
        {
            quote: 'Wisdom is always an overmatch for strength.',
            author: 'Phil Jackson',
            font: 'Futura'
        },
        {
            quote: 'It is not the size of a man but the size of his heart that matters.',
            author: 'Evander Holyfield',
            font: 'Gotham'
        },
        {
            quote: 'You miss 100 percent of the shots you don’t take.',
            author: 'Wayne Gretzky',
            font: 'Arial'
        }
    ];
    let movieQuotes = [
        {
            quote: 'Hasta la vista, baby.',
            movie: 'Terminator 2: Judgment Day',
            font: 'Arial'
        },
        {
            quote: 'My precious.',
            movie: 'The Lord of the Rings: Two Towers',
            font: 'Gotham'
        },
        {
            quote: 'A martini. Shaken, not stirred.',
            movie: 'Goldfinger',
            font: 'Futura'
        },
        {
            quote: 'I feel the need - the need for speed!',
            movie: 'Top gun',
            font: 'Tahoma'
        },
        {
            quote: 'I love the smell of napalm in the morning.',
            movie: 'Apocalypse Now',
            font: 'Graphik'
        },
        {
            quote: 'You talking to me?',
            movie: 'Taxi Driver',
            font: 'Arial'
        },
        {
            quote: 'Why so serious?',
            movie: 'The Dark Knight',
            font: 'Gotham'
        },
        {
            quote: 'The first rule of Fight Club is: You do not talk about Fight Club.',
            movie: 'Fight Club',
            font: 'Futura'
        },
        {
            quote: 'Yippie-ki-yay, motherf—er!',
            movie: 'Die Hard',
            font: 'Tahoma'
        },
        {
            quote: 'We rob banks.',
            movie: 'Bonnie and Clyde',
            font: 'Graphik'
        }
    ];
    let bookQuotes = [
        {
            quote: 'There is some good in this world, and it’s worth fighting for.',
            book: 'The Two Towers',
            font: 'Arial'
        },
        {
            quote: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
            book: 'The Little Prince',
            font: 'Gotham'
        },
        {
            quote: 'Beware; for I am fearless, and therefore powerful',
            book: 'Frankenstein',
            font: 'Futura'
        },
        {
            quote: 'All happy families are alike; each unhappy family is unhappy in its own way.',
            book: 'Anna Karenina',
            font: 'Tahoma'
        },
        {
            quote: 'Who controls the past controls the future. Who controls the present controls the past.',
            book: 'Nineteen Eighty-Four',
            font: 'Graphik'
        },
        {
            quote: 'When you play the game of thrones you win or you die.',
            book: 'A Game of Thrones',
            font: 'Arial'
        },
        {
            quote: 'But soft! What light through yonder window breaks? It is the east, and Juliet is the sun.',
            book: 'Romeo and Juliet',
            font: 'Gotham'
        },
        {
            quote: 'Love is holy because it is like grace – the worthiness of its object is never really what matters.',
            book: 'Gilead',
            font: 'Futura'
        },
        {
            quote: 'And, when you want something, all the universe conspires in helping you to achieve it.',
            book: 'The Alchemist',
            font: 'Tahoma'
        },
        {
            quote: 'Time moves slowly, but passes quickly.',
            book: 'The Color Purple',
            font: 'Graphik'
        }
    ];
    function getQuotes() {
        let quotesNumber = parseInt(numberOfQuotes());
        let quotes = '';
        if(document.getElementById('sport').checked) {
            for(let i = 0; i < quotesNumber; i++) {
                let rand = sportQuotes[Math.floor(Math.random() * sportQuotes.length)];
                quotes += '<p class="quote"; style=font-family:' + rand.font + ';>' + rand.quote + ' - ' + rand.author + '</p>' + '<br>';
            }
        }
        else if(document.getElementById('movies').checked) {
            for (let i = 0; i < quotesNumber; i++) {
                let rand = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
                quotes += '<p class="quote"; style=font-family:' + rand.font + ';>' + rand.quote + ' - ' + rand.movie + '</p>' + '<br>';
            }
        }
        else if (document.getElementById('books').checked){
            for (let i = 0; i < quotesNumber; i++) {
                let rand = bookQuotes[Math.floor(Math.random() * bookQuotes.length)];
                quotes += '<p class="quote"; style=font-family:' + rand.font + ';>' + rand.quote + ' - ' + rand.book + '</p>' + '<br>';
            }
        }
        let div = document.getElementById("multipleQuotes");
        div.innerHTML = quotes;
    }
    function numberOfQuotes() {
        var getNumber = document.getElementById("dropdownMenu");
        var count = getNumber.value;
        return count;
    }
    function exit() {
        if (confirm("Close Window?")) {
            close();
        }
    }
    let button1 = document.getElementById("button3");
    button1.addEventListener("click", getQuotes);
    let button2 = document.getElementById("button4");
    button2.addEventListener("click", exit);
});