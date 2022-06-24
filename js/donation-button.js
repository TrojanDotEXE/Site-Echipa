let donationButton = document.querySelector(".donation__details");
let donationIcon = document.querySelector(".donation__icon");
let donationDetailList = document.querySelectorAll(".donation__detail");

donationButton.addEventListener("click", () => {
    donationButton.classList.add('invisible--bg', 'cursor--default', 'invisible--shadow');
    donationIcon.classList.add('invisible');
    donationDetailList.forEach(element => {
        element.classList.remove('invisible');
    });
});