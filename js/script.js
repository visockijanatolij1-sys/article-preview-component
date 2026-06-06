const shareButton = document.querySelector(".share-button");
const sharePopup = document.querySelector(".share-popup");

shareButton.addEventListener("click", () => {
    sharePopup.classList.toggle("active");
});