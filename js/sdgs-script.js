$(window).scroll(parallaxScrolling);

function parallaxScrolling() {
    var scrolled = $(window).scrollTop();
    $('.layer1').css('top', (0 - (scrolled * .77)) + 'px');
    $('.layer2').css('top', (0 - scrolled) + 'px');
    $('.layer3').css('top', (0 - (scrolled * .44)) + 'px');
    $('.layer4').css('top', (0 - (scrolled * .33)) + 'px');
    $('.layer5').css('top', (0 - (scrolled * .22)) + 'px');
}