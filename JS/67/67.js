/* global $*/
(function () {
    'use strict';

    fetch('67.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(videos => {

            const videosList = $('#videos');
            const video = $('#vid');
            video.hide();
            videos.forEach(vid => {
                $(`<li><span>${vid.Title}</span>
                <br>
                    <img src= ${vid.Image} alt= ${vid.Title} 
                </li>`)
                    .appendTo(videosList).click(() => {
                        video.show();
                        video.attr('src', vid.URL);
                        video[0].play();

                    });

            });

        })
        .catch(err => console.error(err));

}());