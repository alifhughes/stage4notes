# AINT308 - THE OWL robot
> Date: 30-01-17

### Speed control - pulse width modulation

- Turning on and off to control it
- Turn motor 100% on
    - Full power straight away
- mark:space ration is what this alters

### Control theory

- All use the error which is the difference between where it is to where you want it to be
- PID control:
- Sum all the following
- Proportional
    - scale it

### Proportional control

- Measure error
- Apply again constant
    - Actuate servos - move camera to target
    - Measure positional error to target - calc. e(t)Kp
    - Actuate servos to new position

- we need to plot a graph to check how good the system is against proportional control
