let cards = document.querySelectorAll('.card');
let cardElements = Array.from(cards);

cardElements.forEach(card => {
    let header = card.querySelector('header.card-header > h2');
    card.addEventListener("mouseover", () => {
        header.classList.add("card-header--hover");      
    });
    card.addEventListener("mouseout", () => {
        header.classList.remove("card-header--hover");      
    });
});
