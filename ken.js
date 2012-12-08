var $ken = $('.ken');
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') { 
        // h
        if (e.keyCode == 72 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('reversekick')
        ) { 
            $ken.addClass('hadoken'); 
            setTimeout(function() { $ken.removeClass('hadoken'); }, (500)); 
            setTimeout(function() { 
                $('<div class="fireball"/>').appendTo($ken); 
                var delayForExplode = $('.fireball').css('transition-duration').split('s')[0]*1000; 
                setTimeout(function() { 
                    $('.fireball').addClass('moving'); 
                    setTimeout(function() { $('.fireball').addClass('explode'); }, delayForExplode); 
                }, 20);
                    
            }, (250));
        }
    
        // p
        if (e.keyCode == 80 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('punch'); 
            setTimeout(function() { $ken.removeClass('punch'); }, 150); 
        }
    
        // k
        if (e.keyCode == 75 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('kick');
            setTimeout(function() { $ken.removeClass('kick'); }, 500); 
        }
        // j
        if (e.keyCode == 74 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('reversekick');
            setTimeout(function() { $ken.removeClass('reversekick'); }, 500); 
        }
        // space
        if (e.keyCode == 32 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('jump');
            setTimeout(function() { $ken.removeClass('jump'); }, 500); 
        }
    }
    
    // ← flip 
    if (e.keyCode == 37) $ken.addClass('flip');
    // → unflip 
    if (e.keyCode == 39) $ken.removeClass('flip');
    // ←← →→ walking
    if (e.type == 'keydown' && (e.keyCode == 37 || e.keyCode == 39)) { 
        if ($ken.hasClass('flip')) 
            $ken.addClass('walk').css({ marginLeft:'-=10px' });
        else 
            $ken.addClass('walk').css({ marginLeft:'+=10px' });
    }
    else $ken.removeClass('walk');

    console.log(e.keyCode);
});