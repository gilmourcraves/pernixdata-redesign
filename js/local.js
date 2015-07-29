jQuery(document).ready(function($){

    var catHeader = $('.taxonomy-term .content');
    var title = $('title').text();
    title = title.replace(' | PernixData', '');

    $(catHeader).html('<h2>Category: <span class="red">' + title + '</span></h2>');



    // Bio Formatting
    //hack to hide bio small of full bio page
    if($('.container-blog-bio').length > 0){
        $('.container-bio-sm').hide();

    } else {
        $('.container-bio-sm').fadeIn('slow');
    }

    $('.views-content-uid').text('');

    // rewrite blog author link on main blog page
    $('.user-picture a').each(function(){
        var blogAuthorLink = $(this).parent().parent().parent().find($('.blog-title-list')).find('.submitted-data').find('.blog-author-link').attr('href');
        $(this).attr('href', blogAuthorLink);
    });

    var bioTextCol = $('.col-bio-text');
    var bioText = $('.bio-text');
    var bioTextContent = $(bioText).html();

     $(bioText).html(truncateString(bioTextContent, 350));

    var bioToggle = $('.bio-toggle');

    $(bioToggle).on('click', function(e){
        e.preventDefault();

        if($(this).hasClass('open')){
            $(this).addClass('open').text('Read more');
            $(this).removeClass('open');
            $(bioText).html(truncateString(bioTextContent, 350));
            $(bioTextCol).removeClass('col-bio-text-open');
        } else {
            $(this).addClass('open').text('Read less');
            $(bioText).html(truncateString(bioTextContent, 6000));
            $(bioTextCol).addClass('col-bio-text-open');
        }
    });

    // hide share links if no data
    $('.share').find('a').each(function(){
        var socialLink = $(this).attr('href');
        socialLink = socialLink.trim();
        if(socialLink == '' || socialLink == 'http://www.twitter.com/'){
            $(this).find('span').hide();
        }
    });

    // bio page
    var twitterLink = $('.twitter-link');
    var twitterLinkVal = $(twitterLink).text();

    if(twitterLinkVal == ''){
        $('.twitter-divider').hide();
    } else {
        $('.twitter-divider').show();
        $(twitterLink).text('@'+twitterLinkVal)
    }

    function truncateString(str, length) {
        return str.length > length ? str.substring(0, length - 3) + '...' : str
    }

    //end bio scripts








    var win_wid=jQuery(window).width();
    var count = jQuery("#gallery img").length;//count the slide child
    var carousel_wid =jQuery('#carousel_inner').width();
    var img_left;
    var last_margin;
    var last_active;
    var slide1=carousel_wid/4;
    var slide3=carousel_wid/2;
    if(win_wid>=1401)
    {
      last_active=count-4;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':(slide1)});
        
		next();
		back();
    }
    else if((win_wid>=1025)&&(win_wid<=1400))
    {
         last_active=count-4;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':slide1});
        
		next();
		back();
    }
    else if((win_wid>=881)&&(win_wid<=1024))
    {
          last_active=count-4;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':slide1});
        
		next();
		back();
    }
    else if((win_wid>=596)&&(win_wid<=880))
    {
          last_active=count-2;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':slide3});
      
		next();
		back();
          
    }
    else if((win_wid>=300)&&(win_wid<=595))
    {
          last_active=count-2;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':slide3});
       
		next();
		back();
    }




function next(){
    jQuery('.next').click(function(e){
        e.preventDefault();
        jQuery('.back').addClass('back_hide');
            img_left=(jQuery('#gallery img').width());
        last_margin=parseInt(last_active)*parseInt(img_left);

          if(jQuery(this).hasClass('next_hide')){
        var active_left=jQuery('#gallery').stop(true, true).css('left');
        var add_left=((parseInt(active_left))-parseInt(img_left));

            jQuery('#gallery').stop(true, true).animate({'left':add_left});

             if(add_left==(-last_margin))
             {
                 jQuery(this).removeClass('next_hide');
            }

        }
    });
}
function back(){
	
	//img_left=(jQuery('#gallery img').width());

    jQuery('.back').click(function(event){
			event.preventDefault();				   
		jQuery('.next').addClass('next_hide');
	img_left=(jQuery('#gallery img').width());	
       if(jQuery(this).hasClass('back_hide'))
	   {
       var active_left=jQuery('#gallery').stop(true, true).css('left');
	var add_left=((parseInt(active_left))+parseInt(img_left));
		
		jQuery('#gallery').stop(true, true).animate({'left':add_left});
		if(add_left==0)
		{
			jQuery(this).removeClass('back_hide');
		}
    }
    });
}

});


jQuery(window).resize(function(){
    jQuery('#gallery').css('left','0px');
    jQuery('.back').removeClass('back_hide');
    jQuery('.next').addClass('next_hide');
var win_wid=jQuery(window).width();
 var count = jQuery("#gallery img").length;//count the slide child
    var carousel_wid =jQuery('#carousel_inner').width();
	
	var img_left;
	var last_margin;
	var last_active;
    var slide1=carousel_wid/4;
   
    var slide3=carousel_wid/2;
    var slide4=carousel_wid/1;
    if(win_wid>=1401)
    {
      last_active=count-4;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':(slide1)});
        img_left=(jQuery('#gallery img').width());
		
    }
    else if((win_wid>=1025)&&(win_wid<=1400))
    {
         last_active=count-4;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':slide1});
        img_left=(jQuery('#gallery img').width());
		
    }
    else if((win_wid>=881)&&(win_wid<=1024))
    {
        last_active=count-4;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':slide1});
        img_left=(jQuery('#gallery img').width());
    }
    else if((win_wid>=596)&&(win_wid<=880))
    {
        last_active=count-2;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':slide3});
        img_left=(jQuery('#gallery img').width());
    }
    else if((win_wid>=300)&&(win_wid<=595))
    {
          last_active=count-2;//if 4 slide id visible
        jQuery('#gallery > img').css({'width':slide3});
        img_left=(jQuery('#gallery img').width());
    }
});