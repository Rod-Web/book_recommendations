export default function addSynopsis(book, position) {

    const oldSynopsis = position.querySelector(".synopsis");
    if (oldSynopsis) {
        oldSynopsis.remove();
    }
    
    let tagP = document.createElement("p")
    tagP.classList.add("synopsis")

    let synopsis = book.synopsis
    tagP.textContent = synopsis
    
    position.appendChild(tagP)
}