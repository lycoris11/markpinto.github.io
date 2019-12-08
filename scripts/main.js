
//WOW.js Initialzation
new WOW().init();

//Background Color Change
$(window).scroll(function() {
    if ($(this).scrollTop() <= 450) {
        $('#wrapper').addClass('colorOne').removeClass('colorTwo');
    } else if ($(this).scrollTop() <= 800) {
        $('#wrapper').addClass('colorTwo').removeClass('colorThree');
    } else if ($(this).scrollTop() >= 2000) {
        $('#wrapper').addClass('colorThree').removeClass('colorOne');
    } else {
        $('#wrapper').addClass('colorThree');
    }
});


$(document).ready(function () {

    //enable tooltips
    options = { animation:true,}
    $('[data-toggle="tooltip"]').tooltip(options);

    //enable modals on mobile
    $('#whoopsModal').on('shown.bs.modal', function () {
        $('#modalInput').trigger('focus');
    })

    $(window).scroll(function(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    //close modal and scroll down
    $("#contactModal").click(function () {
        $('#whoopsModal').modal('hide');
        $('html, body').animate({
            scrollTop: $("#contactForm").offset().top
        }, 2000);
    });
});