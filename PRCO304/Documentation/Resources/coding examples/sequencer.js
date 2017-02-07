var globals = (function(){
    var pm = {};
    pm.colSelected = 0;
    pm.clockTimer = null;
    pm.interval = 250;
    pm.numColumns = 16;
    pm.volume = 60;
    return pm;
})();

function loadSoundBank(soundBankName){
    for(var i = 1; i <= globals.numColumns; i++){
        var sound = soundManager.getSoundById('sound'+i);
        if(sound != null){
            sound.destruct();
        }
        var aSoundObject = soundManager.createSound({
            autoLoad: true,
            stream: false,
            id: 'sound'+i,
            url:'sounds/'+soundBankName+''+i+'.mp3',
        }).load();
    }
}

function stopTimer(){
    if (typeof globals.clockTimer != "undefined" && globals.clockTimer != null){
        clearTimeout(globals.clockTimer);
    }
}

$(document).ready(function(){
        $("td").click(function(){
            $(this).toggleClass('play');
        });
        
        $('#reset').click(function(){
            $("td").removeClass("play");
        });
        
        $('#soundBank').change(function(){
            var optionSelectedValue = $('#soundBank option:selected').val();
            stopTimer();
            loadSoundBank(optionSelectedValue);
            run();
        });
});

function run(){
        var curr = globals.colSelected + 1;
        var prev = curr - 1;
        if(prev <= 0){
            prev = globals.numColumns;
        }
        $('tr td:nth-child('+curr+')').addClass("selected");
        var trs = document.getElementsByTagName("tr");
        var init = new Date().getTime();
        var ids = [];
        for(var i = 0; i < trs.length; i++){
            if(trs[i].getElementsByTagName("td")[curr-1].className.match(/(^| )play( |$)/)){
                ids.push(trs[i].id);
            }
        }
        
        for(i in ids){
            soundManager.play(ids[i], {volume: globals.volume});
        }

        var offset = new Date().getTime() - init;
        $('tr td:nth-child('+prev+')').removeClass("selected");
        globals.colSelected = curr % globals.numColumns;
        globals.clockTimer = setTimeout(run, globals.interval - offset);
}

soundManager.url ='swf/';
soundManager.onready(function() {
    if (soundManager.supported()) {
        $('#soundBank').removeAttr('disabled');
        loadSoundBank('orchestra');
        run();
    } else {
        alert('Failed to load audio components.');
    }
});
