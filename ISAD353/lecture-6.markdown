# ISAD353 - Nearest neighbour/Clusting
> Date: 28-11-16

### Scoring look alike

- A simplified form of nearest neighbour
- Given a new individual for scoring,
    - pic single individual in the training set that is most similar
    - its score then provides the score for the new individual
- simple and in many cases overly simple
- **e.g.**
- company wishes meansure effectiveness of business strategy
    - subdivide stores into similar pairs and for each pair arrply the business strategy to one of the pairs

### Scoring using voting

- Scoring requires us to combine the scores of the nearest neighbours
- for categorisation we can employ 'voting'

### using averaging

- for estimation we can, as earlier, take the average, or weighted average of the scores of the nearest neighbours

### Collaborative filtering

- Product recommendation
- Make groups of uses by finding similarities between individual users
- recommend based on weighted preferences of similar individuals

### Properties of the score

- The score falls within the range of existing values
    - it is in some sense 'reasonable'
- not good for extrapolation
- for estimation the set of possible values is very large
- for classification - all classes are possible
    - given an appropriate training set

### Nearest neighbour issues

- Training set needs to provide coverage of underlying population
    - representative samples may not
- when applied to classification, we may oversample so that each class is sufficiently represented
- Similar to decision trees in rationale
    - but in decision tree fixed portion in the space
- black box technique
    - Generates no underlying theory
- Computational expensive

### properties of nearest neighbour

- needs similarity measure
    - needs construct it
- but can handle any type of data when having it
    - makes it unique
- as long as has similarity measure can do complex data

### high dimensional spaces

- increases computation complication
- the values spread out in the large space
- then the new introduced individual will be so far away from these values then it isn't worth doing nearest neighbour

### Choosing k

- choose multiple ks to get rid of idiosyncrasies or to not get non-related individuals
- if predictions are not stable then we may have to accept that the training data is insufficient to make predictions

### Clustering

- Trying to identify homogeneous subgroups from a data set
- using the notion of similarity
- take individual and make groups of similar groups of individuals
- like clusters to be separated
- prefer concise insights
- need similarity measure

### external separation

- Once have similarity measure
- distance between centroids

### Cluster homogeneity

- how closely packed the data points are to the centroid
- take the average of that
- the lower the value the more homogeneous

### Similarity measures

- Qualitative data we cannot use euclidean distance
    - need a different measure

### Clustering issues

- Individuals in high deminsional spread out and don't get good clusters
- outliers can be problem
