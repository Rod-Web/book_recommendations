import {bd_book} from "/data/db_book.js";
const database = bd_book

import addBook from "/js//addbook.js"
import addSynopsis from "/js/addsynopsis.js";

let buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.onclick = pressButton
})

let bookend = document.querySelector('.container_book')
let h2 = document.querySelector('h2')

function pressButton(e) {

    let alvo = e.target.value
    console.log(alvo)

    bookend.style.display = "flex"
    h2.style.display = "none"
    bookend.innerHTML = ""
    
    database.forEach(book => {

        if (book.genre === alvo || alvo === "all") {

            addBook(book, bookend)
            document.dispatchEvent(new Event("capture"))

        }
    })
}

document.addEventListener("capture", ()=> {

    let covers = document.querySelectorAll('.cover')
    covers.forEach(cover => {
        cover.onclick = pressCover
    })
})

function pressCover(e) {

    let kitten = new URL(e.target.src).pathname
    let position = e.target.parentNode

    database.forEach(book => {

        if (book.cover === kitten) {
            addSynopsis(book, position)
        }
    })
    
    console.log(kitten, position)
}

