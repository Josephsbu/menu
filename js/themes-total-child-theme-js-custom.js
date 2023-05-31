jQuery(document).ready(function () {
    if (jQuery('.merchant-info').is('div')) {
        jQuery('.merchant-info .theme-button').click(function () {
            return false;
        });
        jQuery('.merchant-info .theme-button').click(function () {
            var classButton = jQuery(this).attr('href').replace('#', '');
            var imgBlock = jQuery('.merchant-info .' + classButton);
            if (!jQuery(this).is('current')) {
                jQuery('.merchant-info .theme-button').removeClass('current');
                jQuery(this).addClass('current');
            }
            if (!imgBlock.is('.current')) {
                jQuery('.merchant-info .wpb_single_image').removeClass('current');
                imgBlock.addClass('current');
            }
            return false;
        });
    }
});

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */