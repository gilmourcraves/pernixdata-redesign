/**
 * mlightbox v1.2.1
 * author: miskith
 **/


var content;
var last_active, last_margin;
function small_resize(){
         var win_wid=jQuery(window).width();
    var small_wid =jQuery('#small_img').width();
    var slide1=(small_wid/4)-10;
    var slide3=small_wid/2;
    var slide4=small_wid/1;
    
   if(win_wid>=1401)
    { var count = jQuery(".small_gallery #gallery img").length;
    last_active=count-4;
     
        jQuery('.small_gallery > #gallery > img').css({width:slide1});
    }
    else if((win_wid>=1025)&&(win_wid<=1400))
    {
         var count = jQuery(".small_gallery #gallery img").length;
    last_active=count-4;
          jQuery('.small_gallery > #gallery > img').css({width:slide1});
    }
    else if((win_wid>=881)&&(win_wid<=1024))
    {
          var count = jQuery(".small_gallery #gallery img").length;
    last_active=count-4;
          jQuery('.small_gallery > #gallery > img').css({width:slide1});
    }
    else if((win_wid>=596)&&(win_wid<=880))
    {
          var count = jQuery(".small_gallery #gallery img").length;
    last_active=count-4;
          jQuery('.small_gallery > #gallery > img').css({width:slide1});
    }
    else if((win_wid>=300)&&(win_wid<=595))
    {
        var count = jQuery(".small_gallery #gallery img").length;
    last_active=count-4;
          jQuery('.small_gallery > #gallery > img').css({width:slide1});
    }
}
jQuery.lgbx = {
    //Define global variables
    darrows:true,
    dclose:true,
    ddesc:true,
    img_fold:"./images/",

    init:function(){
     
        jQuery(document).on("click","[data-image]",function(){jQuery.lgbx.open(jQuery(this).attr("data-image"))});
        jQuery(document).on("click","#lgbx_bcg,#lgbx_close",function(){jQuery.lgbx.close()});
        jQuery(window).resize(function(){if (jQuery("#lgbx").size()) jQuery.lgbx.resize()});
      //  jQuery(document).on("click","#lgbx .img",function(e){jQuery.lgbx.click(e)});
       // jQuery(document).on("mouseenter","#lgbx .img",function(e){jQuery.lgbx.enter(e)});
       // jQuery(document).on("mouseleave","#lgbx *",function(e){jQuery.lgbx.leave(e)});
       // jQuery(document).on("mousemove","#lgbx .img",function(e){jQuery.lgbx.move(e)});
        jQuery(document).on("click","#lgbx_next",function(){jQuery.lgbx.next("next")});
        jQuery(document).on("click","#lgbx_prev",function(){jQuery.lgbx.next("prev")});
        content = jQuery('#carousel_inner').html();
    },

    //Open lightbox
    open:function(img)
    {
        if (!jQuery("#lgbx").size())
         
  
            jQuery("body").append("<div id='lgbx_bcg'></div><div id='lgbx' style='display: none; top: "+((jQuery(window).height()-10)/2)+"px; left: "+((jQuery(window).width()-10)/2)+"px'>\n\<div id='lgbox_head' >\n\
<h1 class='light_head'>Our Culture</h1>\n\
<img src='/sites/all/themes/pernixdata/"+this.img_fold+"close.png' alt='close' title='' id='lgbx_close'>\n\
<img src='/sites/all/themes/pernixdata/"+this.img_fold+"nextc.png' alt='next' title='' id='lgbx_next'><span></span>\n\
<img src='/sites/all/themes/pernixdata/"+this.img_fold+"backc.png' alt='prev' title='' id='lgbx_prev'></div><img src='"+this.img_fold+"close.png' alt='close' title='' id='lgbx_closee'><img src='"+this.img_fold+"next.png' alt='next' title='' id='lgbx_nextt'><img src='"+this.img_fold+"prev.png' alt='prev' title='' id='lgbx_prevv'><div id='lgbx_desc'></div><div id='small_img'>\n\
<img src='/sites/all/themes/pernixdata/"+this.img_fold+"backc.png' alt='prev' title='' class='back'><img src='/sites/all/themes/pernixdata/"+this.img_fold+"nextc.png' alt='next' title='' class='next next_hide'><div class='small_gallery' style='left:0px'>"+content+"</div></div></div>");
        
    jQuery("#lgbx").append("<img src='"+img+"' alt='img' title='' style='display: none; max-width: "+(jQuery(window).width()-100)+"px; max-height: "+(jQuery(window).height()-100)+"px' class='img'>");
      
    this.vars();
        this.loading = setInterval(function(){
            if (jQuery("#lgbx .img:last-child")[0].complete)
            {
                clearInterval(jQuery.lgbx.loading);
                jQuery("#lgbx").show();
                if (jQuery("#lgbx .img").size()!=1)
                    jQuery("#lgbx .img:eq(0)").fadeOut(200, function(){jQuery(this).remove(); jQuery.lgbx.show()});
                else
                    jQuery.lgbx.show();
            }
        }, 100);
    },

    //Show image
    show:function()
    {
        this.resize(function(){jQuery("#lgbx .img").fadeIn(200)});
        if (jQuery(this.selector+":eq("+this.index+")").attr("data-desc"))
            jQuery("#lgbx_desc").text(jQuery(this.selector+":eq("+this.index+")").attr("data-desc"));
        else if (jQuery(this.selector+":eq("+this.index+")").attr("title"))
            jQuery("#lgbx_desc").text(jQuery(this.selector+":eq("+this.index+")").attr("title"));
        else if (this.size!=1)
            jQuery("#lgbx_desc").text("Image "+(this.index+1)+"/"+this.size);

    },

    //Close lightbox
    close:function()
    {
        delete this.selector;
        delete this.index;
        delete this.size;
        jQuery("#lgbx,#lgbx_bcg").fadeOut(250, function(){jQuery(this).remove()});
    },

    //Resize lightbox window
    resize:function(callback)
    {
        function resize_next(){
            jQuery('.next').click(function(){
                                    jQuery('.back').addClass('back_hide');
                                    var img_left=jQuery('.small_gallery > #gallery > img').width()+10;
                                    console.log(img_left);
                                    var active_left=jQuery('.small_gallery').stop(true, true).css('left');
                                    console.log(active_left);
                                    var add_left=((parseInt(active_left))-parseInt(img_left));
                                    console.log(add_left);
                                    console.log(last_active);
                                     last_margin=parseInt(last_active)*parseInt(img_left);
                                      console.log(last_margin);
                                    if(jQuery(this).hasClass('next_hide')){
                                    jQuery('.small_gallery').stop(true, true).animate({'left':add_left});
                                     if(add_left==(-last_margin))
                                        {
                                         jQuery(this).removeClass('next_hide');
                                        }
                                    }

                                });
        }
        function resize_back(){
            jQuery('.back').click(function(){
                                    var img_left=jQuery('.small_gallery > #gallery > img').width()+10;					   
                                    jQuery('.next').addClass('next_hide');
                                    if(jQuery(this).hasClass('back_hide'))
                                    {
                                     var active_left=jQuery('.small_gallery').stop(true, true).css('left');
                                     var add_left=((parseInt(active_left))+parseInt(img_left));
                                     jQuery('.small_gallery').stop(true, true).animate({'left':add_left});
                                    if(add_left==0)
                                       {
                                                jQuery(this).removeClass('back_hide');
                                       }

                                    }
                            });
        }
        if (callback==null)
        {
                    var resize_wid=jQuery(window).width();
                    console.log(resize_wid);
                            if(resize_wid>=1100)
                            {
                              

                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-380),maxHeight: (jQuery(window).height()-480)});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-230)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-380)/2)});
                            var lgbx_padding=((26/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});   
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)}); 
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            small_resize();
                            var small_he=jQuery('.small_gallery > #gallery > img').height();
                            jQuery('#lgbx').css({'padding-bottom':small_he+65});
                        }
                        else if((resize_wid>=900)&&(resize_wid<=1099))
                        {
                       
                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-380),maxHeight: (jQuery(window).height()-350)});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-230)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-140)/4)});
                            var lgbx_padding=((20/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});   
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)}); 
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            small_resize();
                            var small_he=jQuery('.small_gallery > #gallery > img').height();
                            jQuery('#lgbx').css({'padding-bottom':small_he+65});
                        }
                        else if((resize_wid>=768)&&(resize_wid<=899))
                        {
                            
                          
                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-340),maxHeight: (jQuery(window).height()-280)});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-230)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-115)/3)});
                            var lgbx_padding=((20/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});   
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)});  
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            small_resize();
                            var small_he=jQuery('.small_gallery > #gallery > img').height();
                            jQuery('#lgbx').css({'padding-bottom':small_he+65});
                        }
                        else if((resize_wid>=596)&&(resize_wid<=767))
                        {
                            
                           
                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-300),maxHeight: (jQuery(window).height()-280)});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-180)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-150)/2)});
                            var lgbx_padding=((20/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});   
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)});  
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            small_resize();
                            var small_he=jQuery('.small_gallery > #gallery > img').height();
                            jQuery('#lgbx').css({'padding-bottom':small_he+65});
                        }
                        else if((resize_wid>=300)&&(resize_wid<=595))
                        {
                            
                         
                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-180),maxHeight: (jQuery(window).height()-220),'display':'block'});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-100)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-50)/2)});
                            var lgbx_padding=((7/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});   
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)});   
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            small_resize();
                           
                        }
        }
        else
        
        {
             var resize_wid=jQuery(window).width();
                    console.log(resize_wid);
                        if(resize_wid>=1100)
                                            {

                                resize_next();
                                resize_back();
                                jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-380),maxHeight: (jQuery(window).height()-480),'display':'block'});
                                jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                                jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-230)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-380)/2)}, 300, function(){callback();});
                                var lgbx_padding=((26/100)*jQuery('#lgbx .img').width());             
                                jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});                      
                                jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)}); 
                                small_resize();                
                                var small_he=jQuery('.small_gallery > #gallery > img').height();
                                jQuery('#lgbx').css({'padding-bottom':small_he+65});
                                }
                    else if((resize_wid>=900)&&(resize_wid<=1099))
                        {
                            resize_next();
                            resize_back();
                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-380),maxHeight: (jQuery(window).height()-350),'display':'block'});
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-230)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-140)/4)}, 300, function(){callback();});
                            var lgbx_padding=((20/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});                      
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)});      
                            small_resize();
                            var small_he=jQuery('.small_gallery > #gallery > img').height();
                            jQuery('#lgbx').css({'padding-bottom':small_he+65});
                        }
                    else if((resize_wid>=768)&&(resize_wid<=899))
                        {
                            
                            resize_next();
                            resize_back();
                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-340),maxHeight: (jQuery(window).height()-280),'display':'block'});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-230)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-115)/3)}, 300, function(){callback();});
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            var lgbx_padding=((20/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});                      
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)});
                            small_resize();
                            var small_he=jQuery('.small_gallery > #gallery > img').height();
                            jQuery('#lgbx').css({'padding-bottom':small_he+65});
                        }
                    else if((resize_wid>=596)&&(resize_wid<=767))
                        {
                            
                            resize_next();
                            resize_back();
                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-300),maxHeight: (jQuery(window).height()-280),'display':'block'});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-180)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-150)/2)}, 300, function(){callback();});
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            var lgbx_padding=((20/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});                      
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)});
                            small_resize();
                            var small_he=jQuery('.small_gallery > #gallery > img').height();
                            jQuery('#lgbx').css({'padding-bottom':small_he+65});
                        }
                        else if((resize_wid>=300)&&(resize_wid<=595))
                        {
                            
                            resize_next();
                            resize_back();
                            jQuery("#lgbx .img").css({maxWidth: (jQuery(window).width()-180),maxHeight: (jQuery(window).height()-220),'display':'block'});
                            jQuery("#lgbx").css({width: jQuery("#lgbx .img").width(), height: jQuery("#lgbx .img").height()+50, top: ((jQuery(window).height()-jQuery("#lgbx .img").height()-100)/2),left: ((jQuery(window).width()-jQuery("#lgbx .img").width()-50)/2)}, 300, function(){callback();});
                            var lgbx_padding=((7/100)*jQuery('#lgbx .img').width());             
                            jQuery('#lgbx').css({'padding-left':lgbx_padding,'padding-right':lgbx_padding});                      
                            jQuery('#lgbox_head').css({width: (jQuery('#lgbx').width()+((2*lgbx_padding)-15)),'margin-left':-(lgbx_padding-8)}); 
                            jQuery('#small_img').css({width:(jQuery('.img').width()+80)});
                            small_resize();
                            
                        }
         }
         
    },

    //Click event
    click:function(e)
    {
        var o = jQuery("#lgbx .img").offset();
        var pos = ((e.clientX-o.left)/jQuery("#lgbx .img").width());
        if (pos<0.5)
            this.next("prev");
        else
            this.next("next");
    },

    //Next image
    next:function(di)
    {
        if (this.size==1 || !this.selector)
            return false;
        if (di=="next")
            var next = (!jQuery(this.selector+":eq("+(this.index+1)+")").size() ? "0" : (this.index+1));
        else
            var next = (this.index==0 || !jQuery(this.selector+":eq("+(this.index-1)+")").size() ? (jQuery(this.selector).size()-1) : (this.index-1));
        jQuery('.img').css('display','none');
        this.index = parseFloat(next);
        this.open(jQuery(this.selector+":eq("+next+")").attr("data-image"));
    },

    //Mouse enter event
    enter:function(e)
    {
        if (this.dclose) jQuery("#lgbx_close").fadeIn(100);
        if (this.ddesc && jQuery("#lgbx_desc").text()!="") jQuery("#lgbx_desc").fadeIn(100);
    },

    //Mouse leave event
    leave:function(e)
    {
        if (!jQuery(e.relatedTarget).is("#lgbx_close,#lgbx_desc,#lgbx_next,#lgbx_prev"))
            jQuery("#lgbx_close,#lgbx_desc,#lgbx_next,#lgbx_prev").fadeOut(100);
    },

    //Mouse move event
    move:function(e)
    {
        if (!this.darrows || this.size==1)
            return true;
        var o = jQuery("#lgbx .img").offset();
        var pos = ((e.clientX-o.left)/jQuery("#lgbx .img").width());
        if (pos<0.5)
        {
            jQuery("#lgbx_next").fadeOut(50);
            jQuery("#lgbx_prev").fadeIn(50);
        }
        else
        {
            jQuery("#lgbx_next").fadeIn(50);
            jQuery("#lgbx_prev").fadeOut(50);
        }
    },

    //Define local vars
    vars:function()
    {
        if (this.selector==null)
        {
            var gal = jQuery("[data-image=\""+jQuery("#lgbx .img").attr("src")+"\"]").attr("data-gallery");
            this.selector = (gal ? "[data-gallery=\""+gal+"\"]" : false);
        }
        if (!this.selector)
        {
            this.index=0;
            this.size=1;
        }
        else
        {
            if (this.index==null)
                this.index = parseFloat(jQuery(this.selector).index(jQuery("[data-image=\""+jQuery("#lgbx .img").attr("src")+"\"]")));
            this.size = jQuery(this.selector).size();
        }
    }
};

jQuery(document).ready(function(){jQuery.lgbx.init()});
jQuery(window).resize(function(){
    jQuery('.small_gallery').css('left','0px');
    jQuery('.back').removeClass('back_hide');
    jQuery('.next').addClass('next_hide');
});