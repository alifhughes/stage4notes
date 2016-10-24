# AINT351 - Machine learning basic concepts
> Date: 27-09-16

# Machine Learning basic concepts

_Machine Learning is getting computers to program themselves._
_If programming is automation, then machine learning is automating the process of automation._

_Writing software is the bottleneck, we don't have enough good developers._
_Let the data do the workin instead of people._
_Machine learning is the way to make programming scalable._

- **Traditional Programming**
    - Data and program is run on the computer to produce the output
- **Machine Learning**
    - Data and output are run the computer to create a program.
    - This program can be used in traditional programming.

_Machine learning is like farming. Seeds are the algorithms, nutrients are the data, the gardener is you and plants are the programmer._

![tradition-vs-machine-learning](img/traditional-vs-machine.png)\

### Applications of Machine Learning

- **Web Search**
    - Ranking page based on what you're most likely to click on
- **Computational biology**
    - rational design drugs in the computer based on past experiments
- **Finance**
    - Decide who to send what credit card offers to who
    - Evaluation of risk on credit offers
- **E-commerce**
    - Prediciting customer churn
- **Robotics**
    - How to handle uncertainty in new environments.
    - Autonomous
    - Self-driving car

### Key Elements of Machine Learning

Every machine learnng algorithm has three components:
- **Representation**
    - How to represent knowledge
    - _e.g._
        - Decision trees
        - Sets of rules
        - Instances
        - Graphical models
        - Neural networks
        - Support vector machines
        - Model ensembles
- **Evaluation**
    - The way to evaluate candidate programs (hypotheses)
    - _e.g._
        - accuracy
        - Prediction and recall
        - Squared error
        - Likelihood
        - Posterior probab.
        - Cost
        - Margin
        - Entropy k-L Divergence
- **Optimisation**
    - The way candidate programs are generated
        - aka the search process
    - _e.g._
        - Combinatorial optimisation
        - Convex optimisation
        - Constrained optimisation

All machine learning algorithms are combinations of these three components.
A framework for understanding all algorithms.

### Types of Learning

There are four types of machine learning:
- **Supervised learning** _aka inductive learning_
    - Training data includes desired outputs
    - _e.g._
        - This is spam, this is not
    - learning is supervised
- **Unsupervised learning**
    - Training data does not include desired outputs
    - _e.g._
        - Clustering
    - It is hard to tell what is good learning and what is not.
- **Semi-supervised learning**
    - Training data includes a few desired outputs.
- **Reinforcement learning**
    - Rewards from a sequence of actions.
    - AI types like it
        - It is the most ambitious type of learning

Supervised learning is the most mature, the most studied and the type of learning used the most by machine learning algorithms.
Learning with supervision is much easier than learning without supervision.

Inductive learning _(Supervised learning)_ is where we are given examples of a function in the form of data (x) and the output of the function (f(x)).
The goal of inductive learning is to learn the function for new data (x)

- **Classification**
    - When the function being learned is discrete
- **Regression**
    - When the function being learned is continuous
- **Probability Estimation**
    - When the output of the function is a probability

### Machine Learning in Practice

Machine learning algorithms are only a very small party of using machine learning in practice as a data analyst or data scientist.
In practice, the process often looks like:
1. Start loop
    1. **Understand the domain, prior knowledge and goals**
        - Talk to domain experts
        - Often the goals are very unclear
        - You often have more things to try then you can possibly implement
    2. **Data integration, selection, cleaning and pre-processing**
        - This is often the most time consuming part
        - It is important to have high quality data.
        - The more data you have, the more it sucks because the data is dirty
            - Garbage in, garbage out
    3. **Learning models**
        - The fun part
        - This part is very mature
        - The tools are general
    4. **Interpreting results**
        - Sometimes it does not matter how the model works as long as it delivers results
        - Other domains require that the model is understandable
        - You will be challenged by human experts
    5. **Consolidating and deploying discovered knowledge**
        - The majority of projects that are successful in the lab are not used in practice
        - It is very hard to get something used
2. End loop

It is not a one-shot process, it is a cycle. You need to run the loop until you get a result that you can use in practice.
Also, the data can change, requiring a new loop.

## Inductive learning (Supervised learning)

### What is Inductive learning

From the perspective of inductive learning, we are given input samples (x) and output samples (f(x)) and the problem is to estimate the function (f).
**Specifically, the problem is to generalise from the samples and the mapping to be useful to estimate the output of new samples in the future.**

In practice it is almost always too hard to estimate the function, so we are looking for very good approximations of the function.
_Examples:_
- **Credit risk assessment**
- **Disease diagnosis**
- **Face recognition**
- **Automatic steering**

### When should you use Inductive learning?

There are problems where inductive learning is not a good idea. It is important when to use and when not to use supervised machine learning.

_Examples of good problems to solve with inductive learning_
- **Problems where there is no human expert.**
    - If people do not know the answer they cannot write a program to solve it.
- **Humans can perform the task but no one can describe how to do it**
    - There are problems where humans can do things that computer cannot do or do well
        -  _e.g._ riding a bike or driving a car
- **Problems where the dirsered function changes frequently**
    - Humans could describe it and they could write a program to do it, but the problem changes too often
    - It is not cost effective
    - _e.g._ Stock market

- **Problems where each user needs a custom function**
    - It is not cost effective to write a custom program for each user
    - _e.g._ Recommendations of movies or books on Netflix or Amazon

### The Essence of Inductive learning

We can write a program that works perfectly for the data that we have. This function well be maximally overfit.
But we have no idea how well it will work on new data, it will likely dovery badly because we may never see the same examples again.

The data is not enough. You can predict anything you like.
There is an underlying problem and we are interested in an accurate approximation of the function.
There is a double exponential number of possible classifiers in the number of input states.
Finding a good approximate for the function is very difficult.

There are classes of hypotheses that we can try. That is the form that the solution may take or the representation.
We cannot know which is most suitable for our problem before hand.
We have to use experimentation to discover what works on the problem.

Two perspectives on inductive learning:
- **Learning is the removal of uncertainty**
    - Having data removes some uncertainty
    - Selecting a class of hypotheses we are removing more uncertainty
- **Learning is guessing a good and small hypothesis class**
    - It requires guessing
    - we don't know the solution, we must use a trial and error process.
    - if you knew the domain with certainty, you don't need learning
    - but we're not guessing in the dark

**A Framework for studying Inductive Learning**

Terminology used in machine learning along with definitions:
- **Training example**
    - A sample from x including its output from the target function
- **Target function**
    - The mapping function f from x to f(x)
- **Hypothesis**
    - Approximation of f, a candidate function
- **Concept**
    - A boolean target function, positive examples and negative examples for the 1/0 class values
- **Classifier**
    - Learning program outputs a classifier that can be used to classify
- **Learner**
    - Process that creates the classifier
- **Hypothesis space**
    - Set of possible approximations of f that the algorithm can create
- **Version space**
    - Subset of the hypothesis space that is consistent with the observerd data

Key issues in machine learning:
- What are good hypothesis space?
- What algorithms work with that space?
- What can I do to optimise accuracy on unseen data?
- How do we have confidence in the model?
- Are there learning problems that computationally intractable?
- How can we formulate application problems as machine learning problems?

There are 3 concerns for choosing hypothesis space:
- **Size**
    - Number of hypotheses to choose from
- **Randomness**
    - Stochastic or derterministic
- **Parameter**
    - The number and type of parameters

There are 3 properties by which you could choose an algorithm:
- **Search procedure**
    - **Direct computation**: no search, just calculate what is needed
    - **Local**: Search though the hypothesis space to refine the hypothesis
    - **Constructive**: Build the hypothesis piece by piece
- **Timing**
    - **Eager**: learning performed up front. Most algorithms are eager
    - **Lazy**: learning performed at the time that it is needed
- **Online vs batch**
    - **Online**: Learning based on each pattern as it is observerd
    - **Batch**: learning over groups of patters. Most algorithms are batch
