let cardLists = document.querySelectorAll('.card-list');
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
    card.addEventListener("click", () => {
        
        let cardLeft = card.getBoundingClientRect().left;
        let cardRight = card.getBoundingClientRect().right;
        let screenWidth = screen.width;
        let cardRightA = screenWidth - cardRight;
        setTimeout(() => {
            if (cardLeft !== cardRightA) {
                cardLeft = card.getBoundingClientRect().left;
                cardRight = card.getBoundingClientRect().right;
                screenWidth = screen.width;
                cardRightA = screenWidth - cardRight;
                let mid = (cardLeft  + cardRightA) / 2;
                let offSet = cardLeft - mid;
                card.parentElement.scrollBy({
                    left: offSet,
                    behavior: 'smooth'
                });       
            }
        }, 170);
    });
});
