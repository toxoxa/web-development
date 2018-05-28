'use strict';
window.onload = () => {
    const
        photoBig = $('.gallery-photo__big #imgBig')[0],
        gallery = $('.gallery')[0],
        headerIndex = $('.header-main')[0],
        headerSights = $('.header-sights')[0],
        headerGallery = $('.header-gallery')[0],
        feedback = $('.feedback')[0];

    gallery.onclick = (e) => {
        if (e.target !== gallery) {
            photoBig.src = e.target.src || e.target.firstElementChild.src;
        }
    };

    headerIndex.onclick = () => {
        document.location.href = 'index.html'
    };
    headerSights.onclick = () => {
        document.location.href = 'sights.html'
    };
    headerGallery.onclick = () => {
        document.location.href = 'gallery.html'
    };
    feedback.onclick = () => {
        document.location.href = 'feedback/feedback.html'
    };
};