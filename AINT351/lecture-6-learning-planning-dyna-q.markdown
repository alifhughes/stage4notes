# AINT351 - Learning, Planning & Dyna-Q
> Date: 31-10-16

### Monte-Carlo methods

- Estimate, T, based on experience
- Obtain a set of _episodes_ by following policy
- Use average discounted rewards as an estimate of V(pie)

### Eligibility Traces

- A record of the most recently experienced states, actions and rewards
    - A sequence of tuples < s, a, r> in chronological order
    - Updated on each step if the algorithm
- Our basic mechanism for temporal credit assignment
- When you take one step
    - Calculated the update state
    - Update the previous states

#### Forward view

- Decide how to update the value of each state by looking at future rewards and states
- Stand at the back and look forward
    - You can see that the later value makes your current state more valuable
- _theoretical_

#### Backward view

- Mechanistic
    - Implementable
- Traces correspond closely to short-term memory
    - (A record of where i've just been in this episode)
    - Our value function and transition function are long-term memory

#### Mixed updates

- Update many steps in one go

### Models

- Anything that can be used to predict results of actions
    - Simulated experience
- Distribution models
    - Provide probability distributions over successor states
- Sample models
    - Returns a single successor state drawn from the appropriate probability distribution
- Estimate of transition function

### Planning

- Using a model to improve your policy
    - Your value function

### Integrating learning, planning and acting

- take actions
- Update value functions
- Update model
- Plan (simulate experience)
    - Update value functions

### Dyna-Q algorithm

- Does model learning and q-learning at same time
- start in state
- Execute and action
- Get the reward
- do q-learning
- do model
- what if I was in certain state
- and took certain state
- what would the model say I ended up
- estimate how good it is
- and update your value function from it
- Spreads information about rewards throughout your table

