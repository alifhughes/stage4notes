function acid_synth(){

        this.instrumentName = 'Acid Synth';
        this.machineName = 'acid_synth';
        this.instrumentID = null;
        this.context = null; //Context is passed in by app
        
        //this.controlLabels = ['Waveform', 'Tune', 'Cutoff', 'Resonance', 'Env.Mod', 'Decay', 'Accent'];
        //this.controlValues = [0,64,64,64,64,64,64];

        this.controls = [
                {label: 'Waveform', type: 'toggle', value: 0},
                {label: 'Tune', type: 'knob', value: 64},
                {label: 'Cutoff', type: 'knob', value: 64},
                {label: 'Resonance', type: 'knob', value: 64},
                {label: 'Env.Mod', type: 'knob', value: 64},
                {label: 'Decay', type: 'knob', value: 64},
                {label: 'Accent', type: 'knob', value: 64},
        ];

        this.viewData = [];

        this.gain = null;
        this.osc = null;
        this.playing = false;
        this.monophonic = true;

        this.waveform = 'sawtooth';
        this.detune = 0;
        this.volume = 0.4;
        this.volReleaseTime = 0.3;

        this.filterCount = 2;

        this.filterEnvMod = 2200;
        this.filterDecayTime = 0.18;
        this.minimumFilterDecayTime = 0.5;
        this.filterDecayAmount = 8000;
        this.filterAccent = 100;
        this.filterCutoffTempStore = null;
        this.filterQTempStore = null;
        this.minimumResonance = -3.4;

        //Set by init()
        //this.slideTime = 0.06 ;

        this.maxDecay = 10;

        this.previousSlide = false;

        this.mixerChannel = 1;

        this.clockPulse = null;

        this.knobs = [];
        this.knobWidth = 90;
        this.lastKnob = null;

        this.pointerDown = false;
        this.dragStart = 0;
        this.dragNew = 0;

        this.height = 180;
        this.verticalPos = 0; //Set by app.newInstrumentInstance

        this.accentEnv = false;


};

acid_synth.prototype.init = function(){

        this.context = app.context;

        this.clockPulse = app.stepSpeed / 1000 / 6;

        this.slideTime = this.clockPulse;

        //Volume gain node
        this.gainNode = this.context.createGain();      
        this.gainNode.gain.value = 0;

        //Gate Node
        this.gateNode = this.context.createGain();
        this.gateNode.gain.value = 0;

        //Create filters
        for(var i=1; i<=this.filterCount; i++){
                this['filter' + i] = this.context.createBiquadFilter();
                this['filter' + i].type = 'lowpass'; 
                this['filter' + i].frequency.value = 9000;
                this['filter' + i].Q.value = 0;
                //this['filter' + i].gain.value = 1;
        }

        this.hiPassVal = 300;

        this.hiPassFilter = this.context.createBiquadFilter();
        this.hiPassFilter.type = 'highpass';
        this.hiPassFilter.frequency.value = this.hiPassVal;
        this.hiPassFilter.Q.value = 0;

        this.hiPassFilter2 = this.context.createBiquadFilter();
        this.hiPassFilter2.type = 'highpass';
        this.hiPassFilter2.frequency.value = this.hiPassVal;
        this.hiPassFilter2.Q.value = 0;

        this.filterCutoffTempStore = this.filter1.frequency.value;

        //Create OSC - It will play permanently
        this.osc = this.context.createOscillator();
        this.osc.type = 'sawtooth';

        //LFO
        /*
        this.lfo = this.context.createOscillator();
        this.lfoGain = this.context.createGain();
        this.lfoGain.gain.value = -1500;
        this.lfo.frequency.value = 0.4; 
        this.lfo.start();

        this.lfo.connect(this.lfoGain);
        this.lfoGain.connect(this.filter1.frequency);
        this.lfoGain.connect(this.filter2.frequency);
        */

        this.initControlValues();
        this.osc.start(this.context.currentTime);
        this.connectNodes();


        //Temp
        var _this = this;
        $(document).on('click', '.js-toggle-hipass', function(){
                var instrumentID = $(this).data('instrument-id');
                if(instrumentID == _this.instrumentID){
                        if(_this.hiPassFilter.frequency.value > 0){
                                _this.hiPassFilter.frequency.value = 0;
                                _this.hiPassFilter2.frequency.value = 0;
                                $(this).removeClass('btn-transport-active');
                        } else {
                                _this.hiPassFilter.frequency.value = _this.hiPassVal;
                                _this.hiPassFilter.frequency.value = _this.hiPassVal;
                                $(this).addClass('btn-transport-active');
                        }
                }
        });
        
};

acid_synth.prototype.initControlValues = function(){
        for(var i=0; i<this.controls.length; i++){
                this.setControlValue(i, this.controls[i].value);
        }
}


acid_synth.prototype.setLastKnob = function(knob){
        this.lastKnob = knob.params.id;
        app.lastInstrument = this.instrumentID;
}


acid_synth.prototype.setControlValue = function(controlID, value){
        
        this.controls[controlID].value = value;
        console.log('Control init ' + controlID);

        switch(controlID){
                case 0:
                        //Set waveform
                        if(value > 0){
                                this.waveform = 'square';
                        } else {
                                this.waveform = 'sawtooth';
                        }


                        if(this.waveform == 'square'){
                                var real = new Float32Array(waveforms.square303.real);
                                var imag = new Float32Array(waveforms.square303.imag);
                                var wave = this.context.createPeriodicWave(real, imag);
                                this.osc.setPeriodicWave(wave);
                                this.volume = 0.6 ;
                        } else {
                                this.volume = 0.6;
                                this.osc.type = this.waveform;
                        }


                        break;
                case 1:
                        //Set tune
                        
                        //detune is in centre pos
                        if(value == 63 || value == 64){
                                value = 0;
                        } else if (value < 63){
                                //Lower pitch
                                value = -Math.abs(63 - value);
                        } else {
                                //Higher Pitch
                                value = value-64;
                        }

                        value = value / 63 * 100;
                        value = Math.floor(value * 12);

                        console.log(value);

                        //Detune osc if it exists (only exists when playing)
                        if(this.osc !== null){
                                this.osc.detune.value = value;
                        }

                        this.detune = value;

                        break;
                case 2:
                        //set cutoff

                        //Percentage
                        //value = (value / 127) * 700;
                        value = (value / 127) * 900;

                        //Percentage of filter max
                        value = 1.9*value;

                        //Filter can not be closed completely so add minimum
                        value += 200;

                        console.log('Filter: ' + value);

                        for(var i=1; i<=this.filterCount; i++){
                                
                                //var currentVal = this['filter' + i].frequency.value;
                                //this['filter' + i].frequency.cancelScheduledValues(this.context.currentTime);
                                //this['filter' + i].frequency.setValueAtTime(currentVal, this.context.currentTime+0.0001);
                                
                                //this['filter' + i].frequency.value = value;
                                
                                //this['filter' + i].frequency.cancelScheduledValues(this.context.currentTime);
                                //this['filter' + i].frequency.setValueAtTime(value, this.context.currentTime);

                        }
                        this.filterCutoffTempStore = value;

                        //Adjust resonance so its not too high when cutoff is low (Sounds distorted) Filter Max - current val is taken away from res
                        var resAdjust = (1530 - value) / 100;
                        var newRes = this.filterQTempStore - resAdjust;
                        if(newRes < this.minimumResonance){
                                newRes = this.minimumResonance;
                        }

                        this.filterQNewTempStore = newRes;
                        console.log('New Res: ' + newRes);
                        this.filter2.Q.value = newRes;

                        break;
                case 3: 
                        //set res
                        value = (value / 127) * 31.8 ;
                        value += this.minimumResonance;
                        

                        //Adjust value based on current cutoff
                        var resAdjust = (1530 - this.filterCutoffTempStore) / 100;
                        var newRes = value - resAdjust;

                        if(newRes < this.minimumResonance){
                                newRes = this.minimumResonance;
                        }

                        console.log('RES: ' + value);
                        console.log('NEW RES: ' + newRes);

                        this['filter2'].Q.value = newRes;
                        
                        this.filterQTempStore = value;
                        this.filterQNewTempStore = newRes;
                        //for(var i=1; i<=this.filterCount-1; i++){
                        //      this['filter' + i].Q.value = value;
                        //}
                        break;
                case 4:
                        //set env.mod percent
                        value = (value / 127) * 76 ;
                        value += 4;
                        this.filterEnvMod = value;
                        console.log('Env: ' + this.filterEnvMod);
                        break;
                case 5: 
                        //set decay
                        value = (value / 127) * 100;
                        
                        //Max decay
                        //value = (2.0 / 100) * value;
                        value = (1.5 / 100) * value;
                        //value = (1.0 / 100) * value;
                        
                        //Minimum decay
                        value += 0.14;

                        //value = 0.09;

                        this.filterDecayTime = value;
                        console.log('Decay: ' + value);
                        break;
                case 6:
                        //set accent
                        value = (value / 127) * 100;
                        this.filterAccent = value;
                        break;
        }       
}


acid_synth.prototype.changeMixerChannel = function(newMixerChannel){
        console.log('Changing mixer channel to ' + newMixerChannel);
        if(this.playing){
                this.gainNode.disconnect(mixer.channels[this.mixerChannel].input);
                this.mixerChannel = newMixerChannel;
                this.connectNodes();
        } else{
                this.mixerChannel = newMixerChannel;
        }
}

acid_synth.prototype.connectNodes = function(){

        this.osc.connect(this.hiPassFilter);
        this.hiPassFilter.connect(this.filter1);

        this.hiPassFilter.frequency.value = 50;
        
        //Connect filters
        for(var i=1; i<this.filterCount; i++){
                var nextFilter = i+1;
                this['filter' + i].connect(this['filter' + nextFilter]);
        }

        //this.filter1.connect(this.filter2);

        //this['filter' + this.filterCount].connect(this.gainNode);
        this['filter' + this.filterCount].connect(this.gainNode);

        this.gainNode.connect(this.gateNode);

        this.gateNode.connect(mixer.channels[this.mixerChannel].input);
};

acid_synth.prototype.playStep = function(stepData, startTime){

        var _this = this;

        //Set this on every step incase of tempo change
        this.clockPulse = app.stepSpeed / 1000 / 6;

        //If no note data - gate to 0, set prev slide to false
        if(stepData.val === null){
                //console.log('No note here.');
                
                if(_this.previousSlide){
                        //_this.gateNode.gain.setValueAtTime( 0, startTime );
                        gateClose(startTime);
                }
                this.previousSlide = false;

                return;
        } 

        function gateClose(time){

                //_this.gateNode.gain.cancelScheduledValues(time);
                _this.gateNode.gain.setValueAtTime( 0.5, time );
                //_this.gateNode.gain.setTargetAtTime( 0, time, 0.014 );
                _this.gateNode.gain.setTargetAtTime( 0, time, _this.clockPulse/2 );
                console.log(_this.clockPulse * 1);
        }

        function gateOpen(time){
                _this.gateNode.gain.setValueAtTime( 0, time );
                _this.gateNode.gain.linearRampToValueAtTime( 0.5, time + 0.002 );
        }

        //Volume Envelope
        function volumeEnv(){
                var attack = 0.001;
                var decay = 8.4;
                var gateTime = _this.clockPulse*3;
                var volume = _this.volume;

                if(stepData.accent){
                        volume +=  ( (_this.filterAccent/100) * 0.3 );
                }

                //Attack if previous note did not have slide activated
                if(!_this.previousSlide){
                        gateOpen(startTime);
                        _this.gainNode.gain.cancelScheduledValues(startTime);
                        _this.gainNode.gain.setValueAtTime( _this.gainNode.gain.value, startTime);
                        _this.gainNode.gain.linearRampToValueAtTime( 0, startTime + attack);
                        _this.gainNode.gain.linearRampToValueAtTime( volume, startTime + attack + attack);
                }

                //Decay
                if( (!_this.previousSlide && stepData.slide) || (!stepData.slide) ){
                        _this.gainNode.gain.exponentialRampToValueAtTime( 0.001, startTime + decay);
                }

                //Close gate at end of note if not slide
                if(!stepData.slide){
                        gateClose(startTime + gateTime);

                        //_this.gateNode.gain.setValueAtTime( 0.5, startTime + attack + attack + gateTime );
                        //_this.gateNode.gain.setTargetAtTime( 0, startTime + attack + attack + gateTime, 0.016 );

                } 
                
        }

        //Filter Envelope
        function filterEnv(){

                //If previous note had slide - filter envelope already started
                if(_this.previousSlide){
                        return;
                }

                var envMod = _this.filterEnvMod;
                //var cutoffStart = _this.filterCutoffTempStore + (envMod*150);
                var multiplier = ( (_this.filterCutoffTempStore / 200) + 3 ) * 10;
                var cutoffStart = _this.filterCutoffTempStore + (envMod*multiplier);
                var cutoffEnd = _this.filterCutoffTempStore;
                
                
                if(stepData.accent){ 

                        //console.log('ACCENT Amount: ' + _this.filterAccent);
                        
                        var amount = _this.filterAccent / 100;

                        cutoffStart = _this.filterCutoffTempStore + (amount*698) + (envMod*multiplier);
                        cutoffEnd += amount * 198;
                        var attack = (amount* 0.06);

                        //Minus env-mod from attack time
                        attack -= amount*((envMod / 80) * 0.06);
                        attack += 0.0001;


                        var decay = 0.15;
                        var length = attack + 0.0001;

                        //Silly workaround to disable cutoff until accent env has finished
                        /*
                        this.accentEnv = true;
                        setTimeout(function(){
                                this.accentEnv = false;
                        }, length + decay + 10); 
*/


                        //console.log('Attack: ' + attack);
                        //console.log('Decay: ' + decay);
                        //console.log('Q Temp' + _this.filterQTempStore);
                        
                        for(var i=1; i<=_this.filterCount; i++){
                                _this['filter' + i].frequency.cancelScheduledValues(startTime);
                                _this['filter' + i].frequency.setValueAtTime(cutoffEnd, startTime);
                                
                                //Short attack
                                _this['filter'+i].frequency.setTargetAtTime(cutoffStart, startTime, attack);

                                //Decay
                                _this['filter'+i].frequency.setTargetAtTime(cutoffEnd, startTime + length, decay);
                                //_this['filter'+i].frequency.setValueAtTime(cutoffEnd, startTime + length + decay + decay);

                        }

                        //Resonance boost
                        _this['filter2'].Q.setValueAtTime(_this.filterQNewTempStore + 1, startTime);
                        

                } else { 

                        for(var i=1; i<=_this.filterCount; i++){
                                _this['filter' + i].frequency.cancelScheduledValues(startTime);
                                _this['filter' + i].frequency.setValueAtTime(cutoffStart, startTime);
                                //_this['filter'+i].frequency.linearRampToValueAtTime(cutoffEnd, startTime + _this.filterDecayTime);
                                _this['filter'+i].frequency.exponentialRampToValueAtTime(cutoffEnd, startTime + _this.filterDecayTime);
                        }

                        //Reset Resonance
                        _this['filter2'].Q.setValueAtTime(_this.filterQNewTempStore, startTime);

                        //_this['filter2'].Q.cancelScheduledValues(startTime);
                        //_this['filter2'].Q.setValueAtTime(_this.filterQTempStore, startTime);
                        //_this['filter2'].Q.exponentialRampToValueAtTime(-3, startTime + _this.filterDecayTime + resDecay);

                }

        }

        //Set frequency
        function setFreq(){
                _this.osc.detune.value = _this.detune;

                //Check if octave up / down is set
                var note = stepData.val;
                if(stepData.octUp){
                        note += 12;
                } else if(stepData.octDown){
                        note -= 12;
                }

                var freq = midiFrequency.get(note);
                if(_this.previousSlide){
                        _this.osc.frequency.setValueAtTime( _this.osc.frequency.value, startTime );
                        _this.osc.frequency.linearRampToValueAtTime(freq, startTime + _this.slideTime);
                } else {
                        _this.osc.frequency.setValueAtTime(freq, startTime);
                }
        }

        this.osc.type = this.waveform;

        setFreq();
        volumeEnv();
        filterEnv();

        if(stepData.slide){
                this.previousSlide = true;
        } else {
                this.previousSlide = false;
        }

        
};



acid_synth.prototype.stopAll = function(){

        this.previousSlide = false;
        this.gainNode.gain.cancelScheduledValues(app.context.currentTime);
        this.gainNode.gain.setValueAtTime(0, app.context.currentTime);
        this.gateNode.gain.linearRampToValueAtTime(0, app.context.currentTime + 0.001);
        
        /*
        if(this.osc !== null){
                this.osc.stop();
                this.osc = null;
                console.log('Stopping acid_synth osc');
        }
        */

        this.playing = false;

}
