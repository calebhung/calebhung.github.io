
$(window).scroll(function() {
    // 100 = The point you would like to fade out the nav.
      
        if ($(window).scrollTop() > 300 ){
             $('.navigation li a').addClass('hide');
      } else {
        
        $('.navigation li a').removeClass('hide');
        
         };   	
    });
