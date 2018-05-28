'use strict';
window.onload = () => {
    const
        index = $('.header-main')[0],
        sights = $('.header-sights')[0],
        gallery = $('.header-gallery')[0],
        sendButton = $('.send-button')[0],
        nameTextBox = $('.name-textbox')[0],
        commentTextBox = $('.comment-textbox')[0];
    index.onclick = () => {
        document.location.href = '../index.html'
    };
    sights.onclick = () => {
        document.location.href = '../sights.html'
    };
    gallery.onclick = () => {
        document.location.href = '../gallery.html'
    };
    sendButton.onclick = () => {
        let
            name = nameTextBox.value,
            comment = commentTextBox.value;
        fetch('/api', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'action': 'feedback',
                name,
                comment
            })
        }).then(res => {
            console.log(`response: ${res.status} ${res.statusText}`);
        }).catch((err) => {
            console.log(err);
        });
        nameTextBox.value = '';
        commentTextBox.value = '';
    };
};