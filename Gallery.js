document.addEventListener('DOMContentLoaded', function () {
    var lightGalleryInstance = lightGallery(document.getElementById('lightgallery'));

    // Override lightgallery's close method to handle clicks outside the image
    lightGalleryInstance.closeGallery = function () {
        lightGalleryInstance.destroy(true);
    };

    // Add a click event listener to close the lightgallery modal when clicking outside the image
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.lg-item')) {
            lightGalleryInstance.closeGallery();
        }
    });
});