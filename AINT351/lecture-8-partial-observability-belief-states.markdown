# AINT351 - Partial Observability and belief states
> Date: 14-11-16

### Limitied sensors in a grid world

- The observeations are based on the value of the wall
    - What is the value to go through that wall

### Partial observability

- Commonly we cannot uniquely identify the state of the world
    - Limited sensors
    - Sensor noise
    - historyical events
- Need memory to tell states apart
- Replace states with observations

- Encode what walls are present
- Has everything but states to calculate
    - Replaces with observations and observation function to learn

### Belief state

- What state we believe we're in
- A normal probability distribution to try to decide where we are

**belief update**
- In a belief state b, we take an action, a, and make a new observeation o
- What is the resulting belief state, b'
