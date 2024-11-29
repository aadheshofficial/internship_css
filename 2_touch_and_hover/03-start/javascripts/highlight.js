$(function() {
    $('.option').hover(
        function() {
            $('.option').removeClass("highlighted");
            $(this).addClass("highlighted");
        },
        function() {
            $(this).removeClass("highlighted");
        }
    );
});
