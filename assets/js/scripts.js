// dl-menu options
$(function () {
    $('#dl-menu').dlmenu({
        animationClasses: {
            classin: 'dl-animate-in',
            classout: 'dl-animate-out'
        }
    });
});
// Need this to show animation when go back in browser
window.onunload = function () {};

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function () {
    $(".content").fitVids();
});

// All others
$(document).ready(function () {
    //preloader nanimation
    preloader();

    //tags page
    if(window.location.pathname.includes('tags')){
      var tagName = window.location.hash.substr(1);
      $("article[id=\'"+tagName+"\']").show().addClass('animated fadeIn');
    }

    $('.entry-meta .tag').click(function () {
        $(this).addClass('hovered animated pulse')
        $(this).parent().siblings().children('a').removeClass('hovered animated pulse');
        var tagName = $(this).find('span.term').text();
        console.log(tagName);
        $("article[id=\'"+tagName+"\']").show().addClass('animated fadeIn').siblings('article').hide();
    });

    //do not show javascript tag if js exists due to limitaion of space
    hideJavascriptTag();

    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
    $('.image-popup').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        // Class that is added to body when popup is open. 
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });

    //material button 
    $('.ripple-btn').rkmd_rippleEffect();
});

(function ($) {
    $.fn.rkmd_rippleEffect = function () {
        var btn, self, ripple, size, rippleX, rippleY, eWidth, eHeight;

        btn = $(this).not('[disabled], .disabled');

        btn.on('mousedown', function (e) {
            self = $(this);

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            if (self.find('.ripple').length === 0) {
                self.prepend('<span class="ripple"></span>');
            }
            ripple = self.find('.ripple');
            ripple.removeClass('animated');

            eWidth = self.outerWidth();
            eHeight = self.outerHeight();
            size = Math.max(eWidth, eHeight);
            ripple.css({
                'width': size,
                'height': size
            });

            rippleX = parseInt(e.pageX - self.offset().left) - (size / 2);
            rippleY = parseInt(e.pageY - self.offset().top) - (size / 2);

            ripple.css({
                'top': rippleY + 'px',
                'left': rippleX + 'px'
            }).addClass('animated');

            setTimeout(function () {
                ripple.remove();
            }, 800);

        });
    };
}(jQuery));

//loader
function preloader() {
    $('#preloader').hide();
    $('.loading').css('visibility', 'visible');
    //all pages tile fade in
    $('.post-title').addClass('animated fadeIn');
    
    //post page aniamtions
    $('#post-conent h1')..addClass('animated slideInUp');
    $('#post-conent .post-content').addClass('animated fadeIn delay-1s');
};

function hideJavascriptTag(){
    var links = $('.post-list-tags a');
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        var isSpanHasJs = element.firstElementChild.textContent.toLowerCase().includes('javascript')
        if(isSpanHasJs){
            $(element).hide();
        } 
    }
}
