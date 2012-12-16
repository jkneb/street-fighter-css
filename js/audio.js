
soundManager.setup({
    url:'audio/soundmanager2.swf',
    debugMode:false
});

soundManager.onready(function() {
    
    var backgroundMusic = soundManager.createSound({
        id:'music',
        url:'audio/musics/Guile.mp3'
    });
    backgroundMusic.play({ volume:70 });
    $('.pause').on('click', function(){
        var $this = $(this);
        if ($this.hasClass('play')) {
            $this.removeClass('play');
            backgroundMusic.resume();
        } else {
            $this.addClass('play');
            backgroundMusic.pause();
        }
    });

    // hado/shoryu ken
    // ------------------------------- /
    soundManager.createSound({
        id:'hado',
        url:'audio/hado-shoryu_ken/hado.wav'
    });
    soundManager.createSound({
        id:'shoryu',
        url:'audio/hado-shoryu_ken/shoryu.wav'
    });
    soundManager.createSound({
        id:'ken',
        url:'audio/hado-shoryu_ken/ken.wav'
    });

    // tatsumaki senpuu kyaku
    // ------------------------------- /
    soundManager.createSound({
        id:'tatsumaki',
        url:'audio/tatsumaki-senpuu-kyaku.wav'
    });

    // you win/loose
    // ------------------------------- /
    soundManager.createSound({
        id:'you',
        url:'audio/commentator/you.wav'
    });
    soundManager.createSound({
        id:'win',
        url:'audio/commentator/win.wav'
    });
    soundManager.createSound({
        id:'loose',
        url:'audio/commentator/loose.wav'
    });
    

    // huhs
    // ------------------------------- /
    soundManager.createSound({
        id:'huh1',
        url:'audio/huhs/huh1.wav'
    });
    soundManager.createSound({
        id:'huh2',
        url:'audio/huhs/huh2.wav'
    });
    soundManager.createSound({
        id:'huh3',
        url:'audio/huhs/huh3.wav'
    });

    // hits
    // ------------------------------- /
    soundManager.createSound({
        id:'hit1',
        url:'audio/hits/1.wav'
    });
    soundManager.createSound({
        id:'hit2',
        url:'audio/hits/2.wav'
    });
    soundManager.createSound({
        id:'hit3',
        url:'audio/hits/3.wav'
    });
    soundManager.createSound({
        id:'hit4',
        url:'audio/hits/4.wav'
    });
    soundManager.createSound({
        id:'hit5',
        url:'audio/hits/5.wav'
    });
    soundManager.createSound({
        id:'hit6',
        url:'audio/hits/6.wav'
    });
    soundManager.createSound({
        id:'hit7',
        url:'audio/hits/7.wav'
    });
    soundManager.createSound({
        id:'punch',
        url:'audio/hits/kung_fu_punch-Mike_Koenig-2097967259.mp3'
    });

    // swooshes
    // ------------------------------- /
    soundManager.createSound({
        id:'swooch1',
        url:'audio/swooshes/Swoosh 1-SoundBible.com-231145780.mp3'
    });
    soundManager.createSound({
        id:'swooch2',
        url:'audio/swooshes/Swoosh 3-SoundBible.com-1573211927.mp3'
    });
    soundManager.createSound({
        id:'swooch3',
        url:'audio/swooshes/Swooshing-SoundBible.com-1214884243.mp3'
    });
    

});

var youWin = function(){
    soundManager.play('you', {
        multiShotEvents: true, 
        onfinish:function() {
            soundManager.play('win');
        }
    });
};
var youLoose = function(){
    soundManager.play('you', {
        multiShotEvents: true, 
        onfinish:function() {
            soundManager.play('loose');
        }
    });
};
