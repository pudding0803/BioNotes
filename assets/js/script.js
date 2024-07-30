$(document).ready(function () {
    $('table').addClass('table is-bordered is-striped is-hoverable');
    $('table').css('width', 'auto');

    $('img[data-zoom]').each(function () {
        const zoom = $(this).data('zoom');
        if ($.isNumeric(zoom) && zoom > 0) {
            $(this).css('zoom', zoom);
        }
    });

    $('img[data-border]').each(function () {
        if ($(this).data('border') === 1) {
            let zoom = $(this).data('zoom');
            zoom = ($.isNumeric(zoom) && zoom > 0) ? zoom : 1;
            $(this).css({
                'border': `solid ${4 / zoom}px #eee`,
                'padding': `${10 / zoom}px`,
            });
        }
    })

    $('img[data-caption]').each(function () {
        const caption = $(this).data('caption');
        if (caption) {
            $(this).wrap('<figure></figure>')
                .after(`<figcaption>▲ ${caption}</figcaption>`);
        }
    });

    $('div[data-href]').on('click', function () {
        window.location.href = $(this).data('href');
    });
});