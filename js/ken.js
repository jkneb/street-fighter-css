var $ken = $('.ken');

var $kenPos, $guilePos, $fireballPos, 
    $guile = $('.guile');

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
                    return ($guilePos.left - $fireballPos.left <= 75 && $guilePos.left - $fireballPos.left >= -75) ? true : false;
                };

                var explodeIfColision = setInterval(function(){
                    
                    $fireballPos = $fireball.offset();
                    console.log('fireballInterval:',$guilePos.left - $fireballPos.left);

                    if (isFireballColision()) {
                        $fireball.addClass('explode').removeClass('moving').css('marginLeft','+=22px'); 
                        clearInterval(explodeIfColision);
                        soundManager.play('hit5');
                        setTimeout(function() { $fireball.remove(); }, 500); 
                        $guile.addClass('hit2');
                        setTimeout(function() { $guile.removeClass('hit2'); }, 500);
                    }

                }, 250);

                //var delayForExplode = $fireball.css('transition-duration').split('s')[0]*1000; 
                
                setTimeout(function() { $fireball.addClass('moving'); }, 20);
                
                setTimeout(function() { 
                    $fireball.remove(); 
                    clearInterval(explodeIfColision);
                }, 3020);

            }, (250));
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
        }

        // a - punch
        if (e.keyCode == 65 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki') 
        ) { 
            $ken.addClass('punch'); 
            soundManager.play('huh1');
            if (isColision()) { 
                soundManager.play('hit1');
                $guile.addClass('hit1');
                setTimeout(function() { $guile.removeClass('hit1'); }, 500);
            }
            setTimeout(function() { $ken.removeClass('punch'); }, 150); 
        }

        // e - kick
        if (e.keyCode == 90 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            $ken.addClass('kick');
            soundManager.play('huh3');
            if (isColision()) { 
                soundManager.play('hit1');
                $guile.addClass('hit2');
                setTimeout(function() { $guile.removeClass('hit2'); }, 500);
            }
            setTimeout(function() { $ken.removeClass('kick'); }, 500); 
        }

        // r - reverse kick
        if (e.keyCode == 69 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            $ken.addClass('reversekick');
            soundManager.play('huh2');
            if (isColision()) { 
                soundManager.play('hit1');
                $guile.addClass('hit2');
                setTimeout(function() { $guile.removeClass('hit2'); }, 500);
            }
            setTimeout(function() { $ken.removeClass('reversekick'); }, 500); 
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
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
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
