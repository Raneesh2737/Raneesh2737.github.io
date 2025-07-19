$('scroll-bt').click(function(){
    $('html').scrolltop(0);
})
$(document).ready(function(){
    $('.menu-bt').click(function(){
        $('header').toggleClass('clickhead');
        $('.menu-bt').toggleClass('toggled');
        $('header nav').toggleClass('toggled');
    })
})


