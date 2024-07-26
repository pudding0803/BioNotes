$(document).ready(function () {
    $('table').addClass('table is-bordered is-striped is-hoverable');
    $('table').css('width', 'auto');

    $('img[data-zoom]').each(function() {
        const zoom = $(this).data('zoom');
        if ($.isNumeric(zoom) && zoom > 0) {
            $(this).css('zoom', zoom);
        }
    });
});