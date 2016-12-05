# AINT351 - Linear regression revision
> Date: 28-11-16

### tips

- explain what trying to do
- done in stages

### Least squares fitting

- We want to fit a straight line to data measurements
- Equation for a straight line in a single dimension is:
    - yi = mxi + c
- Sum error over all points
- Want to find best fit line but best fit is defined as minimal errors

**how to**
- data point has x and y values
- say what prediction is from data point
- calculate distance between one point to the line value at the associated x value and square it
- we want it from lots of points
- so sum the errors of the errors from actual y values and predicted
- can say how good the fit is by looking at e
- if e is 0 its very good fit
- if it is big then it is bad

- then we can find the best fit
- start to look at gradient
- find the minimum 
- differentiate it and find when it goes to 0
    - diff with respect to m and c
- looking at the gradient and following it to find the _local minimum_
- move m and move c to see if you've reached it
    - moved it down the hill
    - update the weights
- **Look at finding the minimum of functions using gradient**


### Multidimensional

- can find everything when represented by vectors and matrices
- can look into it

### k-means clustering

- unsupervised learning
- trying to find similar things to itself
- finding means of data by randomly sampling
- look at data and interoperate data by looking at the clusters and finding the boundaries of them

- K is the number of clusters
    - Often set by hand
- randomly assign the centroids of k clusters
- loop until convergence doing the following:
    - For each point, put the point into the cluster whose centroid is the closest
    - get the mean of the clusters
    - make that the cluster centroid value

### simple classification

- k-means uses distance functions to find which cluster it is classified as
- can use threshold

**simple 1-d classification problem**
- Consider likelihood
- if it has a probability from coming from one set than another then it is in that
    - compare it using a threshold
    - threshold moves

### Naive bayes

- assumes independent features of data
- that x and y are independent
- if they aren't then you have to find covariance matrix
