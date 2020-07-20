// ------------------------------ swiper
var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
// -------------------------------
$('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);
    $this.addClass('toggle_active');

    if ($this.next().hasClass('show') && $this.hasClass('toggle_active')) {
        $this.removeClass('toggle_active');

        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.toggle').removeClass('toggle_active');
        $this.addClass('toggle_active');


        $this.parent().parent().find('.inner').removeClass('show');
        $this.parent().parent().find('.inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});