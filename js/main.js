$(function(){
    
    'use strict';
    $(window).scroll(function(){
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()){
            navbar.addClass('scrolled');
        } else{
            navbar.removeClass('scrolled');
    }
});
    // Change With Tabs
    $('.tab-switch li').click(function(){
       //add selected class to active links
        $(this).addClass('selected').siblings().removeClass('selected');
        
        //hide all divs
        $('.tab-section .tabs-content > div').hide();
        //show  concted with this links
        $('.' + $(this).data('class')).show();
        
    });
});