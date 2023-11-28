document.addEventListener('DOMContentLoaded', function () {
    lightGallery(document.getElementById('lightgallery'));
});

function openModal(imageSrc) {
    // Display the lightgallery modal
    lightGallery(document.getElementById('lightgallery'), {
        dynamic: true,
        dynamicEl: [{ src: imageSrc }],
    });
}