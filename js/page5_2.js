$(document).ready(function() {
    var lastScrollTop = 0;

    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
            console.log(1)
            if (st > 1) {
                $("#s2").slideDown("slow");
            } else {

            }

        } else {
            // upscroll code
            console.log(2)
            $("#s2").slideUp("slow");

        }
        lastScrollTop = st;
        console.log(st)
    });
});