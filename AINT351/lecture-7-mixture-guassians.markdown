# AINT351 - Mixture of Guassians
> Date: 7-11-16

### Mixture model iterative approach

- Given clusters determine which points belong to them
- Take a guess each of the mean probabilistic approach
- given assignments, update the cluster parameters
- Repeat until convergence is achieved

#### Classify

- Get the probability that which belong to what
- then if probability of one is higher than the other, then it is in that class
- Use them to re-estimate the mean and std

### Pattern classification

- Pattern classifiers partition the input space
- May have multiple input data dimensions
- May have multiple output classes
- Type of decision boundary depends on the classifier
- Variety of ways to determine the boundaries
- Pattern classifiers often trained using supervised learning
- Trying to reproduce desired output from inputs
- Can use threshold to see if it is in or out of a class
    - Consider likelihood functions to find the threshold
- If we have the classes
    - Can compute the mean and variance of the classes
    - Since we know class membership, parameter estimation is trivial

### Receiver operating characteristic (ROC)

- Tries to separate where the threshold is to the detection system
- Given multiple thresholds, which is better
- Moving thresholds along, can work out what the amount of correct identification and false identifications
    - Can plot on this on a graph
- The closer the line is to the top left hand corner the better the detector is
    - Making the correlation between independent data

### Multidimensional Naive Bayes Gaussian classifier

- Extend the 1D guassian
- Using bayes rule the probability data point xi came from class c
- Choose most probable class given observation
- Estimation of full high dimensionality covariance matrix can be a problem
    - Why?
- May not see the covariance across all data sets
- Solution:
    - Make an assumption of independence between the features
    - Assume conditional independence given y

#### Naive bayes classifiers

- Naive bayes is an independent feature model
- Not necessarily bayesian
- Simple supervised learning method
- Note that there are better methods
- Can improve the basic model by incorporating a Prior on parameters


- variance but no covariance, things across leading diagonal but all other is 0

