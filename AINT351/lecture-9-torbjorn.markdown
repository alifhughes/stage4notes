# AINT351 - Torbjorn lecture 9
> Date: 21-11-16

### K-nearest neighbour learning

- Select the k points in the training set that are nearest to the data point you need to classify
- Requires a distance matrix for deciding how close points are
- Euclidean distances
- class is the _majority class_ of the k-nearest neighbours

### Instance-based solutions

- Nearest sequence memory
    - Keep current episode so far is our STM
    - Remember all the episodes we've done before in LTM (aka training set)
    - Match STM and LTM can you give k-instances in memory that look closest to what i've just been through
    - Calculate highest value action
- Can learn very quickly
    - Potentially one-shot
- Fixed memory requirements
    - Can forget solutions

### Nearest sequence memory

- Discount the reward back through the steps that reached the goal
- take away a bit from the discount each step that is further away from the reward
    - makes a trail
_given an observation give me k nearest neighbours_
- Looking for instances in memory that have the same observation
- Are we looking at the same observation that is provided
- Give then the proximity values of ones that are close
- Then you look at the sequence,
    - Where they proceeded by this action and this state
    - If so, get reward more proximity 'points'
    - If it doesn't then it doesn't go any further, gets 'stuck'
- Use the K-nearest neighbours to decide what action to take
