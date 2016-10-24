# AINT351 - Introduction to the course
> Date: 26-09-16


## Module aims
+ Introduce the area of ML
+ covering:
    - Unsupervise, supervised, reinforment, bayesian

## Assesements
+ 70% coursework

## Book recommendation
+ Machine learning: a Probabilistic perspective

## Linear regression
+ optimum fitting line
    - data makes a line
    - What is the best line?

# Machine learning

### Three types of learning
- Supervised learning
    - already have target values of what it should be mapping to

- Unsupervised
    - the machine should build a representation of x that can be used for decision making
    - latent varaibles as inputs
    - only got the data
    - looking for structure in the data to find patterns

- Reinforcement
    - generate an action
    - all we get is how good the action is as a feedback
    - work out based on reward, what actions you took to get the reward are best

### Goals of supervised lerning
- Want to be able to classfy new output correctly from new input
- classifying into discret states

-_Regression_
    - got an input and mapping it to a value
    - predict new continous values

- Prediction - Got some data set, can we describe it as a probability
- Classification
- Outlier detection
- Data compression

## Probability

### types of data
- discrete data - only certain values
- continuouse data - any value

### probabilty function
- a probability function maps possible values of a variable to respective probabilities
    - always value between 0 - 1.0

#### Displaying probab.
- Venn diagrams

### The addition law of probab.
- If two events A and B are mutually exclusive then
- the prob of A OR B is the sum of the both

- If two events A and B and they intersect then
- sum of A + B - (the intersection of the two events)

### Probability Distrubutions

#### Bernoulli distrubition
- This is the binonmial distribution for n-p

#### Discrete distribution
- limited values
- dice {1,2,3,4,5,6}

- _Cumulative probability_
    - x probability is the sum of itself and all previous

#### Binomial Distribution
- whats the probability of getting exactly 3 heads in 5 coin flips
- one case to get 3 heads is: HHHTT
    - whats the probability of this
    - (0.5)^3 x (0.5)^2

- Care about the order

#### Uniform distribution
- if we have a uniform distr. between 0 and 1, 
    - what is the probability that x falls between 0 and 0.5?

#### Continuous data distribution
- if we f

### Representing data

#### Continuous values
- Scatter plot
- Histogram
    - No correlation
    - Low positive correlation
    - High positive correlation
    - perfect positive correlation, on a line


## Data sets and diversities in data sets

#### What is a decisions tree?
- A set of ordered rules for classifying data
- Each node addresses an input variable
- Leaves assign labels to the data

##### Advantages of Decision trees
- simple and intuitive
- good computational performance

##### Disadvantages of decision trees
- Greedy algorithims can get stuck in local optimality
- The simple decision structure does not represent all probels effectively
    - XOR, Parity

#### Ficher's Iris data set
- From the UCI 

#### How decision trees are constructed
- The data set is split recursively into sub-sets based in a single input variable
- Until
    - All sub-sets has same class
    - Splitting no longer improves predicition
    - Sub-sets are too small
- Top-down induction of decision trees
    - greedy because only concerns that step to define outcome

#### How are the sets split
- Identify Candidate splits
    - Loop through all possibilities
- Apply *metric* to the resulting sub-sets
- Choose the split that produces the best sub-sets

#### Information gain
- Information gain is the change in entropy
- Entopy is based on the probability estimates
    - for this the algorithms uses frequencies
- The expected information gain is the difference in the sum of entropy acoss the sub sets

#### Gini Impurity
- Uses the square of the probabilities of each class
- The Gini impuirity reflects the sum of the probability of each target class (squared) within a subset

#### Variance Reduction
- For regression trees
- Calculate the Variance of the node before the split
- Compaired with the sum of variances in the new nodes
