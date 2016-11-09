# AINT351 - Continuous domains
> Date: 07-11-16

### Discretisation

- Changing continuous variables to discrete
- Generalisation by:
- **Hand:**
    - Arbitrary
- **Automated:**
    - Unsupervised learning
    - Clustering Criteria not necessarily conductive to learning

### Function approximation

- Approximates a function from a subset of inputs and outputs
- Supervised learning
- Combined with RL
- Doesn't have transition function

### Value prediction with function approximation

- value is now a function in parameterised function form
- Instead of trying to represent all as weights and states
- Show as parameters to the function
- Implies generalisations from states to parameters
- Changing a parameter changes the value of many states

### Backups

- Used to train them
- One step in temporal difference learning
    - From current to next state
- Use it in the learning algorithm
- Each backup can be interpreted as an example of desired input-output behaviour of the estimated function

### Using neural networks for the value function

- Q value f multiple state action combinations
- Update function based on experience
    - Error: Q(s, a) -Q'(s, a)

### Suitable Function approximation methods

- Most classifiers assume a static training set
    - Multiple passes over the training set is common
- In RL, Learning must be online
- Way of bringing in experience, use it, and not retain
- Value function changes as you go along as to improve
    - Makes it difficult for continuous learning
- Approximations must be able handle this

### Evaluating Function approximations

- Many approximators minimises mean squared error (MSE)
- We using all the algorithms that have static assumptions underneath
    - They work but we can do better

### State space coding

- Assume state space that is continuous and two-dimensional
- One kind of feature could be a circle in this state space
- Coarse coding
    - Few 1s showing where you are with a lot of 0s
- Binary input vector
