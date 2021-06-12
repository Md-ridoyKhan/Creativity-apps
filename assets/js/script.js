const navToggle = document.querySelector(".nav-toggler");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const closes = document.querySelector(".close-nav");

// navigation menu 
navToggle.onclick = ()=>{
    navToggle.classList.toggle("active");
    nav.classList.toggle("active");
}
closes.onclick = ()=>{
    navToggle.classList.remove("active");
    nav.classList.remove("active");
}
window.onscroll = ()=>{
    this.scrollY > 20 ?
    header.classList.add("active"):
    header.classList.remove("active");
}

// jquery 
$(document).ready(function(){
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
    var $grid = $('.ourPort-item').isotope({
        itemSelector: '.ourPort-items',
        percentPosition: true,
        masonry: {
        columnWidth: '.ourPort-items'
        }
    });
    $('.ourPort-gallery-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // magnific-popup 
    $('.expandVideo').magnificPopup({
        type: 'iframe'
    });

});
 

/*########################
#theEndJAVASCRIPT########################
########################*/