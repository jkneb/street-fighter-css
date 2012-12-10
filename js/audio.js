
soundManager.setup({
    url:'audio/soundmanager2.swf'
});

soundManager.onready(function() {
    
    
    var backgorundMusic = soundManager.createSound({
        id:'music',
        url:'audio/music.mp3'
    });
    backgorundMusic.play({ volume:50 });
    

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
        url:'audio/you_win-loose/you.wav'
    });
    soundManager.createSound({
        id:'win',
        url:'audio/you_win-loose/win.wav'
    });
    soundManager.createSound({
        id:'loose',
        url:'audio/you_win-loose/loose.wav'
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
