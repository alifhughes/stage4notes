# AINT351 - Distributions
> Date: 03-10-16

# More on Distributions

### Expected value

![expected-value-formulas](img/expected-value-formulas.png)\

- The mean of a random variable is commonly referred to as its **Expected Value**
    - i.e. the value you expect to obtain should you carry out some experiment whose outcomes are represented by the random variable
- The expected value of a random variable X is denoted by
    - E(X)
- Given that the random variable X is discrete (limited amount of possibilities _e.g._ apples in a basket) And has a probability distribution f(x)
    - The expected value of the radom variable is given by:

![expected-value-discrete-function](img/expected-value-discrete-function.png)\

_Example_
- Suppose X is a random variable with probability density function f(x) = 1/2x on (0,2)
- Probability of x = 1 is 0
    - P[x = 1] = 0
- We want to find if x is inbetween dx (inteval) = 1.1
    - P[1 < x < 1.1] = f(1)(0.1)
        - = 1/2(.1) = 0.05
**This is an approximation**
**To find the real value, we have to use integrals**

#### Side note: what is an integral?
- **Integrals help us combine numbers when multiplication can't**
- Integrals let us 'multiply' changing numbers
- When there are infinite changing numbers to multiply
    - Mainly used to return the area under a curve
- When they have the related values
    - On a graph for every x value, you need to find the y value to work out the area
- Integrating is opposite differentiation _visa versa_
- Integrating is quick way of adding
- Equivalent to sigma E



- Given that the random variable X is continuous and has probabilitiy distribution f(x)
    - The expected value of the random variable is given by:

![expected-value-continuous-function](img/expected-value-continuous-function.png)\




##### Expected value discrete example

- The probability distrubtion of X, the number of read cars john meets on his way to work each morning, is given in the following table:

![discrete-expected-example](img/discrete-expected-example.png)\

Find the number of red cars that john expects to run into each morning on his way to work

- The question is asking us to find the average number of red cars that john runs into on his way to work
- What makes this different from an ordinary mean question is that the odds (probability) of running into a given number of cars are not the same

- Since X is a discrete random variable, the expected value is given by:

![discrete-expected-example-solution](img/discrete-expected-example-solution.png)\

**What that is doing:**
- Summing the product of x and the probability outcome of that value

##### Expected value continuous example

- A certain software company uses a certain software to check for errors on any of the programs it builds and then discards the software if the errors found exceed a certain number.
- Given that the number of errors found is represented by a random variable X whose density function is given by:

![density-function-continuous-expected](img/density-function-continuous-expected.png)\

Find the avarage number of errors the company expects to find in a given program

**Solution:**

- The random variable X is given as a continuous random variable, thus its expected value can be found as follows:

![expected-continuous-example-solution](img/expected-continuous-example-solution.png)\



### Variance

- Calculate mean before calculating the variance

![variance-formulas](img/variance-formulas.png)\


### Covariance: joint prob

- The covariance measures the strength of the linear relationship between two variables
- This comes into practise when having two deminsional data that isn't independant

![covariance-formula](img/covariance-formula.png)\

- E = expectation

### Normal distributions
- Quite often continuous values will be characterised by a Normal (or Gaussian) distribution
- Sufficient statistics:
    - mean
    - standard deviation
- if you change the standard deviation you change the spread of the curve

![normal-distributions-formula](img/normal-distribution-formula.png)\



### Effect of standard deviation

![effect-of-standard-deviation](img/effect-of-standard-deviation.png)\


### Cumulative distribution function

- For a continuous random variable X
    - The cumulative distribution function CDF(x) represents the ara under the probability densitiy function P(x) to the left of X
- not looking at the point x, what is the likelihood of all that is happening at that point and at all points previous
- area from that point - previous

![cumulative-distribution-function](img/cumulative-distribution-function.png)\


### Exponential distribution
- when the probability is above 0
    - not guassian (can or is negative)

### Interpreting covariance
- If we calculate the covariance between two random variables
    - Will have two sets of results for everything, mean etc
- If cov(X,Y) is positive
    - Positiviely Correlated
- If cov(X,Y) is negative
    - Negatively correlated
- if cov(X,Y) is 0
    - Independant

##### To remember
- Mostly caring about the area under a curve

### to do
- look at all functions, try to find videos explaning them
    - go to the math place in library if can't understand
