const navToggle = document.querySelector(".nav-toggler");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const closes = document.querySelector(".close-nav");
navToggle.onclick = function (){
    navToggle.classList.toggle("active");
    nav.classList.toggle("active");
};
closes.onclick = function (){
    navToggle.classList.remove("active");
    nav.classList.remove("active");
};
window.onscroll = function (){
    this.scrollY > 20 ?
    header.classList.add('active'):
    header.classList.remove('active');
};

// jquery 
$(document).ready(function(){
    // topUp-btn
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".topUp-btn").fadeIn(800);
        } else{
            $(".topUp-btn").fadeOut(800);
        }
    });
    $(".topUp-btn").click(function(){
        $(" html,body").animate({scrollTop : 0}, 1000);
    });

    // preloader 
    $(window).on("load", function(){
        $(".preloader").fadeOut(1000);
    });

    // counterUP
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    }); 
    
    // init Isotope
    // ourport area here 
    var $grids = $('.ourPort-item').isotope({
        // options
        });
    $('.ourPort-gallery-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grids.isotope({ filter: filterValue });
    });

    // magnific-popup 
    $('.expandVideo').magnificPopup({
        type: 'iframe'
    });

    // portfolio area here
    // init Isotope
    var $grid = $('.portfolio-content').isotope({
    // options
    });
    // filter items on button click
    $('.portfolio-nav').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

});
 

/*########################
#theEndJAVASCRIPT########################
########################*/