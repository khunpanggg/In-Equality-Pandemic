$(document).ready(function() {
    var lastScrollTop = 0;

    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
            console.log(1)
            if (st > 1) {
                $("#s2").slideUp("slow");
                console.log('Bar')
                move();
            }

        } else {
            // upscroll code
            console.log(2)
            $("#s2").slideDown("slow");


        }
        lastScrollTop = st;
        console.log(st)
    });
});


var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem1 = document.getElementById("myBar1");
        var elem2 = document.getElementById("myBar2");
        var elem3 = document.getElementById("myBar3");
        var elem4 = document.getElementById("myBar4");
        var width = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width += 0.5;
                elem1.style.width = width + "%";
                elem2.style.width = width + "%";
                elem3.style.width = width + "%";
                elem4.style.width = width + "%";
            }
        }
    }
}