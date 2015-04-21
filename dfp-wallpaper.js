/**
 * Wallpaper Ad
 **/
var dfp_ads = dfp_ad_object[0];
var wallpaper_tag = dfp_ads.wallpaper_ad.position_tag;
jQuery('body').ready(function() {
    jQuery('<!-- Roadblock Ad -->' +
    '<div id=' + wallpaper_tag + '>' +
    '<script type="text/javascript">' +
    'googletag.cmd.push(function() { ' +
    'googletag.display("' + wallpaper_tag + '"); });' +
    '</script>' +
    '</div>' +
    '<!-- Roadblock out-of-page div -->' +
    '<div id="' + wallpaper_tag + '-oop">' +
    '<script type="text/javascript">' +
    'googletag.cmd.push(function() { ' +
    'googletag.display("' + wallpaper_tag + '-oop"); });' +
    '</script>' +
    '</div>').prependTo('body');
});

jQuery( window ).load(function() {
    var ad_tag = '#' + wallpaper_tag;
    var ad = jQuery(ad_tag + ' iframe');
    var ad_pos = jQuery(ad_tag);
    ad_pos.css('background-image', 'url(' + ad.contents().find('img').attr('src') + ')');
    ad.contents().find('img').hide();
    console.log(ad.contents().find('img').attr('src'));
});