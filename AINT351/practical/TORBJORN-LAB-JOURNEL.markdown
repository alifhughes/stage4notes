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

# P2.2: Q-LEARNING

## Transition Function

The task was to create a function that, given a state and an action as parameters, will return the appropriate state; effectively transitioning the agent from one state to another. Actions are given in numeric form from 1 to 4 representing north, east, south and west respectively and the states are limited to a 11 squared grid. Due to this format of actions and states I figured the transition function could be acheived by a 'look-up table' of 11x4. Each row being the state and each column being the action. From there you can assign the value of nxn to whatever that state and that action would result in. In this implementation, one is able to get the desired next state by accessing it like a regular matrix with the state as the row and action as column.

I believe this to be one of the better ways of solution as opposed to a combination of `if` or `switch` statements as it means the logic can always stay the same, if you wanted to change the grid-world or the amount of actions available you would simply have to change the matrix dimensions and values accordingly. In the test created for this function, I know the expected state from a given action and state as I know the grid-world and how to navigate it. Therefore, I call the function with known state and known action to get the known next state and compare the actual result with the expected.

## Starting State

I achieved creating a function that initialises any starting state apart from the goal state which is state two in two parts. Firstly I used `randi` to generate a uniformly distributed random integer, passing the range (1 to 11) and the size (1x1) of the matrix it should create. Secondly, I check to see if the starting state has been generated as two, if it has then I use recursion to call itself to re-generate a number. This will continue to happen until 2 has not been generated which is usually after the first call. Although there are other ways to implement this, I prefer this method as it is clean, simple and easily testable. The test written for this calls the function and asserts 4 cases: that the number is whole, that the number is greater than or equal to 1, that the number is less than or equal to 11 and that it is not equal to 2.

## Reward Function

The reward function's purpose is to signify reaching the goal state and, in later use of the program, it is used to update the values of the state's value around it in order for it to learn the shortest path towards the goal. The function is required to return value 0 as a reward unless the action and state mean that is going to move into the goal state (action 3 and state 5 moves the agent into state 2). Therefore, it is only a matter of checking the parameters, action and state, values to see if they move the agent into the goal state, if so, return 10, else always return 0. The test was implemented the same way. We know if state and action equal 5 and 3 then the reward is 10, that being the expected value and so I call the function with the parameters and check against that expected value. Otherwise I choose some arbitrary numbers that are not those and check against the expected value of 0.

## Q-function Table

The purpose of the Q-function table is to maintain the values of that state and action's relation to the goal state. This is used in conjunction with the `update` function which updates the value respectively based on the reward, state and action. This function initialises the matrix of 11x4, representing the states as rows and actions as columns similar to my implementation of the `deterministicTransitionFunction` table, with random values between 0.01 and 0.1. I achieved this by using the `rand` function with an lower band, upper band and matrix dimensions to control the size and limits of the values within. It also asks to plot the matrix as a 3D surface graph, which I extracted out into a separate function `plotQFunctionInitValues` as later on in the program this function is called multiple times and therefore a graph would be created each time. Instead I call this once at the end and display it with the other graphs for the `trail` and `experiment` functions.

I also have written a test to ensure that the sizes and values are correct when initialising. I have done this by calling the function to get the table, then checking the size against the expected size and also loop through the values getting the minimum and maximum values for each row and checking if that they're not above or below the values specified, if they are, they set a boolean flag which is checked against at the end of the test to make sure it hasn't been set.

## Action Selection

A e-greedy action selection function by nature always tries to pick the highest value of the possible actions in that state to move the agent (hopefully) closer towards the goal state. The function is passed in the qTable and state as parameters, from that I get all possible values for that state by getting all the values of the corresponding row. Then one can simply take the highest value and the index associated with that value and use that index as the next action to take. To add the 10% random chance of moving into any state, I initialesed a number between 1 and 10 everytime it is called, this representing each 10% probability, then I check if the number is equal to 10, meaning that the 10% chance has been achieved and so I further pick another random number between 1 and 4 which will then be the action. Note, the if statement could have been any number between 1-10 as all have equal probability of being chosen 10% of the time, but for clarities sake I chose 10 because I wanted 1-9 to represent 90% of the time it didn't get chosen.

## Update

This function is to update the resulting state from the current state and action's value in the qTable using the Q-Learning update equation. This function applies a discount rate and learning rate to the current value of the table so that the new value is based on the reward and next state it has landed in. This means it will decrease over time if the reward is 0 and increase when the reward is 10. That means that over the course of the trails the values surrounding the goal and the path to the goal with increase as the goal state goes towards a value of 10 in the qTable allowing that to trickle down through the table to the values of resulting actions to states that lead to it. This twinned with the e-greedy action selection means that it will get better over time at moving towards the goal state faster as the values to it increase and ones that don't decrease.

The values needed for the equation are: the discount rate, learning rate, current value of the q table state and action and the max value of the resulting state's actions. When plugged into the formula it updates the current value correctly. Once it has that updated value, I simply assign it to the position in the qtable that corresponds to the state and action passed in as parameters.

## Episode

An episode represents an agents full journey through the world from start to goal. To do this, I joined all the previous functions written so that a starting state is initialised along with the qTable. From there I created a while loop with an exit condition of the reward being equal to 10, meaning that the goal state has been reached. Within the loop an action is selected using the e-greedy action selection function, this is used to get the next state. The reward can then gathered from the state and action which along with the next state is passed into the update function. If the reward isn't 10, then the next state is assigned to the current state (effectively moving the agent in the world) and the loop is complete. To note, the number of steps it takes the agent to reach the goal state from the starting state is also recorded throughout the episode for later use.

## Trial

A trial represents a given number of episodes and the result from them as the qTable is reused for each episode, meaning it can learn upon its old findings from the last episode. This meant the implementation of the `trial` function was simply calling episode 100 times in a loop and recording the number of steps taken for the episode to reach the goal and the updated q table from that episode, the q table was then fed back into the next iterations episode.

What's important here is not the implementation but the results from it. As you can see from the graph, over time the number of steps tends towards 0 as it keeps on improving (from the updated values in the qtable). It starts off quite eratic as there is either no or little previous data to use. It is only until around 20 episodes roughly does it start to improve and flatten. It will never be completely flat due to the randomness in the action selection, meaning it will never be completely efficient in always choosing the perfect path towards the goal state, but this is important to keep as it is important in the learning process. Sometimes the algorithm would get stuck on fake values due to the fact that the would is initialised randomly so some values will be higher but for no reason. If you were to increase the number of trails then you would see it improve more so though but as previously described it will never be perfect.

## Experiment

This exercise was to get more informative results back so that one could analyse the results of the algorithm over an extended period of time. Firstly, I acheived this by calling trail 500 times to get a 500x100 table of the number of steps, each row being a trail and each row being that episode's number of steps. From that I iterated over each column to get the mean and standard deviation of that episode's step count. Using these results I could then plot the number of steps per episode number against the mean of that episode's number of steps over the 500 trials and the standard deviation of the steps from the mean. The result shows us that after episode 30 the mean and standard deviation of the steps has greatly reduced representing the law of diminishing returns whereby no matter the further amount of episodes that the algorithm has 'bottomed-out' and won't improve further. Again both values come together as it reaches the last 70% of the episodes due to it 'learning' the best route through the world but in the first 30% it is still fairly erratic as it has minimal data to go upon and still trying multiple different routes through the world to get to the goal.
