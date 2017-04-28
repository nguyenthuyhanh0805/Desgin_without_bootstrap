$(document).ready(function(){
    var count=0;
    $("#humburger-icon").click(function(){
        if(count%2==0){
            $('.header-primary-nav').addClass('show-menu');
        }else{
             $('.header-primary-nav').removeClass('show-menu');
        }
        count+=1;
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        var beforeAboutUsTop = $('.website-slider').height() + $('.websites').height() -500;
       
        if(windowTop > 0){
            $('.header-primary-nav').addClass('active');
            $('.logo').addClass('active');
        }else{
             $('.header-primary-nav').removeClass('active');
             $('.logo').removeClass('active');
        }
    });
});
smoothScroll.init({
    offset: 40
});
jssor_slider1_starter = function (containerId) {
    var options = {
        $AutoPlay: 1,                                       //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
        $Idle: 4000,                                        //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
        //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
        $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
        $Cols: 1,                                           //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)

        $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        },

        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

            $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
            $AutoCenter: 0,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
            $Rows: 1,                                       //[Optional] Specify lanes to arrange thumbnails, default value is 1
            $SpacingX: 3,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
            $SpacingY: 3,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
            $Cols: 9,                                       //[Optional] Number of pieces to display, default value is 1
            $ParkingPosition: 260,                          //[Optional] The offset position to park thumbnail
            $Orientation: 1,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
            $NoDrag: false                                  //[Optional] Disable drag or not, default value is false
        }
    };

    var jssor_slider1 = new $JssorSlider$(containerId, options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 980));
        else
            $Jssor$.$Delay(ScaleSlider, 30);
    }

    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);

    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    //responsive code end
};
jssor_slider1_starter('slider1_container');