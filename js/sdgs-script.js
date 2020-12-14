$(window).scroll(parallaxScrolling);

function parallaxScrolling() {
    var scrolled = $(window).scrollTop();
    $('#layer1').css('top', (1950 - (scrolled * .88)) + 'px');
    $('#layer2').css('top', (1400 - (scrolled * .88)) + 'px');
    $('#layer3').css('top', (900 - (scrolled * .77)) + 'px');
    $('#layer4').css('top', (600 - (scrolled * .99)) + 'px');
    // $('.layer5').css('top', (0 - (scrolled * .22)) + 'px');
}
