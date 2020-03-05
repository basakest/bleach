$(document).ready(function() {
    var waypoints1 = $('.js--wp-1').waypoint(function(direction) {
        if (direction === "down") {
            $('.nnav').addClass('sticky'); 
        } else {
            $('.nnav').removeClass('sticky');
        }
    }, {
      offset: '25%'
    });
    
    $('.btn1').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-1').offset().top}, 1000);
    });
    
    $('.btn2').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-2').offset().top}, 1000);
    });
    
    var waypoints2 = $('.js--wp-2').waypoint(function(direction) {
        if (direction === "down") {
            $('.js--wp-2').addClass('animated pulse');
            
        } else {
            $('.js--wp-2').removeClass('animated pulse');
        }
    }, {
      offset: '60%'
    });
    
    var waypoints3 = $('.js--wp-3').waypoint(function(direction) {
        if (direction === "down") {
            $('.js--wp-3').addClass('animated bounceInUp');
            
        } else {
            $('.js--wp-3').removeClass('animated bounceInUp');
        }
    }, {
      offset: '40%'
    });
    
    var waypoints4 = $('.js--wp-4').waypoint(function(direction) {
        if (direction === "down") {
            $('.js--wp-4').addClass('animated fadeIn');
            
        } else {
            $('.js--wp-4').removeClass('animated fadeIn');
        }
    }, {
      offset: '60%'
    });
    
     var waypoints4 = $('.js--wp-5').waypoint(function(direction) {
        if (direction === "down") {
            $('.js--wp-5').addClass('animated pulse');
            
        } else {
            $('.js--wp-5').removeClass('animated pulse');
        }
    }, {
      offset: '60%'
    });
    
    $('.mobile-logo').click(function() {
        console.log("clicked");
        var nav = $('.main-nav ul');
        var logo = $('.mobile-logo');
        nav.slideToggle(200);
        if (logo.attr('name') === 'list-outline') {
            logo.attr('name', 'close-outline')
        } else {
            logo.attr('name', 'list-outline')
        }
    });
    
});