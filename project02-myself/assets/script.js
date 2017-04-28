$(document).ready(function(){
    var count=0;
    $("#humburger-icon").click(function(){
        debugger
        if(count%2==0){
            $('.header-primary-nav').addClass('active');
        }else{
             $('.header-primary-nav').removeClass('active');
        }
        count+=1;
    });
});