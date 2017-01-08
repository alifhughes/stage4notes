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

This exercise was to get more informative results back so that one could analyse the results of the algorithm over an extended period of time. Firstly, I achieved this by calling trail 500 times to get a 500x100 table of the number of steps, each row being a trail and each row being that episode's number of steps. From that I iterated over each column to get the mean and standard deviation of that episode's step count. Using these results I could then plot the number of steps per episode number against the mean of that episode's number of steps over the 500 trials and the standard deviation of the steps from the mean. The result shows us that after episode 30 the mean and standard deviation of the steps has greatly reduced representing the law of diminishing returns whereby no matter the further amount of episodes that the algorithm has 'bottomed-out' and won't improve further. Again both values come together as it reaches the last 70% of the episodes due to it 'learning' the best route through the world but in the first 30% it is still fairly erratic as it has minimal data to go upon and still trying multiple different routes through the world to get to the goal.

# P2.3: NSM-LEARNING

## A POMDP

The first section of this assignment was to implement the functions transition, observation and rndStartState. All of these combined help the agent navigate around a POMDP. As we had already created the functions transition and rndStartState in the previous assignment, I have copied across my definitions and reasoning's for them in this section.

### Observation

The purpose of this function is to return the agents observation given the state that is provided. I figured that the as the states are numbers from 1 to 11, these could correspond to the rows in a matrix with their value being the observation. Then to return the observation for the state, one simply needs to pass in the state as the first parameter of the matrix and a 1 as the second to get that rows first value which is the observation. I implemented it like this because I think it is the easiest to maintain and manage. If the POMDP was to change, then to change the state's observation value, you would only have to change that state's value row index and all of the functionality can remain the same.

### Transition Function

The task was to create a function that, given a state and an action as parameters, will return the appropriate state; effectively transitioning the agent from one state to another. Actions are given in numeric form from 1 to 4 representing north, east, south and west respectively and the states are limited to a 11 squared grid. Due to this format of actions and states I figured the transition function could be acheived by a 'look-up table' of 11x4. Each row being the state and each column being the action. From there you can assign the value of nxn to whatever that state and that action would result in. In this implementation, one is able to get the desired next state by accessing it like a regular matrix with the state as the row and action as column.

I believe this to be one of the better ways of solution as opposed to a combination of `if` or `switch` statements as it means the logic can always stay the same, if you wanted to change the grid-world or the amount of actions available you would simply have to change the matrix dimensions and values accordingly. In the test created for this function, I know the expected state from a given action and state as I know the grid-world and how to navigate it. Therefore, I call the function with known state and known action to get the known next state and compare the actual result with the expected.

### Start State Function

I achieved creating a function that initialises any starting state apart from the goal state which is state two in two parts. Firstly I used `randi` to generate a uniformly distributed random integer, passing the range (1 to 11) and the size (1x1) of the matrix it should create. Secondly, I check to see if the starting state has been generated as two, if it has then I use recursion to call itself to re-generate a number. This will continue to happen until 2 has not been generated which is usually after the first call. Although there are other ways to implement this, I prefer this method as it is clean, simple and easily testable. The test written for this calls the function and asserts 4 cases: that the number is whole, that the number is greater than or equal to 1, that the number is less than or equal to 11 and that it is not equal to 2.

## Random Episodes

The purpose of rndEpisode function was to create episodes that weren't learning at all. Simply, they were initialises a random start state, and for every transition that did not land them onto the goal state, initialise a random action and move accordingly.

To implement this was very simple. I created a while loop that keeps iterating until the state isn't the value of two, which is the goal state. Within I use the functions previously created along with the `randi` function which initialises a random integer from values 1 to 4 for the action. Every iteration of the loop it selects a new random action and moves to that state using the transition function whilst logging the current observation. Once it has landed on the goal state it iterates back through all the steps, giving the last step a reward of 10 to be discounted throughout the previous steps by multiplying it by discount rate of 0.9, simulating the progression as the learning rate increases the closer it gets towards the goal. After, it checks the number of steps taken to reach the goal state. If it is less than 20 then it will fill the remaining steps before the first step with 0s by creating a matrix of the number of steps subtracted by 20. If it is more than 20 then it will assign to itself only the last 20 rows of the matrix. This functionality is to ensure no matter the step count, a 20x3 matrix is always returned. Once the matrix is formatted it is returned along with the number of steps this episode has taken.

## Random trials

This function takes the number of episodes 1 trial should run for as a parameter and uses that as the count for the iterations. It intialises two matrices, one 3 dimensional one using `zeros` function as well as the number of episodes as 3rd dimension index and the other is a matrix to hold the number of steps each episode has take, which is also created with the parameter as the index. It then loops for the number of episodes specified, every iteration it calls `rndEpisode` to get the number of steps and the episodes matrix. Once `rndEpisode` has ran through completely, it will add it to this current iterations long term memory matrix, using the iteration counter as the index for the 3rd dimension. It adds the number of steps that the current iteration's `rndEpisode` has taken to the number of steps matrix so that both can be returned once the trial is completed.

As both of these matrices are returned and share the same dimensions, they can be called with the `plot` function directly from the command window that Matlab offers. This means you can see the number of the steps on the y axis and the number of episodes along the x axis and compare (as seen below). As you can see, the `rndTrail` does exactly what it is supposed to, there is no correlation between the y and x axis indicating that there is no learning happening. As the number of episodes increases the number of steps that it takes to complete it does not decrease. Passing in a higher figure into the `rndTrails` function gives a larger value on the x axis and ultimately the same on the y as there is more chance one episode will run for a longer amount of time.

![rndTrails-100](../img/rndTrails-100.png)\

## Proximity

The `proximity` function's purpose was to check if a given episode's step in the long term memory was the same as the observation passed in. If there is a match, then a proximity of 1 is rewarded and it goes on to further check the subsequent step's action and observation from the long term memory is the same as the action and observation of the short term memory. If there is a match, then the proximity is increased and the iteration backwards continues, else if there isn't a match, then the function is terminated. In theory, this gives use a numerical figure in which we can deduce how similar a set of actions and observations are, and if their discounted reward is high, one can assume that these actions lead to the goal state. As with many of the functions in this assignment, I have created a test to make sure that the basic functionality is working as expected and can will continue to work even after changes had been made to the function itself. In the test for `proximity`, I created a LTM and STM that are identical. Then I passed into the `proximity` function both the LTM and the STM, as well as the observation that was last in both of these matrices, and the step count being 20 for the last step and one for the episode index (as I only created one episode to test with). With these parameters, I could assume that the `proximity` function was working if it returned 20 as a proximity, this is because as they were identical and the last step and observation were passed in, then it should loop back through the whole STM and LTM and award a point for each step of which there are 20. As I created the LTM and STM, I also could check that it returned the correct LTM step, knowing it would be the same as the last step of both matrices.

## Nearest Sequence Memory

The purpose of this function was to create a Knearest matrix with all the complete LTM step's values as well as the proximity value associated with that LTM step. This matrix would be a maximum size of K and would contain only the highest proximity values with their LTM step.

I achieved this by first getting the whole size of the LTM, this is because I would need to know the number of episodes and the number of steps per episode in later loop counters. I created an outer loop which would go through all episodes of the LTM, checking first if the LTM episode has been created, skipping if it hasn't in order to save useless iterations. It would then enter an inner loop which would loop through all steps of that episode calling proximity for each step, passing in the whole LTM, the current episode index, the current step index, the STM and the observation for this step. A check is made to ensure the returning proximity value is above one, if so I then check the size of the KnearestSteps matrix to make sure that it isn't full (of size K). If it is, then it will further get the minimum value of the proximity column along with the row index and replace that row with the current iterations values from the proximity and the LTM step. If the KnearestSteps matrix is smaller than size K then it can simply add it into the matrix.

This matrix signifies the highest, and therefore best, steps and their values to be checked against in order to make a prediction of the next best step later on in the program.

## NSM Action Selection

In this section, we were informed to use the previously created functions into a loop that instead of using the `rndEpisode` and `rndTrail` functions, to use a newly created `NSMSelectAction` function. This function's purpose is to predict the best possible step from the KnearestSteps matrix provided in the previous exercise in the assignment. For 10% of the time it will choose a random action, done by creating a random integer from 1 to 10 using `randi` function and checking if this integer is 10 later on, if it is then it could be considered as 10%. In order to prevent errors with the first iterations, a check is made to ensure that the LTM has an episode for the `Knearest` function to work with, if it doesn't then it will select a random action for this episode of the LTM. Otherwise, this function can carry on as intended. It predicts the best possible step by calling the function `getActionFromKNearest` which I created. I chose to seperate it into its own function in order to create a test to ensure that I knew from a set amount of values it would produce the correct action, the test being called `getActionFronKNearestTest`. In this function it calculates the mean for each of the actions that are found in the KnearestSteps matrix. If there is more of one action and they have a higher mean for this step, then it can be assumed that this is the best action to take at the current step. The action is then returned.

## NSM Trial

This section of the assignment was similar to that in the previous section random trails in the way that it requires us to call a predefined function from the command window with a specified parameter and to analyse the graph. This code instead executes the portion of code that is linked to the newly created functions that when linked together, should force the program to learn over the course of the iterations. Unfortunately due to bugs that were not locatable by the multitude of tests that I wrote for previous functions, the graph only sometimes appears as desired in the brief, and quiet often looks similar to that of the `rndTrail` graph. A good example is shown below:

![NSMTrials-50-1](../img/NSMTrials-50-1.png)\

This does look similar to the brief, it shows progression over the iterations, that is, the number of steps tend towards zero the more it runs, showing that it is learning shorter routes to the goal state. However, as shown below, when I run some more times I get a result as such: 

![NSMTrials-50-2](../img/NSMTrials-50-2.png)\

As stated, I have written tests for all of the core functionality to eradicate them as possibilities of causing this bug. However, it is hard to cover all possible edge cases and bugs can also occur when these separate parts integrate with each other. Unfortunately due external reasons I was not able to put more time in to find out the cause of this and so it is left as is. It doesn't seem to effect the `expierment` function massively as you will see, that more times than not, it looks as it should (bar the known issue of running for extended amounts of time).

## NSM Experiment

The purpose of the `experiment` function was to accumulate data about how it runs multiple trials and plot to the mean and standard deviation of each trial's episode against the corresponding episode of other the other trials, this could then be plotted in a graph to analyse. As known, there has been problems with episodes getting stuck into high number of steps before breaking out and finding the goal state and mine was no exception to this problem. We were advised to lower the K value, which I believe would limit the amount it would have to find in order to predict the next best step. In the examples below I have shown trials of 25 and one of 50:

![NSMExperiment-25-1](img/NSMExperiment-25-1.png)\

In the above, 25 trials have run and you can see that even with the apparent bug in `NSMTrial`, once run multiple times and the mean taken of it smooths out the line to a reasonable extent to show that it is in-fact learning as it should. That is the mean and standard deviation tend towards 0 when as the trials continue. There is in fact some disturbance closer to the end but this could be caused by it getting stuck for a period of time.

![NSMExperiment-50-2](img/NSMExperiment-50-2.png)\

In the above, 50 trials have run and you can see that is very similar to the 25 trials if not closer to the desired outcome. It shows that it is working, learning through the trials and improviving with the more repetitions, but also with the bug in `NSMTrial` and the fact I stated it does get stuck shows that a part of the system isn't working fully effectively. I have tried to eliminate the basic functions as possible candidates for the bugs by writing tests for them but even still I have only covered the most basic functionality and not all edge cases as I would have like to if I had more time available to me.

