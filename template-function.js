/**
 * Creates the HTML template for the gallery image.
 *
 * @param {number} index - Index of the image.
 * @returns {string} HTML template for the gallery image.
 */

function getImages(index) {
    return /*html*/ `
        <img class="image" id="img${index}"
            src="./assets/media/${myImages[index].filename}"
            onclick="highlightImage(${index})"
            alt="${myImages[index].title}">`;
}

/**
 * Creates the HTML template for the image modal.
 *
 * @param {number} index - Index of the selected image.
 * @returns {string} HTML template for the modal.
 */

function getModalTemplate(index) {
    return /*html*/ `
    <div class="dialog-content">

        <header class="photo-highlight-header">
			<p>${myImages[index].title}</p>
			<button onclick="closeHighlightImage()" aria-label="Close image"><img class="button-close" src="./assets/icon/close.svg" alt=""></button>
		</header>

        <img class="highlight-image" id="modal-img${index}"
            src="./assets/media/${myImages[index].filename}"
            alt="${myImages[index].title}"
            onclick="highlightImage(${index})">

		<footer class="photo-highlight-footer">
			<button  onclick="decrementModal(${index})" aria-label="Previous image"><img class="button-left" src="./assets/icon/arrow_left.svg" alt=""></button>
			<p>${index + 1}/${myImages.length}</p>
			<button  onclick="incrementModal(${index})" aria-label="Next image"><img class="button-right" src="./assets/icon/arrow_right.svg" alt=""></button>
		</footer>

    </div>`;
}
