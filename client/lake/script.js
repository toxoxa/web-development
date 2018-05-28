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

    fetch('/api', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'action': 'getLakeMarkup'
        })
    }).then(res => {
        console.log(`response: ${res.status} ${res.statusText}`);
        res.json().then(lakeMarkup => {
            if (lakeMarkup) {
                $('.layout')[0].innerHTML = lakeMarkup;
            }
        })

    }).catch(err => {
        console.log(err);
    });
};