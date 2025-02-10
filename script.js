$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("#navbar").removeClass("nav-transparent").addClass("nav-colored");
        } else {
            $("#navbar").removeClass("nav-colored").addClass("nav-transparent");
        }
    });
});
