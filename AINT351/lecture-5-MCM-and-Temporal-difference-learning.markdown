# AINT351 - Monte-Carlo Methods & Temporal Difference Learning
> Date: 24-10-16

### Model-Free algorithms

- Estimate value functions directly
- Do not represent the transition function

### Monte-Carlo methods

- We don't have the function so we will draw out lots of samples of random observations
- We'll take the average of that and try to build up the function from it
- Taking experimental steps

- An episode is one parse through the environment
    - You learn something from it

### MC policy evaluation algorithm

- Only consider first visit
- set up list of states which keeps track of list of rewards when going to that state
- for each state in the episode
    - add the reward to the discounted return list
- The average of those reward probabilities is the value

### Estimating action values

- Without a model of the environment, T, we cannot chose optimal actions
- Have to estimate them instead
- Problem: may not go some of the places in deterministic system
    - Can guarantee that all first step of each episode gives all state-action pairs a non-zero probability
    - ignore policy on first step

### Temporal difference learning

- Like MC
    - Learns from experience without a model
- Like dynamic programming
    - Estimate value estimates based on other existing value estimates

- Wait one step to update the value function
    - Because you know the state, action and reward
    - Can use that observation to update the value function
- Use the actual experience to update the value function

### TD Prediction

- Use a running average
- Wait for one step to update value function
- Every step through the world is evidence that can be used in the value function

### Advantages of TD prediction

- Do not need a model of the environment
- The bootstrap
    - Learn a guess from a guess
- They work in an on-line fashion
    - No needed to wait for terminal state
    - Update every time step
- Do not have to ignore complete episodes with off-policy actions
    - More scope for exploring
