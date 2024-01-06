//navbar
$('.offcanvabtn').on('click' , function(){
   $(this).toggleClass('active')//add class active for the offcanvabtn , this refer to offcanvabtn
})
// main content
$('.message-btn').on('click',function(){
   $('.chat-contact').toggleClass('active');
   $('.main-content').toggleClass('active-chat');
})
// any code here withoue event excute once
let navbarHeight=$('.navbar').outerHeight();//with Padding
$('.sidebar').css({'top':navbarHeight+'px'});
$('.chat-contact').css({'top':navbarHeight+'px'});
$('.main-content').css({'padding-top':navbarHeight+'px'});//position fixed not used
let windowwidth=$(window).width();
let sidebarwidth=$('.sidebar').width();
if(windowwidth >= 1600){
$('.main-content').css({'padding-right':sidebarwidth+'px','padding-left':sidebarwidth+'px'});
}
else if(windowwidth >= 992 && windowwidth < 1600){
 $('.main-content').css({'padding-right':0,'padding-left':sidebarwidth +'px'});
}else if(windowwidth < 992){
   $('.main-content').css({'padding-right':0,'padding-left':0 });

}
$(window).on('resize',function(){
   let windowwidth=$(window).width();
   if(windowwidth >= 1600){
      $('.main-content').css({'padding-right':sidebarwidth+'px','padding-left':sidebarwidth+'px'});
      }
      else if(windowwidth < 1600 && windowwidth >= 992){
         $('.main-content').css({'padding-right':0,'padding-left':sidebarwidth+'px'});
      }else if(windowwidth < 992){
         $('.main-content').css({'padding-right':0,'padding-left':0});
      }
})
// stories carousel
 $(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      margin:10
   });
 });