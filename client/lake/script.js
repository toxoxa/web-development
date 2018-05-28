'use strict';
window.onload = () => {
    const
        index = $('.header-main')[0],
        sights = $('.header-sights')[0],
        gallery = $('.header-gallery')[0],
        feedback = $('.feedback')[0];
    index.onclick = () => {
        document.location.href = '../index.html'
    };
    sights.onclick = () => {
        document.location.href = '../sights.html'
    };
    gallery.onclick = () => {
        document.location.href = '../gallery.html'
    };
    feedback.onclick = () => {
        document.location.href = '../feedback/feedback.html'
    };
};