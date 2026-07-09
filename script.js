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

/**
 * Renders all gallery images into the photo container
 */
function renderImages() {
    for (let i = 0; i < myImages.length; i++) {
        containerRef.innerHTML += getImages(i);
    }
}

/**
 * Opens the selected image in the modal.
 *
 * @param {number} index - Index of the selected image
 */

function highlightImage(i) {
    updateModal(i);
    dialogRef.classList.add("open");
    dialogRef.showModal();
}

/**
 * Updates the modal content with the selected image.
 *
 * @param {number} index - Index of the current image.
 */

function updateModal(i) {
    dialogRef.innerHTML = getModalTemplate(i);
}

/**
 * Displays the next image in the gallery.
 *
 * @param {number} index - Index of the current image.
 */

function incrementModal(i) {
    if (i === myImages.length - 1) i = -1;
    updateModal(i + 1);
}

/**
 * Displays the previous image in the gallery.
 *
 * @param {number} index - Index of the current image.
 */

function decrementModal(i) {
    if (i === 0) i = myImages.length;
    updateModal(i - 1);
}

/**
 * Closes the image modal.
 */

function closeHighlightImage() {
    dialogRef.close();
    dialogRef.classList.remove("open");
}

/**
 * Close the dialog when clicking on the backdrop.
 */
dialogRef.addEventListener("click", (event) => {
    if (event.target === dialogRef) closeHighlightImage();
});

document.addEventListener("DOMContentLoaded", renderImages);
