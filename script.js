const myImages = [
    { title: "Alaska", filename: "alaska-810433_1280.jpg" },
    { title: "Anime City", filename: "anime-8788959_1280.jpg" },
    { title: "Atmosphere", filename: "atmosphere-8752835_1280.png" },
    { title: "Blue Tit", filename: "blue-tit-8521052_1280.jpg" },
    { title: "Hurricane", filename: "hurricane-92968_1280.jpg" },
    { title: "Lake", filename: "lake-2896379_1280.jpg" },
    { title: "Ferruginous duck", filename: "moorente-8783210_1280.jpg" },
    { title: "Sea", filename: "sea-2563389_1280.jpg" },
    { title: "Snow Bunting", filename: "snow-bunting-6781122_1280.jpg" },
    {
        title: "Snow Leopard Cubs",
        filename: "snow-leopard-cubs-8039138_1280.jpg",
    },
    { title: "Mountains", filename: "travel-8785493_1280.jpg" },
    { title: "Winter Tree", filename: "winter-1675197_1280.jpg" },
];

const containerRef = document.getElementById("photo-container");
const dialogRef = document.getElementById("photo-highlight");

/** Index of the image currently shown in the modal. */
let currentIndex = 0;

/**
 *  Renders all gallery images into the photo container.
 */
function renderImages() {
    for (let index = 0; index < myImages.length; index++) {
        containerRef.innerHTML += getImages(index);
    }
}

/**
 *  Opens the selected image in the modal.
 *
 * @param {number} index - Index of the selected image.
 */
function highlightImage(index) {
    updateModal(index);
    dialogRef.classList.add("open");
    dialogRef.showModal();
}

/**
 *  Updates the modal content with the selected image and restores
 *  keyboard focus to the "next" button so Tab navigation isn't lost.
 *
 * @param {number} index - Index of the current image.
 */
function updateModal(index) {
    currentIndex = index;
    dialogRef.innerHTML = getModalTemplate(index);
    dialogRef.querySelector(".next-btn")?.focus();
}

/**
 *  Displays the next image in the gallery.
 *
 * @param {number} index - Index of the current image.
 */
function incrementModal(index) {
    if (index === myImages.length - 1) index = -1;
    updateModal(index + 1);
}

/**
 *  Displays the previous image in the gallery.
 *
 * @param {number} index - Index of the current image.
 */
function decrementModal(index) {
    if (index === 0) index = myImages.length;
    updateModal(index - 1);
}

/**
 *  Closes the image modal.
 */
function closeHighlightImage() {
    dialogRef.close();
    dialogRef.classList.remove("open");
}

/**
 *  Close the dialog when clicking on the backdrop.
 */
dialogRef.addEventListener("click", (event) => {
    if (event.target === dialogRef) closeHighlightImage();
});

/**
 *  Remove the "open" class when the dialog is closed.
 */
dialogRef.addEventListener("close", () => {
    dialogRef.classList.remove("open");
});

/**
 *  Navigate between images using the Left/Right arrow keys while
 *  the modal is open.
 */
dialogRef.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") incrementModal(currentIndex);
    if (event.key === "ArrowLeft") decrementModal(currentIndex);
});

document.addEventListener("DOMContentLoaded", renderImages);
