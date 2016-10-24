# AINT351 - Cross Validation
> Date: 10-10-16

### Decision tree learning

- go through all and get the split
- remember the max split
- do the max split
- do until termination point

### Improvement

- If entropy after is positive then the split is better

### Evaluating a Decision tree

- Error rate
    - The proportion of errors across all instances
    - Out of N samples from real world, how does many does it get wrong
        - Probability of error
    - not good in practise as you get more to correct but will want to use them to improve the tree again
- Resubstitution error
    - Error rate on the training data
    - Tends to eb optimistic due to overfitting
- Test set error
    - The performance on a previously unseen set of test data
- Holdout
    - Reserving some data, often 20 % for testing
    - iterative

### N-fold cross validation

- divide your data set into N number of sets (folds) of equal size
- Leave each sub-set out during training and test on that sub-set
- Calculate mean performance across N folds

### The bootstrap

- Randomly pick out rows from exisiting set to create new set
- Train on random and test on original
- With replacement means duplication is permitted

##### Bootstrap properties

- Very pessimistic due to a high probability of single instances not making it to the training set
- My training data will only include about 2 thirds of total data set
- Combine with resubstitution error for a realistic error estimate (error rate on training data)
    - combining optimistic with pessimistic

### Pruning

- Data is too big and filled with crap
- Deciding on a stopping criteria
    - Stopping criteria that are too specific produce small, under-fitted decision trees
    - There probably things you could have picked up later that would have been useful later
    Loose stopping criteria produce large, over-fitted trees
- Pruning overcomes this problem
    - Use loose stopping criteria or grow a full tree
    - Remove sub-branches that are not contributing significantly to prediction accuracy
    - It can also be desirable to trade accuracy for simplicity
