'use strict';
window.onload = () => {
    const
        headerIndex = $('.header-main')[0],
        headerSights = $('.header-sights')[0],
        headerGallery = $('.header-gallery')[0];

    headerIndex.onclick = () => {
        document.location.href = 'index.html'
    };
    headerSights.onclick = () => {
        document.location.href = 'sights.html'
    };
    headerGallery.onclick = () => {
        document.location.href = 'gallery.html'
    };
};