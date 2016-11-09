# ISAD353 - Decision Trees
> Date: 19-10-16

### Decision Trees

- To represent data mining models
    - The results of our data mining
- Directed and clear box technique
    - Look inside the model and get some insight
- Can be employed for:
    - Classification (target values are discrete)
    - Estimation (Target values are continuous)
    - Prediction (Target values are in the future)
- Widely applied to directed mining because:
    - Not fussy about data
    - Relitively easy to understand, good for communicating to people

### DT (decision trees) for classification

- Having built the decision tree
- We can classify new individuals
    - For whom we don't know the correct classifcition
- By using their attribute values to trace through the tree to the leaf node

### Building Decision trees

- Need sufficient data to build
    - Not as much as other techniques
- with a smaller data set, over fitting becomes a problem sooner
    - Nodes can become to small
- Too much data will need cleaning
    - Pruning

### Derived variables

- Every split is based upon a single variable
- Decision trees do not discover relationships between variables
- To facilitate this we need to add derivced variables
- Derived variables need to be based upon knowledge of the business and intended business aims
- Can't add too many, too many variables means too expensive computational powers

### Input data

- Not to fussy with input data
- Has to be ordered
- Not sensitive with outliers, skewed distributions, differences in scale between different inputs
- Generally applicable
- But: Decision trees are not necessarily stable to changes in the input data
    - Take a data set, generate a tree, then go back to change data set, then generate new tree, the new tree can look nothing like the old tree
    - Trees do not generalise
    - Business confidence

### Handling categorical variables

- Values are categories
- Treat the data in a common sense fashion
- The way you categorise it makes sense to the data if they have no natural ordering
- Can flatten: create a new variable which has is a binary variables so it is easy to split
    - But can make too many variables, and would add to computation power

### Unary column data

- columns with only one value are not needed, can be deleted
- columns with almost only one value
    - Can move into over-fitting
- Data can be too fined grained, leading to the above point

### Handling null data

- Nulls may occur because data was not entered or provided; particularly a problem when using external data sources
- Delete such records with care
- Can treat as a categorical value
- But if a column has mostly nulls then you can get over fitting

### The results of a decision trees

- Classification trees can also yield probabilities
- Suppose a leaf node contains 20 responders and 30 non-responders:
    - The node is classified as a "non-responder" but the fact that the proportion of responders is high might certainly be of interest

### Decision trees yields rules and explanations

- Clear box
- Devision trees can in theory yield rules
- Rules can become long
    - They don't provide real insights

### Decision trees yield local information

- Some models can provide a single prediction
    - As the data set as a whole
- Decision trees provide more predictions

### Results of decision tree

- Identifies variables that are the best determiners of classification
    - This information can be useful generally and also to other data mining techniques
- Brings to light trivial/known dependencies
- May find existing business rules

### Decision trees for preliminary analysis

- We can easily build quick and dirty decision trees early on to get a feel for the data
- Small pruned trees where we are not overly concerned about the predictive accuracy
- Construction efficiency provided by binning
- easy to handle many data types so no heavy demands on pre-processing
- Insight provided by rules and most significant determiners
- Brings to light local dependencies
