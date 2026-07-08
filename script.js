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

function renderImages() {
    containerRef.innerHTML = "";
    for (let index = 0; index < myImages.length; index++) {
        containerRef.innerHTML += getImages(index);
    }
}

function highlightImage(index) {
    updateModal(index);
    dialogRef.classList.add("open");
    dialogRef.showModal();
}

function updateModal(index) {
    dialogRef.innerHTML = getModalTemplate(index);
}

function incrementModal(index) {
    // safetycheck: nach dem letzten Bild wieder zum ersten springen
    if (index === myImages.length - 1) index = -1;
    updateModal(index + 1);
}

function decrementModal(index) {
    // safetycheck: vor dem ersten Bild zum letzten springen
    if (index === 0) index = myImages.length;
    updateModal(index - 1);
}

function closeHighlightImage() {
    dialogRef.close();
    dialogRef.classList.remove("open");
}

// Schließt das Overlay bei Klick auf den Hintergrund (nicht auf den Inhalt)
dialogRef.addEventListener("click", (event) => {
    if (event.target === dialogRef) closeHighlightImage();
});

// Räumt die .open-Klasse auch auf, wenn der Browser das Dialog nativ
// über die Esc-Taste schließt
dialogRef.addEventListener("close", () => {
    dialogRef.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", renderImages);
