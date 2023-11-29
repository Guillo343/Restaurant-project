var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openModal(imgElement) {
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

function closeModal() {
    modal.style.display = "none";
}