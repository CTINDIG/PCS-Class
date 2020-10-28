/*global $*/
(function () {
    'use strict';

    let dragging;
    let offset;
    let local = [];

    $(document).on('mousedown', '.parts', e => {
        console.log('mousedown', e);
        offset = { x: e.offsetX, y: e.offsetY };
        // dragging = true;
        dragging = $(e.target);
    });


    $(document/*.body*/).mousemove(e => {
        if (dragging) {
            e.preventDefault(); // occasional dragging wierdness in browser...

            console.log('mousemove', e);

            dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
    }).mouseup(e => {
        if (dragging) {
            console.log('mouseup', e);
            //dragging = false;
            dragging = null;
        }
        $('.parts').each(function (i, parts) {
            local.push({
                id: $(parts).attr("id"),
                top: $(parts).css('top'),
                left: $(parts).css('left'),
                zind: $(parts).css('z-index')
            });


        });
        localStorage.local = JSON.stringify(local);
    });

    const body = $(document.body);
    const colorInput = $('#color');

    $('#add').click(() => {
        //addMouseDownListener(
        $('<div class="box"></div>').appendTo(body)
            .css({ backgroundColor: colorInput.val() });
        //);
    });
    let y = 0;
    $('.parts').each(function (i, obj) {
        //test
        $(obj).css('left', 60);
        $(obj).css('top', y += 222);
        
    });

    if (localStorage.local) {
        local = JSON.parse(localStorage.local);
        local.forEach(rec => {
            $(`#${rec.id}`).css('top', rec.top);
            $(`#${rec.id}`).css('left', rec.left);
            $(`#${rec.id}`).css('z-index', rec.zind);

        });

    }

}());