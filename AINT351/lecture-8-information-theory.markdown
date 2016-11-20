# AINT351 - Information Theory
> Date: 14-11-16

### Information theory

- Getting infromation from data
- **Entropy**
- **Condition entropy**
    - Entropy of the joint value minus the entropy of Y
- **Mutual infromation**

### Multidimensional Gaussian classifier

- Given data point, what class does it belong to
- Naive bayes assumes the data is independent

### Discriminant classifiers

- After modelling the data, they try to make a prediction based on the class
- Bayes decision rule minimises average probability of error
- Can train generative models by directly estimating parameters

- Discriminate focus on getting the bounds of the data, rather than modelling it first
    - Look at the data and put a boundary there
- They only model the line of the boundary
- There for it is defining a line
- if something is above or below then it is in the different classes respectively

### Cost functions

- Need to 

### The perceptron

- Model of neural network 
- Learning means changing the weights between the neurons
- Single layer model
- Only used for linear classification
- will never converge if data is not linear

#### Threshold logic unit

- input feature gets multiplied by a weight
- and sent to a summing unit
- if they're greater than the sum threshold value
- then the output will be set to one
    - otherwise 0


#### Learning rule

- Create a perceptron node with n inputs
- Iteratively apply a pattern from the training set
- Calculate output
- Apply the perceptron rule to update the weights
- Each iteration through the training set is an epoch
- Continue training until total training set error ceases to improve

- Change the weights everytime it makes a mistake

### Comments on the perceptrong algorithm

- If the data is linearly separable then:
    - A linear decision boundary will correctly classifies all points
    - Algorithm will stop where are no incorrectly classified training data points
    - The Algorithm therefore guaranteed to converge to a solution
- Two forms of update are generally adopted
- Batch update:
    - All the data is presented for each iteration 
    - Weights only updated after all data seen
- Sequential update:
    - Data is presented one sample at a time
    - Weights updated after each sample
