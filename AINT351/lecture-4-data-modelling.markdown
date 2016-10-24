# AINT351 - Data Modelling
> Date: 17-10-16

# Data Modelling

### 2D Gaussian distribution

- 2D vectors for y and mu
- Get the determinate and inverse of covariance matrix

### 2D independent Gaussian distribution

- If independent variables
    - No covariance terms
- Only values in covariance matrix that relate


- If shape is elipical
    - it is starting to be correlated as it is forming a line

# Learning from data

**Maximum likelihood (MP) learning**
- No preconsception that we're going to fit are going to be
- Got load of data, and what to get a linear regression
- This finds paremeters and maximises finding of data

**Maximum a prosteriori (MAP) learning**
- Have an idea of the paremeters and their range
- Use bayes rule to find the best paremeters
- Implemented using bayesian learning scheme

**Bayesian learning**

### Joint probability of a dataset

- Multiply their probabilities together

### ML estimation of a gaussian

- We want to find the best likelhood of data, mu and sigma
    - These are ML values of dataset
- take the log, because it coverts product into a sum
- To find ML have to minimise log likelihood
    - Differenaite and find when it goes to 0

### Three limitations

**Outliers**
- Non regular or expected values
    - Loud bang in microphone when always quiet

**Multivariate model**
- Redictive

# Bayesian learning

**Frequentist approach**
- counting outcome when running large number of trials
- Counting flipping a call
- A limit of the observered frequency as number of observations goes to infitiy

**Bayesian**
- Rather than estimate prob. estimate the distribution to capture uncertaintiy
- To add a 'degree of confidence'
- Allows for input of prior belief
- Don't have to run as many expierements

- take prior estimate
- make another better estimate by combining data with estimate after process

