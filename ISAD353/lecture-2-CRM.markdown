# ISAD353 - CRM - Customer relationship management
> Date: 11-10-16

### The customer lifecycle

- Most companies have customers
- For larger companies as the distance between customer and company is greater
- Their aim is to develop long-term relationships, loyalty and long-term customer value
- We need to:
    - Gather and store data about the customer interactions over the long-term
        - Operational and warehousing systems
    - Learn from the data via data mining
    - Act on the results, measure the benefits, and finally learn from the overall endeavour
- Driven by competition

### The customer's real life cycle

- Base upon key events:
    - Graduating
    - First employment
    - Significant promotion
    - retiring
    - _etc.._
- For most companies, difficult to handle in the context of CRM because the events are rare and difficult to predict
- Adhoc

### The customer's business lifecycle

- Life cycle in relation to the business
- This relationship produces data that the business can use
    - for predicition and leverage

### Phases of the customer lifecycle

- **Prospects** are customers in the target market, but not yet customers
- **Responders** are propsects who have expressed some interest
- **Prospect** becomes _new customers_ when they first make some commitment
- **Establisted customers** are those who return for repeat business & whose value we wish to maximise
    - **Want to get here**
- **Former customers**: either voluntary, expected or forced

### Customer acquisition

- May employ purchased data list and/or targeted marketing/data mining to identify the most likely responders, most sensible marketing channel and marketing message
    - Particulary when the cost of contact is high
    - provided we ahve the input data
    - may use the reference data if available
    - To find:
        - Who is most likely to respond
        - What are they most likely to buy
- Marketing channels might include mass marketing/email/direct mail/.. depending upon whether we have contact information

### Choosing the marketing message

- Doesn't only depending on the probability of response
    - If the prob. for one model is high but profitablity it generates is low, will still need to consider different model

### Customer acquisition

- No doubt some responders will fail to become customers
    - If significant, investigate (possibly using data mining)

### Acquisition information

- Information available at the time of acquisition might have predicitve capability and should therefore be gathered and kept
- Understanding which of these characteristics is associated to long-term profitability
    - can influence other decisions

### Established customers

are those who return for repeat business

- Our aim is to develop the relationship and ultimately maximise their value
- Customer value prediction/estimation
- Targeted marketing
    - Application of data mining
- Cross-selling/up-selling/usuage stimulation
- Retention
    - Very important but increasingly difficult in an ever saturated market
    - Existing customers are higher value than new

### Relationship depth

- A customer transaction yields simple transaction data
    - product, price, time and location
- In absence of customer information, marketing is biased towards mass-marketing
- Developing the relationship suggests encouraging the gathering of information
- Other cases may yield more information:
    - Loyalty cards
        - Linking baskets together, to create customer level data
    - Credit card
    - Online account
- Greater relationship depth facilitates wider applications: customer profiling, product associations, targeted marketing

### Measuring the impact: The costs of targeted marketing

- When deploying a model, its crucial to evaluate the performance of the developed model
- If you have a limited budget
- The value of a marketing campaign would seem to depend upon its success in reaching responders
- Suppose that our data mining model ranks prospects according to likelihood of response

### Futher considerations

- Contacting non-responders may not be a complete waste of time
    - It highlights the company and its products or services, which might bring in future trade
    - The loss may not be as high as thought
- Contacting responders may be a waste of time
    - They may have purchased the product anyway
    - The profict may not be as high as thought
- Having undertaken the campaign we should analyyse the actual results

### False positives & negatives

- **false postive** model predicts postive but gets it wrong
- **false negative** model predicts negative - wont respond - but they would have if you would have mailed them
- The cost of a false negative (the lost of sale) is higher than that of a false positive
- One will have a typical higher cost than the other
- The again this  imbalance needs to be taken into account in assessing a predicitive model

![confusion-matrix](img/confusion-matrix.png)\

### Preliminary analysis

- Identify suitable business problems
    - Where data analysis might provide business value
- Transforms data into actionable results
    - Using data mining
- Act on these results
- Measure the impact of the actions
    - _repeat_

### Obtaining actionable results

- Obtain, validate & clean data
- Premliminary analysis
- Choose modelling technique
- Pre-process data/ prepare the model set
- Build model & evaluate performance
- Pick "best" model and apply to score set

#### Analysis of graph

- Check how clean the data is or poluted  it is
- How to move the data about, or push the results from what it is to where you want it to be
- Check for correlations, how strong or weak it is

### Customer data and its information content

- Data for mining should be in a single table
- Each row should correspond to a single instance - a "unit of action"
    - _e.g._ Customer, isurance policy, insurance claim
    - So: Need to understand how the results of mining effort will be employed
- Suppose that the customer = unit of action

### Customer data

- Financial/lifestyle/demographic data
- acquistion data
- Historical marketing and response data
- Derived data
- Predicted data

### Customer id and address

- A customer id is unique -  hence explicitly contains no patterns or information content
    - Can delete for the purpose of mining
- Data about customers is relatively structured
- A customer address is unique (no patterns) & far too detailed
    - Extract derived information
        - like post-code, (being in a rich area)
- Remove redundant data to make computational effort more optimised

### Information content

- A customer will have many transactions, each containing a number of items purchased
- This has to be aggregated:
    - one customer = one row
    - Total number of transactions
    - Total value of transactions
- Date of first purchase:
    - Too detailed, aggregate to month/year
    - This is an example of binning
- Profitability of customer
    - May be used to weight the importance of customer in a mining effort
- Predicted long-term profitablility
    - As above- but in this case the value may come from some other mining effort

- Taking the output from one mining effort and using it as input of another is called **enhancing** the data
    - Clearly intended to improve the performance

### Rows with invalid data

We could:
- Delete row?
    - Can produce biased sample dependng upon the size of the problem
- Fix data
    - Replace by null

### Rows containing some null values

- ingore the nulls
    - Ok for some techniques
- delete rows
    - Ok if just a few random but can create bias
    - Or if data is uniform throughout, contains no new information
- delete variable
    - not if variable has predictive capability
- estimate value

### Predicting churn

- Suppose that we wish to predict who will churn next month
    - churn = ditch your service
- We use historical purchase and interaction patterns tp predict ahead
- Customers take a while to become profitable
    - So want to keep them
- Predicting if they're going to leave
- Time series data
    - The prediction has a particular time frame, need to be able to use it in that time

### Latency

- Data may be able to use to late to be used in the prediction of churn
- Therefore need to allow for latency
- Using previous or less data to predict further ahead if your data is restricted
    - This potentially means less acurate prediction

**BUT**: churn is a long processes

- Customer first becomes dissastified early
- then decides to switch
    - Time to act in between/before then

### Shelf life of predictive model

- Looking into past works
    - Bar anonlymies
- Models become out of date if used to late
    - Only work for certain time frame
- Only have the data of the customers previous of the starting point of the predictive model
    - Suggests model set segmentation
    - Have to build different models based on the data

### Survival curves

- For given group of customers we can plot their logevity in order to understand attrition rates and customer value
- Can use probabilities to predict data

