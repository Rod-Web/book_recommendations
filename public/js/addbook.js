export default function addBook(book, bookend) {

    let tagH2 = document.createElement("h2")
    let tagImg = document.createElement("img")
    let tagDiv = document.createElement("div")

    tagH2.classList.add("title")
    tagImg.classList.add("cover")
    tagDiv.classList.add("set")

    tagH2.textContent = book.title
    tagImg.src = book.cover
    tagDiv.appendChild(tagH2)
    tagDiv.appendChild(tagImg)

    bookend.appendChild(tagDiv)

}