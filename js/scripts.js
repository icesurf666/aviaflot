// SCROLL
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1400);
    });
});

$(document).ready(function() {
$('.home-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: true,
  appendDots: $('.paginat'),
        customPaging: function(slider, i) {
            
            var numb = $(slider.$slides[i]).data('numb');
            return '<li class="numbers-li">'+numb+'</li>';
        }

});
 $(".arrow-left").click(function() {
    $(".home-slider").slick("prev");
  });
  $(".arrow-right").click(function() {
    $(".home-slider").slick("next");
  });
});