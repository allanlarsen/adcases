/**
 * Created by aduser on 13/11/14.
 */

/*========================================
 =            SLIDE FUNCTIONS           =
 ========================================*/

var slider = $('.slider'),
    wrapper = $('#wrapper'),
    animating = false,
    current = 0,
    lengthDiv = slider.length,
    delay = 1500;

slider.on('click', function(e){
    var anchor = $(this);
    if(!animating){
        animating = true;
        current = anchor.parent().index();
        wrapper.removeClass().addClass('slide'+current);
        setTimeout(function(){
            animating = false;
        }, delay);
        e.preventDefault();
    }
});

$(document).keydown(function(e){var key = e.keyCode;if(key == 38 || key == 40)e.preventDefault();});
$(document).keyup(function(e){
    if(!animating){
        var key = e.keyCode;
        if(key == 38 && current > 0){
            $(slider[current - 1]).trigger('click');
        }else if(key == 40 && current < lengthDiv - 1){
            $(slider[current + 1]).trigger('click');
        }
    }
});
$(document).mousewheel(function(e, deltaY){
    if(!animating){
        if(deltaY > 0 && current > 0){
            $(slider[current - 1]).trigger('click');
        }else if(deltaY < 0 && current < lengthDiv - 1){
            $(slider[current + 1]).trigger('click');
        }
    }
    return false;
});
