import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

function Piano() {
    const [synth, setSynth] = useState(null);

    useEffect(() => {
        const synth = new Tone.Synth().toDestination();
        setSynth(synth);
        // Clean up function to release resources
        return () => synth.dispose();
    }, []);

    const playNote = (note) => {
        if (synth) {
            synth.triggerAttackRelease(note, '8n');
        }
    };

    return (
        <div>
            <h2>Piano</h2>
            <div className="piano">
                <div className="white-key" onMouseDown={() => playNote('C4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    C
                </div>
                <div className="black-key" onMouseDown={() => playNote('C#4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    C#
                </div>
                <div className="white-key" onMouseDown={() => playNote('D4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    D
                </div>
                <div className="black-key" onMouseDown={() => playNote('D#4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    D#
                </div>
                <div className="white-key" onMouseDown={() => playNote('E4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    E
                </div>
                <div className="white-key" onMouseDown={() => playNote('F4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    F
                </div>
                <div className="black-key" onMouseDown={() => playNote('F#4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    F#
                </div>
                <div className="white-key" onMouseDown={() => playNote('G4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    G
                </div>
                <div className="black-key" onMouseDown={() => playNote('G#4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    G#
                </div>
                <div className="white-key" onMouseDown={() => playNote('A4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    A
                </div>
                <div className="black-key" onMouseDown={() => playNote('A#4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    A#
                </div>
                <div className="white-key" onMouseDown={() => playNote('B4')} onMouseUp={() => synth && synth.triggerRelease()}>
                    B
                </div>
                <div className="white-key" onMouseDown={() => playNote('C5')} onMouseUp={() => synth && synth.triggerRelease()}>
                    C
                </div>
                <div className="black-key" onMouseDown={() => playNote('C#5')} onMouseUp={() => synth && synth.triggerRelease()}>
                    C#
                </div>
                <div className="white-key" onMouseDown={() => playNote('D5')} onMouseUp={() => synth && synth.triggerRelease()}>
                    D
                </div>
                <div className="black-key" onMouseDown={() => playNote('D#5')} onMouseUp={() => synth && synth.triggerRelease()}>
                    D#
                </div>
            </div>

        </div>
    );
}

export default Piano;
