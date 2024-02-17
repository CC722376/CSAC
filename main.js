(function($){

   //Mobile navigation
   if ($('#nav-menu-container').length){
    let $mobile_nav = $('#nav-menu-container').clone().prop({
        id:"mobile-nav"

    });
    $mobile_nav.find('> ul').attr({
        'class':'',
        'id':''
    });

    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fas fa-bars"></i></button>')
    $('body').append('<div id="mobile-body-overlay"></div>');

    $(document).on('click','#mobile-nav-toggle',function(e){
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle').toggleClass('fa-times fa-bars');
        $('#mobile-nav-overlay').toggle();
    });
    $(document).on('click','#mobile-nav ul li a',function(e){
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overlay').toggle();
    });
   }




    //Navigation active state on scroll
    
    let elm = document.querySelectorAll(".nav-menu");
    let ms = new MenuSpy(elm,{
        activeClass : "menu-active",
        thresheld   : 71,
        enableLocationHash:false
    });





    //Testimonial Carousel
    $('#testimonials-carousel').owlCarousel({
        dots:true;
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            }
            992:{
                items:4
            }
        }
});

   //back to Top
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.back-to-top').fadeIn('slow');
        }else{
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},1500,'easeInOutExpo');
        return false;
    });

