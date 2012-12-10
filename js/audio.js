
soundManager.setup({
    url:'audio/soundmanager2.swf'
});

soundManager.onready(function() {
    
    var backgorundMusic = soundManager.createSound({
        id:'music',
        url:'audio/music.mp3'
    });
    //backgorundMusic.play({ volume:50 });
    

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

    // punchs
    // ------------------------------- /
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
