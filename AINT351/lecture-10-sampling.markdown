# AINT351 - Sampling
> Date: 28-11-16

### Sample from an arbitrary distribution

how to get an exponential distribution?
- Probability of occurrences drops of exponentially as value of x increases
- if we generate the inverse we can use it to map CDF to uniform
- inverse from CDF unput into uniform makes it look like its sampled from exponential distribution
- need the inverse transformation

### Monte carlo methods

- approximate things from random numbers
- use only when can't think of anything else
- Why do we need to calculate mean over functions?
    - scaling value in Naive bayes
- To work out pie
    - Work out area of circle
    - uniformly distribut loads of points
    - work out whether if it is in the square or the circle
    - it will give you the ratio for pi

### Rejection sampling

- Suppose that we want to sample a random function
- Get a guassian distribution that encapsulates any of the points within the function
- generate samples using randn
- all of them could come from the function distribution that you want
- for x value, what is probability for your function and what is the probability of guassian
- set up threshold value from this
    - is an acceptance criteria
- get a sample, based on the probability of x over the guassian is greater than the threshold of that point then throw it away (reject it)
- If we keep it then it is in the distribution of the function that we want
- problem is that you're throwing lots of samples away

### Importance sampling

- Use all samples but weight them
- means you don't have to throw them away
- If you can't sample from distribution
    - there is one that you can use
- scale values from the one you can sample from by the one that you want
- this gives weights to the values to show how 'important' they are
- from those previous but those values are independent
