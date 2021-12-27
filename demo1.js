window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("x_nav").style.width = "100%";
        document.getElementById("x_nav").style.transition = ".5s";
    } else {
        document.getElementById("x_nav").style.width = "88%";
        document.getElementById("x_nav").style.transition = ".5s";

    }
}

$(window).on('resize', function(){
    var win = $(this);
    if (win.width()>=992) { 
        $(".test .t2").attr('src', 'img/testimonial-1.jpg');
        $(".test .t1").attr('src', 'img/testimonial-4.jpg');
        $(".test .t3").attr('src', 'img/testimonial-2.jpg');


    }
   else if (win.width()<992&& win.width()>=767) { 
        $(".test .t1").attr('src', 'img/testimonial-1.jpg');
        $(".test .t2").attr('src', 'img/testimonial-2.jpg');
        $(".test .t3").attr('src', 'img/testimonial-3.jpg');


    }
    
    else {

        $(".test .t1").attr('src', 'img/testimonial-2.jpg');
        $(".test .t2").attr('src', 'img/testimonial-3.jpg');
        $(".test .t3").attr('src', 'img/testimonial-1.jpg');
  }});