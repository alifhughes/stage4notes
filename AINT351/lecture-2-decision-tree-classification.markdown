# AINT351 - Decision Tree Classification
> Date: 03-10-16

# Decision Tree Classification

### What is a decision tree
- A set of ordered rules for classifyiing data
- Each node addresses an input variable
- Leaves assign labels to the data

### Types of Decision trees
- Can approximate functions with decision trees

- **Classification trees**
    - Have leaves with discrete classes
- **Regression Trees**
    - Have leaves with numerical values

### How are decision trees constructed
- The data set is split recusively into sub-sets based in a single input variable
- _Until.._
    - All sub-set has same class
    - **Splitting no longer improves prediction**
    - sub-sets are too small
- Top-down induction of decision trees
    - Greedy

### How are the sets split
- Identify candidate splits
- Apply _metric_ to the  resulting sub-sets
- Choose the split that produces the best sub-sets

### Identifying Candidate splits
- Each decision tree node descries
    - A rule for dividing a data set
- All rules have the same form, consiting of:
    - A variable to be considered
    - A threshold value to compare data points to
- Threshold values between the values found in the data set
    - Do not improve classification within the given data set
    - What about classification of new data points

### Split quality - purity metrics
- Quality in a desion tree is related to the purity of a given set, S
    - Entropy and Gini impurity measure diversity in a set of discrete data
    - Variance measures diversity in a set of continuous data
- The purity is measured in terms of the probability Pc, of each class, c, present in the given set
- Tree with lots of classes considered bad purity
- Minimal classes with lots of examples within is considered high purity

- prob of each class being in that set = Pc

### Variance Reduction
- For regression trees
- Data points do not have a discrete class but a continuous value
- Calculate the variance of the node before the split
- Compare with the sum of the variances in the new nodes
- class will be defined by a range of values
- calculate a metric for the variances of those values

### MATLAB classification tree functions
![matlab-classification-tree-functions](img/matlab-classification-tree-functions.png)\

### Evaluating a decision tree
- Error rate
    - The proportion of errors across all instances
- Resubstitution error
    - Error rate on the training data
    - Tends to be optimistic due to overfitting
- Test set error
    - The performance on a previously unseen set of test data
- Holdout
    - Reserving some data, often 20%, for testing
    - N-fold cross-validation
