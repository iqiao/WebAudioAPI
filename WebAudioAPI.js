window.AudioContext = window.webkitAudioContext = (function () {
    function AudioContext() {
        ///<field name="destination" type="AudioDestinationNode"></field>
        ///<field name="sampleRate" type="Number"></field>
        ///<field name="currentTime" type="Number"></field>
        ///<field name="listener" type="AudioListener"></field>
    }

    AudioContext.prototype = {
        createBuffer: function () {
            ///<signature>
            ///<param name="numberOfChannels" type="Number"></param>
            ///<param name="length" type="Number"></param>
            ///<param name="sampleRate" type="Number"></param>
            ///<returns type="AudioBuffer"></returns>
            ///</signature>
        },
        decodeAudioData: function () {
            ///<signature>
            ///<param name="audioData" type="ArrayBuffer"></param>
            ///<param name="successCallback" type="Function"></param>
            ///<param name="errorCallback" type="Function" optional="true"></param>
            ///</signature>
        },
        createBufferSource: function () {
            ///<returns type="AudioBufferSourceNode"></returns>
        },
        createMediaElementSource: function () {
            ///<signature>
            ///<param name="mediaElement" type="HTMLMediaElement"></param>
            ///<returns type="MediaElementAudioSourceNode"></returns>
            ///</signature>
        },
        createMediaStreamSource: function () {
            ///<signature>
            ///<param name="mediaStream" type="MediaStream"></param>
            ///<returns type="MediaStreamAudioSourceNode"></returns>
            ///</signature>
        },
        createMediaStreamDestination: function () {
            ///<returns type="MediaStreamAudioDestinationNode"></returns>
        },
        createScriptProcessor: function () {
            ///<signature>
            ///<param name="bufferSize" type="Number" optional="true"></param>
            ///<param name="numberOfInputChannels" type="Number" optional="true"></param>
            ///<param name="numberOfOutputChannels" type="Number" optional="true"></param>
            ///<returns type="ScriptProcessorNode"></returns>
            ///</signature>
        },
        createAnalyser: function () {
            ///<returns type="AnalyserNode"></returns>
        },
        createGain: function () {
            ///<returns type="GainNode"></returns>
        },
        createDelay: function () {
            ///<signature>
            ///<param name="maxDelayTime" type="Number" optional="true"></param>
            ///<returns type="DelayNode"></returns>
            ///</signature>
        },
        createBiquadFilter: function () {
            ///<returns type="BiquadFilterNode"></returns>
        },
        createWaveShaper: function () {
            ///<returns type="WaveShaperNode"></returns>
        },
        createPanner: function () {
            ///<returns type="PannerNode"></returns>
        },
        createConvolver: function () {
            ///<returns type="ConvolverNode"></returns>
        },
        createChannelSplitter: function () {
            ///<signature>
            ///<param name="numberOfOutputs" type="Number" optional="true"></param>
            ///<returns type="ChannelSplitterNode"></returns>
            ///</signature>
        },
        createChannelMerger: function () {
            ///<signature>
            ///<param name="numberOfInputs" type="Number" optional="true"></param>
            ///<returns type="ChannelMergerNode"></returns>
            ///</signature>
        },
        createDynamicsCompressor: function () {
            ///<returns type="DynamicsCompressorNode"></returns>
        },
        createOscillator: function () {
            ///<returns type="OscillatorNode"></returns>
        },
        createPeriodicWave: function () {
            ///<signature>
            ///<param name="real" type="Float32Array"></param>
            ///<param name="imag" type="Float32Array"></param>
            ///<returns type="PeriodicWave"></returns>
            ///</signature>
        }
    };

    function AudioNode() {
        ///<field name="context" type="AudioContext"></field>
        ///<field name="numberOfInputs" type="Number"></field>
        ///<field name="numberOfOutputs" type="Number"></field>
        ///<field name="channelCount" type="Number"></field>
        ///<field name="channelCountMode" type="String"></field>
        ///<field name="channelInterpretation" type="String"></field>
    }

    AudioNode.prototype = {
        connect: function () {
            ///<signature>
            ///<param name="destination" type="AudioNode"></param>
            ///<param name="output" type="Number" optional="true"></param>
            ///<param name="input" type="Number" optional="true"></param>
            ///</signature>

            ///<signature>
            ///<param name="destination" type="AudioParam"></param>
            ///<param name="output" type="Number" optional="true"></param>
            ///</signature>
        },
        disconnect: function () {
            ///<signature>
            ///<param name="output" type="Number" optional="true"></param>
            ///</signature>
        }
    };

    function AudioDestinationNode() {
        ///<field name="maxChannelCount" type="Number"></field>
        AudioNode.call(this);
    }

    AudioDestinationNode.prototype = AudioNode.prototype;

    function AudioParam() {
        ///<field name="value" type="Number"></field>
        ///<field name="defaultValue" type="Number"></field>
    }

    AudioParam.prototype = {
        setValueAtTime: function () {
            ///<signature>
            ///<param name="value" type="Number"></param>
            ///<param name="startTime" type="Number"></param>
            ///</signature>
        },
        linearRampToValueAtTime: function () {
            ///<signature>
            ///<param name="value" type="Number"></param>
            ///<param name="endTime" type="Number"></param>
            ///</signature>
        },
        exponentialRampToValueAtTime: function () {
            ///<signature>
            ///<param name="value" type="Number"></param>
            ///<param name="endTime" type="Number"></param>
            ///</signature>
        },
        setTargetAtTime: function () {
            ///<signature>
            ///<param name="target" type="Number"></param>
            ///<param name="startTime" type="Number"></param>
            ///<param name="timeConstant" type="Number"></param>
            ///</signature>
        },
        setValueCurveAtTime: function () {
            ///<signature>
            ///<param name="values" type="Float32Array"></param>
            ///<param name="startTime" type="Number"></param>
            ///<param name="duration" type="Number"></param>
            ///</signature>
        },
        cancelScheduledValues: function () {
            ///<signature>
            ///<param name="startTime" type="Number"></param>
            ///</signature>
        }
    };

    function GainNode() {
        ///<field name="gain" type="AudioParam"></field>
        AudioNode.call(this);
    }

    GainNode.prototype = AudioNode.prototype;

    function DelayNode() {
        ///<field name="delayTime" type="AudioParam"></field>
        AudioNode.call(this);
    }

    DelayNode.prototype = AudioNode.prototype;

    function AudioBuffer() {
        ///<field name="sampleRate" type="Number"></field>
        ///<field name="length" type="Number"></field>
        ///<field name="duration" type="Number"></field>
        ///<field name="numberOfChannels" type="Number"></field>
    }

    AudioBuffer.prototype = {
        getChannelData: function () {
            ///<signature>
            ///<param name="channel" type="Number"></param>
            ///<returns type="Float32Array"></returns>
            ///</signature>
        }
    };

    function AudioBufferSourceNode() {
        ///<field name="buffer" type="AudioBuffer"></field>
        ///<field name="playbackRate" type="AudioParam"></field>
        ///<field name="loop" type="Boolean"></field>
        ///<field name="loopStart" type="Number"></field>
        ///<field name="loopEnd" type="Number"></field>
        ///<field name="onended" type="Function"></field>
        AudioNode.call(this);
    }

    AudioBufferSourceNode.prototype = AudioNode.prototype;
    AudioBufferSourceNode.prototype.start = function () {
        ///<signature>
        ///<param name="when" type="Number" optional="true"></param>
        ///<param name="offset" type="Number" optional="true"></param>
        ///<param name="duration" type="Number" optional="true"></param>
        ///</signature>
    };
    AudioBufferSourceNode.prototype.stop = function () {
        ///<signature>
        ///<param name="when" type="Number" optional="true"></param>
        ///</signature>
    };

    function MediaElementAudioSourceNode() {
        AudioNode.call(this);
    }

    MediaElementAudioSourceNode.prototype = AudioNode.prototype;

    function ScriptProcessorNode() {
        ///<field name="onaudioprocess" type="Function"></field>
        ///<field name="bufferSize" type="Number"></field>
        AudioNode.call(this);
    }

    ScriptProcessorNode.prototype = AudioNode.prototype;

    function PannerNode() {
        ///<field name="panningModel" type="String"></field>
        ///<field name="distanceModel" type="String"></field>
        ///<field name="refDistance" type="Number"></field>
        ///<field name="maxDistance" type="Number"></field>
        ///<field name="rolloffFactor" type="Number"></field>
        ///<field name="coneInnerAngle" type="Number"></field>
        ///<field name="coneOuterAngle" type="Number"></field>
        ///<field name="coneOuterGain" type="Number"></field>
        AudioNode.call(this);
    }

    PannerNode.prototype = AudioNode.prototype;
    PannerNode.prototype.setPosition = function () {
        ///<signature>
        ///<param name="x" type="Number"></param>
        ///<param name="y" type="Number"></param>
        ///<param name="z" type="Number"></param>
        ///</signature>
    };
    PannerNode.prototype.setOrientation = function () {
        ///<signature>
        ///<param name="x" type="Number"></param>
        ///<param name="y" type="Number"></param>
        ///<param name="z" type="Number"></param>
        ///</signature>
    };
    PannerNode.prototype.setVelocity = function () {
        ///<signature>
        ///<param name="x" type="Number"></param>
        ///<param name="y" type="Number"></param>
        ///<param name="z" type="Number"></param>
        ///</signature>
    };

    function AudioListener() {
        ///<field name="dopplerFactor" type="Number"></field>
        ///<field name="speedOfSound" type="Number"></field>
    }

    AudioListener.prototype = {
        setPosition: function () {
            ///<signature>
            ///<param name="x" type="Number"></param>
            ///<param name="y" type="Number"></param>
            ///<param name="z" type="Number"></param>
            ///</signature>
        },
        setOrientation: function () {
            ///<signature>
            ///<param name="x" type="Number"></param>
            ///<param name="y" type="Number"></param>
            ///<param name="z" type="Number"></param>
            ///<param name="xUp" type="Number"></param>
            ///<param name="yUp" type="Number"></param>
            ///<param name="zUp" type="Number"></param>
            ///</signature>
        },
        setVelocity: function () {
            ///<signature>
            ///<param name="x" type="Number"></param>
            ///<param name="y" type="Number"></param>
            ///<param name="z" type="Number"></param>
            ///</signature>
        }
    };

    function ConvolverNode() {
        ///<field name="buffer" type="AudioBuffer"></field>
        ///<field name="normalize" type="Boolean"></field>
        AudioNode.call(this);
    }

    ConvolverNode.prototype = AudioNode.prototype;

    function AnalyserNode() {
        ///<field name="fftSize" type="Number"></field>
        ///<field name="frequencyBinCount" type="Number"></field>
        ///<field name="minDecibels" type="Number"></field>
        ///<field name="maxDecibels" type="Number"></field>
        ///<field name="smoothingTimeConstant" type="Number"></field>
        AudioNode.call(this);
    }

    AnalyserNode.prototype = AudioNode.prototype;
    AnalyserNode.prototype.getFloatFrequencyData = function () {
        ///<signature>
        ///<param name="array" type="Float32Array"></param>
        ///</signature>
    };
    AnalyserNode.prototype.getByteFrequencyData = function () {
        ///<signature>
        ///<param name="array" type="Uint8Array"></param>
        ///</signature>
    };
    AnalyserNode.prototype.getByteTimeDomainData = function () {
        ///<signature>
        ///<param name="array" type="Uint8Array"></param>
        ///</signature>
    };

    function ChannelSplitterNode() {
        AudioNode.call(this);
    }

    ChannelSplitterNode.prototype = AudioNode.prototype;

    function ChannelMergerNode() {
        AudioNode.call(this);
    }

    ChannelMergerNode.prototype = AudioNode.prototype;

    function DynamicsCompressorNode() {
        ///<field name="threshold" type="AudioParam"></field>
        ///<field name="knee" type="AudioParam"></field>
        ///<field name="ratio" type="AudioParam"></field>
        ///<field name="reduction" type="AudioParam"></field>
        ///<field name="attack" type="AudioParam"></field>
        ///<field name="release" type="AudioParam"></field>
        AudioNode.call(this);
    }

    DynamicsCompressorNode.prototype = AudioNode.prototype;

    function BiquadFilterNode() {
        ///<field name="type" type="String"></field>
        ///<field name="frequency" type="AudioParam"></field>
        ///<field name="detune" type="AudioParam"></field>
        ///<field name="Q" type="AudioParam"></field>
        ///<field name="gain" type="AudioParam"></field>
        AudioNode.call(this);
    }

    BiquadFilterNode.prototype = AudioNode.prototype;
    BiquadFilterNode.prototype.getFrequencyResponse = function () {
        ///<signature>
        ///<param name="frequencyHz" type="Float32Array"></param>
        ///<param name="magResponse" type="Float32Array"></param>
        ///<param name="phaseResponse" type="Float32Array"></param>
        ///</signature>
    }

    function WaveShaperNode() {
        ///<field name="curve" type="Float32Array"></field>
        ///<field name="oversample" type="String"></field>
        AudioNode.call(this);
    }

    WaveShaperNode.prototype = AudioNode.prototype;

    function OscillatorNode() {
        ///<field name="type" type="String"></field>
        ///<field name="frequency" type="AudioParam"></field>
        ///<field name="detune" type="AudioParam"></field>
        ///<field name="onended" type="Function"></field>
        AudioNode.call(this);
    }

    OscillatorNode.prototype = AudioNode.prototype;
    OscillatorNode.prototype.start = function () {
        ///<signature>
        ///<param name="when" type="Number"></param>
        ///</signature>
    };
    OscillatorNode.prototype.stop = function () {
        ///<signature>
        ///<param name="when" type="Number"></param>
        ///</signature>
    };
    OscillatorNode.prototype.setPeriodicWave = function () {
        ///<signature>
        ///<param name="periodicWave" type="PeriodicWave"></param>
        ///</signature>
    };

    function PeriodicWave() {

    }

    function MediaStreamAudioSourceNode() {
        AudioNode.call(this);
    }

    MediaStreamAudioSourceNode.prototype = AudioNode.prototype;

    function MediaStreamAudioDestinationNode() {
        ///<field name="stream" type="MediaStream"></field>
        AudioNode.call(this);
    }

    MediaStreamAudioDestinationNode.prototype = AudioNode.prototype;

    return AudioContext;
})();