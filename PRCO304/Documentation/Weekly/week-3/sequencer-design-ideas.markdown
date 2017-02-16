## Sequencer design ideas

**Calculation for timings to trigger a step**

- 60 bpm
- 60 / 60 = 1 beat every second
- 16 measures long each with 4 beats in it
- each step is 1 quarter of answer of bpm / 60
- 1 / 4 = 0.25
- every 0.25 is a quarter note/one step
- BPM / 60 = every beat per second
- Everytime the timer reaches one of these multiplications from 0
    - It plays the beat

**Need to loop it back around to the start**

- (bpm / 60) * 4 = limit to the four measures
- when it reaches this amount of time, set it to 0 again

**How to display the times**

- Time line at the top like logic
- Flashing lights as it passes the step
- Each time it hits the quarter note it flashes that current beat's light

**What should they be contained in**

- Table
    - One row is the whole instrument
    - Can have columns at the start for parameters
        - Popout for equaliser and such
    - Each column is the beat/step
    - Each button/link is a step


### Pseudo-code

- work out the quarter note values
    - bpm / 60 = beat per second
    - beat per second / 4 for quarter notes

- start timer
    - That loops for 4 * beat per second (for 16 measures)
    - restarts loop at the end

- play note
    - the note to be played
    - the sound file
