$(document).ready(function() {
    var waypoints = $('.js--wp-1').waypoint(function(direction) {
        if (direction === "down") {
            $('.nnav').addClass('sticky'); 
        } else {
            $('.nnav').removeClass('sticky');
        }
      
    }, {
      offset: '25%'
    });
});