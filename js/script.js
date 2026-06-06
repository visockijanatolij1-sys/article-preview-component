
const shareButton = document.querySelector(".share-button");
const sharePopup = document.querySelector(".share-popup");
const articleFooter = document.querySelector(".artilce-preview-block");

shareButton.addEventListener("click", () => {

    if (window.innerWidth <= 767) {
        articleFooter.classList.toggle("active");
    } else {
        sharePopup.classList.toggle("active");
    }

});