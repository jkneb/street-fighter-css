var $ken = $('.ken'),
    $guile = $('.guile'),
    $kenPos, $guilePos, $fireballPos;

// isColision loop
// ----------------------------------- \
setInterval(function(){
    $kenPos = $ken.offset();
    //console.log('$ken     :',$kenPos);
    $guilePos = $guile.offset();
    //console.log('$guile:',$guilePos);
    //console.log('interval:',$guilePos.left - $kenPos.left);
}, 250);

var isColision = function(){ 
    return ($guilePos.left - $kenPos.left <= 75 && $guilePos.left - $kenPos.left >= -75) ? true : false;
};


// moves
// ----------------------------------- \
var punch = function(){
    $ken.addClass('punch'); 
    soundManager.play('huh1');
    if (isColision()) { 
        soundManager.play('hit1');
        $guile.addClass('hit1');
        setTimeout(function() { $guile.removeClass('hit1'); }, 500);
    }
    setTimeout(function() { $ken.removeClass('punch'); }, 150);
};
var kick = function(){
    $ken.addClass('kick');
    soundManager.play('huh3');
    if (isColision()) { 
        soundManager.play('hit1');
        $guile.addClass('hit2');
        setTimeout(function() { $guile.removeClass('hit2'); }, 500);
    }
    setTimeout(function() { $ken.removeClass('kick'); }, 500);
};
var rkick = function(){
    $ken.addClass('reversekick');
    soundManager.play('huh2');
    if (isColision()) { 
        soundManager.play('hit1');
        $guile.addClass('hit2');
        setTimeout(function() { $guile.removeClass('hit2'); }, 500);
    }
    setTimeout(function() { $ken.removeClass('reversekick'); }, 500); 
};
var tatsumaki = function(){
    soundManager.play('tatsumaki');
    $ken.addClass('tatsumaki');
    if (isColision()) { 
        console.log('hit tatsumaki')
        soundManager.play('hit2',{
            multiShotEvents: true, 
            onfinish:function() {
                soundManager.play('hit2').play('hit2');
            }
        });
    }
    setTimeout(function() { $ken.addClass('down'); }, 1500); 
    setTimeout(function() { $ken.removeClass('tatsumaki down'); }, 2000);
};
var hadoken = function(){
    $ken.addClass('hadoken'); 
    soundManager.play('hado', {
        multiShotEvents: true, 
        onfinish:function() {
            soundManager.play('ken');
        }
    });
    setTimeout(function() { $ken.removeClass('hadoken'); }, 500); 
    setTimeout(function() {
        var $fireball = $('<div/>', { class:'fireball' });
        $fireball.appendTo($ken);

        var isFireballColision = function(){ 
            return ($guilePos.left - $fireballPos.left <= 75 && $guilePos.left - $fireballPos.left >= -75);
        };

        var explodeIfColision = setInterval(function(){

            $fireballPos = $fireball.offset();
            //console.log('fireballInterval:',$fireballPos.left);

            if (isFireballColision()) {
                $fireball.addClass('explode').removeClass('moving').css('marginLeft','+=22px');
                clearInterval(explodeIfColision);
                soundManager.play('hit5');
                setTimeout(function() { $fireball.remove(); }, 500); 
                $guile.addClass('hit2');
                setTimeout(function() { $guile.removeClass('hit2'); }, 500);
            }

        }, 50);

        setTimeout(function() { $fireball.addClass('moving'); }, 20);

        setTimeout(function() { 
            $fireball.remove(); 
            clearInterval(explodeIfColision);
        }, 3020);

    }, (250));
};
var shoryuken = function(){
    soundManager.play('shoryu', {
        multiShotEvents: true, 
        onfinish:function() {
            soundManager.play('ken');
        }
    });
    if (isColision()) { 
        console.log('hit shoryuken')
        soundManager.play('hit2',{
            multiShotEvents: true, 
            onfinish:function() {
                soundManager.play('hit2');
            }
        });
    }
    $ken.addClass('shoryuken');
    setTimeout(function() { $ken.addClass('down'); }, 500); 
    setTimeout(function() { $ken.removeClass('shoryuken down'); }, 1000);
};
var jump = function(){
    $ken.addClass('jump');
    setTimeout(function() { $ken.addClass('down'); }, 500); 
    setTimeout(function() { $ken.removeClass('jump down'); }, 1000); 
};
var kneel = function(){
    $ken.addClass('kneel');
};
var walkLeft = function(){
    $ken.addClass('walk').css({ marginLeft:'-=10px' });
};
var walkRight = function(){
    $ken.addClass('walk').css({ marginLeft:'+=10px' });
};


// on click events
// -----------------------------------
$('#a').click(punch);
$('#z').click(kick);
$('#e').click(rkick);
$('#q').click(tatsumaki);
$('#s').click(hadoken);
$('#d').click(shoryuken);
$('#up').click(jump);
$('#down').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { kneel(); }
    else { $ken.removeClass('kneel'); }
});
$('#left').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkLeft(); }
    else { $ken.removeClass('walk'); }
});
$('#right').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkRight(); }
    else { $ken.removeClass('walk'); }
});


// on keydown events
// ----------------------------------- 
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') { 
        
        // s - hadoken
        if (e.keyCode == 83 
            && !$ken.hasClass('tatsumaki') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('reversekick')
        ) { 
            hadoken();
        }

        // d - shoryuken
        if (e.keyCode == 68 
            && !$ken.hasClass('tatsumaki')
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('reversekick')
            && !$ken.hasClass('jump')
        ) { 
            shoryuken();
        }

        // q - tatsumaki senpuu kyaku
        if (e.keyCode == 81 
            && !$ken.hasClass('tatsumaki') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('reversekick')
            && !$ken.hasClass('jump')
        ) { 
            tatsumaki();
        }

        // a - punch
        if (e.keyCode == 65 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki') 
        ) { 
            punch(); 
        }

        // e - kick
        if (e.keyCode == 90 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            kick();
        }

        // r - reverse kick
        if (e.keyCode == 69 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            rkick();
        }

        // up - jump
        if (e.keyCode == 38 
            && !$ken.hasClass('jump') 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            jump();
        }

        // down - kneel
        if (e.keyCode == 40 
            && !$ken.hasClass('kneel') 
            && !$ken.hasClass('jump') 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            kneel();
        }
    
    
        // ← flip 
        // if (e.keyCode == 37) $ken.addClass('flip');
        // → unflip 
        // if (e.keyCode == 39) $ken.removeClass('flip');

        // ←← →→ walking
        if (e.keyCode == 37) { walkLeft(); }
        if (e.keyCode == 39) { walkRight(); }
    }
    else { // keyup
        $ken.removeClass('walk kneel');
    }

    console.log(e.keyCode);

    //return false;
});
