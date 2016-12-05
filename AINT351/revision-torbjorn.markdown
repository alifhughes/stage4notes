#AINT351 - Revision
> Date: 05-12-16

### Decision trees

- what is a decision tree
- difference between regression and decision
- advantages
    - over neural net (difficult to interprete)
- Limitations
- over fitting/underfitting
- describe algo
- purity metrics
    - what is entropy
    - alternatives
    - give us a numerical value that represents the purity of a data set

### Cross validation

- optimising
- repeat testing
- n-fold validation
- k-fold validation
    - balanced test sets
- pruning
    - Run until our improvement didn't increase and therefore highly likely that it is over fitted
    - decide on stopping criteria
    - use validation to validate removed branches

### Reinformcement learning

**Conceptual understanding of the definition**

- Polices
    - Exploiting means is get the most out of it
    - dont explore as much - need to introduce random values into it
    - decay exploration rate but the rate of decay is hard to predict unless you know the problem
    - hard in practice
- value function
- monte carlo
- marko

**model free**
- temporial difference
- TD prediction
    - The lower the value 
    - slower you learn but can remember more and will mean it is more accurate
- Q learning

**model based**
- when trying to estimate a solution
- for each state counting the proprtion of times you ended up there
    - repeated will give acurate model
- use it to provide simulated expierence
- make it distrubted accross value function
    - speeds up learning

**planning**
process of improving the q function
simulate expierence to update the value function

is this problem reinformcent, patrial observation, marko, monte carlo?
    - depends on what information is available to you

Partially observable
- fully observable if it is all infront of your eyes

belief state
- current belief state effects probabilities of where we are
- current probability represents STM
    - close relationship with probability and belief state

**recursive neural networks for PMDPs**
- representing an event that happens a long time ago
- error produces gradient which goes down over time when reintroduced to system
- until there is not enough there to update the waites
