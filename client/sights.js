'use strict';
window.onload = () => {
    const
        headerIndex = $('.header-main')[0],
        headerSights = $('.header-sights')[0],
        headerGallery = $('.header-gallery')[0],
        feedback = $('.feedback')[0];

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

    function setSights(sights) {
        let sightsObj = $('.sight-title span a');
        sightsObj.each((i, obj) => {
           obj.innerText = sights[i];
        })

    }
    fetch('/api', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'action': 'getSights'
        })
    }).then(res => {
        console.log(`response: ${res.status} ${res.statusText}`);
        res.json().then(sights => {
            if (sights) {
                setSights(sights)
            } else {
                console.log('NO SIGHTS');
                setSights([
                    "Никитский монастырь",
                    "Спасо-Преображенский собор",
                    "Синий камень",
                    "Плещеево Озеро",
                    "Железнодорожный музей"
                ]);
            }
        })

    }).catch(err => {
        console.log(err);
    });
};