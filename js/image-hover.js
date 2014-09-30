jQuery(document).ready(function(){					
 
	 jQuery('.title-wrap, .subtitle-wrap').each(function() {
        jQuery(this).data('wrapping', jQuery(this).width());
        jQuery(this).css('width', 0);
     });

      jQuery('.images').bind('mouseenter', function() {
        jQuery(this).find('.title-wrap').stop().each(function() {
          jQuery(this).animate({
            width: jQuery(this).data('wrapping')
          }, 150);
      	});
        jQuery(this).find('.subtitle-wrap').stop().each(function() {
          jQuery(this).delay(250).animate({
            width: jQuery(this).data('wrapping')
          }, 150);
        });
      });

      jQuery('.images').bind('mouseleave', function() {
        jQuery(this).find('.title-wrap').stop().each(function() {
          jQuery(this).animate({
            width: 0
          }, 0);
      	});
        jQuery(this).find('.subtitle-wrap').stop().each(function() {
          jQuery(this).animate({
            width: 0
          }, 0);
        });
      });
	
	  
	  jQuery('.element').hover(function() {
			 jQuery(this).find('.overlay').stop().animate({
    "opacity": "1"
  }, 150 );
			 jQuery(this).find('.icons').stop().animate({
    "opacity": "1"
  }, 150 );
			 }, function() {
			jQuery(this).find('.overlay').stop().animate({
    "opacity": "0"
  }, 150 );
			 jQuery(this).find('.icons').stop().animate({
    "opacity": "0"
  }, 150 ); 
			 
	   });
	  
	  
	  jQuery('.about').click(function() {
			 jQuery(this).find('.movable-content').stop().animate({
    "margin-left": "300px"
  }, 200 );
			 
	   });
	  
	  
	   jQuery('.about').bind('mouseleave', function() {
			 jQuery(this).find('.movable-content').stop().animate({
    "margin-left": "0px"
  }, 200 );
			 
	   });
	  
	  
	  
	jQuery('#options li').bind('mouseover', function() {
	  jQuery(this).find('.menu-line').stop().animate({
    "width": "100%"
  }, 150 );
	   });
	
	jQuery('#options li').bind('mouseout', function() {
	  jQuery(this).find('.menu-line').stop().animate({
    "width": "0"
  }, 150 );
	   });
	
});