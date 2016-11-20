---
title: AINT351 - Torbjorn Lab Journel
header-includes:
    - \usepackage{fancyhdr}
    - \pagestyle{fancy}
    - \fancyhead[LO,LE]{Alistair Hughes - 10421408}
---

# P2.1: CLASSIFICATION WITH DECISION TREES

## Initial Decision tree

To get the program set up and running, this function is constructed as a skeleton function initially. Within which I, as instructed, accepted two parameters which is the data split into meas matrix and the species vector. In order to get a dataset that was easier to work with later in the program, I decided to take the approach that concatenates the matrix and vector together as well as an extra column for the initial set value. This is stored in a cell array due to the difference in data types between the variable values (floating point values) and the vector of species (string). I did this because passing around a while data set is easier and less 'parameter' heavy, it also helps later on when filtering the data, splitting the data and comparing it as you don't have to draw all the data from different storage locations, do the operation and return to the location.

## Split

The split function is very simple but is crucial for the decision tree's functionality. It takes in the set to split, the variable (column in this case) to split on and the threshold value to make the comparison in order to make the split as parameters. From there on I simply initialised two sets for the initial set to be split into, iterated every row of the set passed in and compared the value of that row, in that column, to the threshold value. If it was less than the threshold then it would fall into set one, else it would fall into set two. Once all sets were iterated the two new sets from the split are returned by the function.

I tested the functionality in the `classificationWithDecisionTreesTests` class by creating a dummy set of data which had three sets of data all with arbitrary data. I passed in my own split condition and because I knew the data, the threshold condition, I knew what the outcome of the split would be. By doing this I ensured that the core functionality of the program is solid and robust. I always believe in writing tests and always try to do write in a test driven development way.

## Entropy

I calculated the entropy of data set using the following equation `Entropy = - p(a)*log(p(a)) - p(b)*log(p(b))` but made dynamic in order to take three sets, the three different species, and did it from first principles. Entropy is a measure of impurity in the set which is given on a scale of 0 to 1. 0.5 is the values of the set can be in either one set or another, 0 and 1 is completely certainty that it is or isn't in the set.

Firstly I split the equation down into multiple parts, two these into separate functions within the function class and one in a separate function altogether as it is also used in the calculation of the `majorityClass`. In order to get the probability, you have to get the number of each speacies that are in set that are passed in, this is done in the external function that I wrote `getNoOfPlantType` which iterates the whole set and compares the string of the desired plant type passed into the function with the current row's plant type and counts the number of instances it finds and returns that value. I extracted this into a function of its own so it can be re-used and modularised which is better practice in general, to comply with the DRY programming principle (don't repeat yourself). Secondly, using the number of the instances of that plant type in the set as a whole, you're able to calculate the probability of it occurring in that set as a whole, this was also done in the separate function `getProbOfPlantType` because it has to be done three times for each plant type. It is simply the number of that specific plant type divided by the total number of all plant types in the set provided. The last function uses the two previous values to get the entropy of each plant type by using that calculation in conjunction with the probability of the plant type. To note here, if the probability of the plant type is 0, therefore no chance of it occurring, it is given the worst possible value of entropy which is 1. Finally you can subtract all entropy values to get the final entropy which is returned.

I also wrote a test for the functionality of this, but it wasn't in true TDD style. Instead I knew a value of the entropy given a set and compared that with the outcome of calling the function.

## Improvement

Improvement is opposite to entropy, instead of measuring impurity, it measures purity. This allows use to gage a gain in the sets purity, meaning the split is getting better at filtering.

This is caluclated by taking away the value of entropy before the split from the value of entropy after the split. When the value is at its highest, it is when the best split has been performed and the sets are at their 'purest'. This function simply uses the entropy function as described previously, to calculate the sets entropy before a split, the split of each split set, and then combines those to get the entropy after. Once it has the entropy before and after the split, it calculates the information gain by subtracting one from the other and the function returns the result.

## Max split

Max split is where most of the programs functionality comes together. It is to get the best possible split across all variable values in a set. It does so by looping through all possible sets (where the data value's set number comes into play, being the last column of the dataset), looping through all the datasets within that set, looping through all the variables and their values, splitting on every one to get the information gain and checking if that information was higher than the information gain received from the previous split. If it was, then all the values that were used to make that split are recorded, being the threshold, the set and the variable it was split on. It uses these values to make the split once all iterations are complete as these are the best values for the split. Splitting requires using the split function described previously, and to update the set index of the sets that were split that is incrementing their value respectively as they're now in new sets. Once all of this is complete the values of the split are returned as a rule along with the set that hast the new split sets in it.

## Final decision tree

The final decision tree is an amalgamation of the functions described above so that all join to create the tree. The main part of the learn decision tree is having the max split contained in a loop. This keeps splitting the set until the stopping criteria is reached. I defined the stopping criteria as if there are no further splits to be made, that is the maximum splits have been made and there are no further nodes that can be produced. This is known when there are no set rules returned by the `maxSplit` function. There is a cell array which contains all the rules, so that one could reconstruct the tree given the data set as a whole and these rules.

I also included the call to `majorityClass` within this loop to get the majority species of each split and contain them in another different cell array for later use.

## Majority class

Majority class function is used to retrieve the highest number of species found in a split. This way you can label that node with that name of species, assuming that if you were to follow the rules to split on that ends up in that node, it is likely that it will be from that species. This is where `getNoOfPlantType` function is also called as you need to get the number of each plant type in a set and compare which is the most in order to get the majority within the class.

To note, I use the function `removeMajorityClasses` once all the majority classes for each split are calculated. This is because some of these splits may be split further and therefore that 'set' doesn't exist any more. After this is performed on all of the majority classes, you are left with a cell array containing the majority classes for all remaining nodes of the final decision tree.

## Classify

Classify uses the rules of the decision tree once it is completely constructed and returns the node in which the data provided as a parameter should fall into. It does this by using the max split rules, containing the variable to split on and the threshold value to compare the data passed in value of that variable. It makes a 'dummy' split that mimics the functionality of the split function, if that variable's value is less than the threshold value of that rule's split, then it goes into first set of the sets that were a result of that rule's split, if it was more then it goes into the second set. It continues this process until it reaches a point where the set wasn't split any further, meaning that it is part of this set. It the returns that node as the classification of the data.

#### Other functions included in the solution

The tests which are under `classificationWithDecisionTreesTests` and `initate` which passes the data set into the `learnDecisionTree` function and also gives an example of the `classify` function working with some dummy data.
