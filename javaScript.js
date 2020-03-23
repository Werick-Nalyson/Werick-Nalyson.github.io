$(document).ready(function() {
        
    $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{enabled:true}
      // other options
    });

    $('.parent-container2').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
        // other options
      });

      $('.parent-container3').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
        // other options
      });

      $('.parent-container4').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
        // other options
      });
  });   

debounce = function(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

(function () {
    var $target = $('.anime'),
    animationClass = 'anime-start';
    
    function animeScroll() {
        var documentTop = $(document).scrollTop();
        var offset = $(window).height() * 3/4;
        
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }

    function menuAnimar() { 
        var documentTop = $(document).scrollTop();
        var offset = $(window).height () * 3/30;
        if (documentTop > offset) {
            $('#menu').addClass('menuAnimado');
            $('#btnTop').addClass('btnTop-animate');
        } else {
            $('#menu').removeClass('menuAnimado');
            $('#btnTop').removeClass('btnTop-animate')
        }
    }
    
    animeScroll();
    menuAnimar();
    
    $(document).scroll(debounce(function() {
        animeScroll();
        menuAnimar();
    }, 100))
}())

