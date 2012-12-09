var $ken = $('.ken');
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') { 
        // s - hadoken
        if (e.keyCode == 83 
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
        // a - punch
        if (e.keyCode == 65 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('punch'); 
            setTimeout(function() { $ken.removeClass('punch'); }, 150); 
        }
        // e - kick
        if (e.keyCode == 69 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('kick');
            setTimeout(function() { $ken.removeClass('kick'); }, 500); 
        }
        // r - reverse kick
        if (e.keyCode == 82 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('reversekick');
            setTimeout(function() { $ken.removeClass('reversekick'); }, 500); 
        }
        // up - jump
        if (e.keyCode == 38 
            && !$ken.hasClass('jump') 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('jump');
            setTimeout(function() { $ken.addClass('down'); }, 500); 
            setTimeout(function() { $ken.removeClass('jump down'); }, 1000); 
        }
        // down - kneel
        if (e.keyCode == 40 
            && !$ken.hasClass('kneel') 
            && !$ken.hasClass('jump') 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken')
        ) { 
            $ken.addClass('kneel');
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
    }
    else { // keyup
        $ken.removeClass('walk kneel');
    }

    console.log(e.keyCode);
});