$('a[href^="#"]').click(function (event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

function getTargetTop(elem) {
    var id = elem.attr("href");
    var offset = 60;
    return $(id).offset().top - offset;
}

$(window).scroll(function (e) {
    isSelected($(window).scrollTop())
});

var sections = $('a[href^="#"]');

function isSelected(scrolledTo) {
    var threshold = 100;
    var i;

    for (i = 0; i < sections.length; i++) {
        var section = $(sections[i]);
        var target = getTargetTop(section);

        if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
            sections.removeClass("active");
            section.addClass("active");

        }

    };
}

// parallax 

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let navbar = document.getElementById("navBarController")
let mirror1 = document.getElementById("mirror1")
let mirror2 = document.getElementById("mirror2")
let diamond = document.getElementById("main_diamond")
let star = document.getElementById("star")
let flower1 = document.getElementById("flower1")
let flower2 = document.getElementById("flower2")
let hand = document.getElementById("hand")
let group_diamond = document.getElementById("group_diamond")
let camera = document.getElementById("camera")
let effect1 = document.getElementById("effect1")
let effect2 = document.getElementById("effect2")
let effect3 = document.getElementById("effect3")
let effect4 = document.getElementById("effect4")
let effect5 = document.getElementById("effect5")
let mohs = document.getElementById("mohs")
let intro = document.getElementById("intro")
let datamohs = document.getElementById("data-mohs")

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    flower1.style.left = value * 0.3 + 'px';
    flower1.style.top = -value * 0.5 + 'px';
    flower2.style.left = -value * 0.3 + 'px';
    flower2.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = value * 0.45 + 'px';
    mirror1.style.left = value * 0.45 + 'px';
    mirror2.style.left = -value * 0.25 + 'px';
    mirror2.style.top = -value * 0.45 + 'px';
    diamond.style.top = -value * 0.25 + 'px';
    group_diamond.style.left = -value * 0.5 + 'px';
    group_diamond.style.top = -value * 0.7 + 'px';
    group_diamond.style.width = 100 + (value * 0.09) + '%';
    group_diamond.style.height = 'auto';
    hand.style.left = value * 0.25 + 'px';
    camera.style.top = value * 0.6 + 'px';

    // mohs
    mohs.style.top = Math.max(500 - value * 0.75, 100) + 'px';
    // text1.style.top = value * 2 + 'px';
    // text2.style.top = value * 1 + 'px';
})

window.addEventListener('mousemove', function (event) {
    //console.log(event);

    effect1.style.left = `calc(40vw + ${event.screenX / 100}px)`;
    effect1.style.top = `${event.screenY / 100 * 1.4}px`;
    effect2.style.left = `calc(40vw + ${event.screenX / 100 * 8}px)`;
    effect2.style.top = `${event.screenY / 100 * 12}px`;
    effect3.style.left = `calc(40vw + ${event.screenX / 100}px)`;
    effect3.style.top = `${event.screenY / 100 * 0.8}px`;
    effect4.style.left = `calc(40vw + ${event.screenX / 100 * 4}px)`;
    effect4.style.top = `${event.screenY / 100 * 2}px`;
    effect5.style.left = `calc(40vw + ${event.screenX / 100}px)`;
    effect5.style.top = `${event.screenY / 100 * 3}px`;
    datamohs.style.left = `calc(${event.screenX / 100}px)`;
    datamohs.style.top = `${event.screenY / 100 * 0.02}px`;
});
//

$('.carousel').carousel()


//




document.documentElement.className = 'js';
var supportsCssVars = function () {
    var s = document.createElement('style'),
        support;

    s.innerHTML = "root: { --tmp-var: bold; }";
    document.head.appendChild(s);
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'));
    s.parentNode.removeChild(s);
    return support;
}
if (!supportsCssVars()) alert('Please view this demo in a modern browser that supports CSS Variables.')

