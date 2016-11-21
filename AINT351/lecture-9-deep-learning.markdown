# AINT351 - Deep learning intro
> Date: 21-11-16

### Multilayer network

**Peceptron**
- Simple out put

**Multilayer**
- Not any advantage if hidden layer is linear
    - Still restricted in doing linear transformation
- Non linearity as outputs
- Allow for non-linear regression and classification

### What do they do

**Image classification**
- Has hierarchies
- Simple to complex recognition

**hidden layer**
- responds to strong weights from layer before
- May be detecting lines
- Starts to build together more complex features

### Deep networks

- _Deep learning_ involves using a neural network with several layers of nodes between input and output
- A series of layers between the input and output do feature detection and processing in a series of stages
- Model of human visual system
- Use recent algorithms for training many later networks

_Two main types of deep networks:_
- **Convolutional neural networks**
    - Employ alternating layers of convolutional networks
    - Output uses a traditional MLP
    - pre-processing of deep network with a classic MLP on top
- **Deep belief network:**
    - Consist of perceptron stacked Boltzmann machines
    - Use classification output layer
    - Starts of trying loads of crazy inputs until you hope it finds some sort of local minimum to settle on

### Training

_auto encoder_
- Feeds the input and the output together
- To keep on learning
- Classification is after
- Layers map back to each other
- Uses back propagation algorithm

- Use auto encoder to split up the hidden layers
- train one hidden layer with the output feed back into the previous layer
- Keep supervised training so it can map it back to itself
- Keep moving that process throughout the layer
- Can learn lots of features on a massive data set
- Becomes easy to use those classifiers

**Advantages**
- Don't need labelled data to get a good classifier

### Convolutional networks

- sharing the weights across different locations in space or time
- Rather than training separately trained detectors
- All detectors are part of the same network that get moved around
- Alot of data with very few weights
- Makes it easier to train

- **Equivariant activities:**
    - Replicated features do _not_ make the neural activities invariant to translation.
    - The activities are equivariant

- trying to develop features throughout the convolution layers
- pass them into a supervised system to train on a small set of data to get a classifier
