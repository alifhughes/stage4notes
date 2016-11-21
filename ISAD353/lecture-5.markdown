# ISAD351 - Neural networks
> Date: 21-11-16

### Artificial neural networks

- Initially to study the brain
- Data mining used to refer to the applications of AI techniques to business problems
- Input neurons receive inputs from the sensors outside the brain
- Output neurons send their signals outside the brain

### Neural nets in data mining

- Neural nets provide a good method of fitting a model to a training set of data
    - Using neural learning
- Used for directed and undirected mining
- More poorly understood than other techniques

### Network architecture

- Neurons (nodes
    - Input nodes: for each input variable
    - output nodes: one for each output variable
    - hidden nodes
- Connections (with weights) passing output from one node to another

![neural-net-credit-default](img/neural-net-credit-default.png)\

### Multi-layer perceptron

- Every node in one layer is connected to every node in the next
- Feed foward
    - Information only passed forward
- Single output node

### The activation function

- Each node takes in all the weights from the inputs and performs some sort of function on them and passes it onto the output
    - transfer function
- Don't want values that travel along the network to get very large
    - Keep them within a certain range
- Sigmoidal transfer function is used to keep numbers within a limit
    - dapens them down

### Training neural nets

- Back propagation
- Requires a training set of records for which the target value is known
- Define initial network
- Repeat - a _large_ number of times
    { feed data record from training set
      error = result produced by network - known target value (how much the network has got it wrong)
      Use the error to modify the weights _slightly_
    }
- **Supervised learning**
- Hope that over time the value of the weights will converge
    - That will be the final network

- Learning parameters need to be set with care
    - fast learning may be subject to instability
- Training needs stopping criteria
- Usually a single hidden layer will suffice
- Usually emply fewer nodes in hidden layer than input layer
- Tools may find the best number of nodes for the hidden layer
    - Overfitting

### Dealing with overfitting

- Using the training data and evaulating the performance
- repeat
- Pick when it is best or when it doesn't improve

### Optimisation and hill climbing

- a _hill climbing_ attempt to find the global maxima (i.e., to find _a_) can easily get stuck at the local maxima
    - because at each step it only makes a local analysis
- Wants to find the global maxima
- If it thinks it is at the maxima (local)
    - it will get stuck and not explore further to find the global maxima
- **disadvantage** of neural net as it may never find the best

### Properties of neural nets

- Data sets need to provide good coverage
    - And a lot of it
    - WhichboldText may not be representative
- May benefit from reduction in the number of input variables: preliminary/statistical analysis: more input variables
    - Demind a larger training set in order to have good coverage & require greater training times
    - Increase chances of finding sub-optimal solutions
- Does not produce insights
    - Black box
    - Can't look inside the network
- Missing input values must be estimated
- Categoricals must be converted to numeric without introducing spurious ordering e.g. by flattening
inputs should be normalised (to say -1, 1)
    - if we use a sigmoidal transfer function in the input neurons this would have this effect
- With a sigmoidal transfer function in the output node, the output will be normalised too
