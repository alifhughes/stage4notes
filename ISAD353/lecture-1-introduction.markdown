# ISAD353 - Introduction to Data Mining
> Date: 05-10-16

# Data Mining

### Examples of data mining

##### A bank wishes to assess loans application for risk
- The bank has information about previous loans (loans details, customer details and whether or not the loan default)
- Using this information **Data Mining** tries to build a _predictive_ model relating the loan & customer details to the target attribute default

- Input information
    - AKA model set
- Model
    - Business logic

![example-1-data-mining](img/example-1-data-mining.png)\

##### Supermarkets with automated checkout

- Vast amount of data collected from purchases
- Want to find **Useful information** from this large amount of data
    - Correlations between products for marketing etc.

### What is data mining?
Data mining is the process of explorationand analysis, by automatic and/or semi-automatic means, of large quantities of data to discover meaningful, actionable patterns and rules (that were previously unknown or unexpected)

- Applied disciplain

#### The prerequisites
- Relevant data sets are being produced
    - Normally in large volumes
    - captured autmatically, and stored in databases and warehouses
- Computing power is available
- The value of _hidden_ information is increasingly recognised

#### Mining vs reporting
**Reporting**
- SQL is getting the infromation that you specifiy in the query

### Directed forms of data mining
- In directed mining we have a _prior_ view of what we are trying to do/find
    - Defined by a target variable

### Classification
- Building a model that enables us to take a new record, and assign it to a class
- The set of classes is pre-defined
- Model set consists of pre-classified records (target value is already known)

### Directed forms of mining
- Estimation
    - As in classification, but the target variable takes continuous values
- Prediction
    - Looking to the future

### Undirected forms
- No prior view of what we are looking for; no target variable
- Trying to make sense of data collected in various forms
    - Can analysis the data in different ways (_as described below_)
- Trying to understand something from the data
    - Because we think the understanding of the data will be of benefit to us
- Association analysis/rules; link analysis
    - Used to understand which things go together
- Clustering (or segmentation)
    - Clustering a group of individuals into subgroups that are more homogeneous: no predfined classes
- Description
    - To imprive our understanding of the data
    - AKA visualisation

### Black vs clear box techniques

- Sometimes we just want the answer
    - Put your input data into the model, get out put and processes is not of interest, only the answer
    - We don't care about the intneranl workings of the model
    - A black box technique is fine
- Sometimes the inner details of the models give useful insights or explanations
    - Clear box
    - Understanding how the answer was arrived at
    - _e.g_ Doctors understanding a prescription estimated by a machine

#### Applications of data mining
- Limited type of data mining approaches
- Many applications boil down to the same thing but under a different guise
    - _e.g._ Directed vs undirected / classification

### The data mining cycle

- Identify suitable business problems(s)
    - Where data analysis might provide business value
- Transform data into actionable results
    - Using data mining
- Act upon these results
- Measure the impact of the actions

        **Repeat the steps**

- Starts with the real world
- Ends with the real world
    - **Applied**

### Some manual or semi manual activities
- Helping form the data using human input to assist decisions made by a machine
- Business insight is needed

### Identifying the right business problem
- What is important to the business
- Which segments are of interest
- The relevant business rules
    - Data mining has a habit of finding known patterns
    - Business rules can direct the mining effort
- Is the required data available?
- Is a mining effort necessary?

### Transforming data into actionable results

- Obtain, validate & clean data
- Premliminary analysis

_Repeat_
    - Choose Modelling technique
    - Prepare the model set
    - Build model & evaluate performance

- Pick "best" model(s) and apply to score set

### Acting upon the results
- insight
    - Tells you something about the data
    - Very valuable but does not provide you an action to use
- One-time
- Remembered results
    - Something that in the past has proved beneficial
    - Act again on it in the future
- Periodic prediction
    - What will they want to buy next
    - Seasonal
- Real-time
    - Fraud on credit card purchases
    - Scores it as it happens
- Understanding the data can mean that some of the data used is _garbage_

### Measuring the impact of the action

- Often overlooked because of its long term value
    - But feeds into the next cycle by highlighting what works and what doesn't

### Data sources

- Data for (traditional) data mining should be in a single table (or view)
- Each row should correspond to a single instance - a "unit of action"
    - The "unit of action" might be a loan, customer, insurance policy
    - So we need to understand the interests/intentions of the business

### Data requirements

- Sufficient data to solve the problem
    - Sufficient attributes and sufficient records
    - If we're going to make a prediction, we need the appropriate input values to make valuable results
- Representative of the target audience
    - Time, geog, demographics
    - Make it actual representive on what you want, not based of something else that is uncorrleated
- Input data is needed for the score set too
    - When having a new application
    - Don't build application on model set when in use the application won't have that data because it is new
    - Need to set a standard
- Quality
    - Accuracy
    - Consistency
    - Aggregated
    - Excessive summerisation
- Legal issues

### Data sources

- Survey and product registration data
    - Market research
    - Responders may bot be a representative sample
        - They're self selecting
    - Inaccurate and outdatad data
- Service registration data
    - _e.g._ loyalty card
- External data sources
    - Decidiing which may be challenging
    - Matching new, externally collected data to pre-exisiting customer DBs is challenging

### Online transaction processing systems

**OLTP**
- The obvious original source
    - Assuming the OLTP captures the data
- Data format may be a problem
    - OLTP are built for efficient operational processing
- Data cleanliness might be a problem
    - Particularly for non-essential data
- May embed business rules - that need to be understood

### Relational systems

- Driven by concept of normalisation
- Data about thing you're interested has to be in one table
- Distrubited data has to be aggregated to be able to be fed into a model


### Data warehouses

![data-warehouse-example](img/data-warehouse-example.png)\

- To pull data from across the organisation to one clean, aggregated source
- There to provide easy analysisable data on what the company is intested in
- A subject-oriented, integrated, time-stamped and non-volatile collection od data to support management decision-making
    - Usually clean
    - May not contain the right data
        - Too broad
        - Summerised

### OLAP - online analytical processing

![olap-example](img/olap-example.png)\

- Complex query and "what-if" analysis of multi-dimensional data
    - Roll-up and drill-down
- OLAP results can be used as a reference for data in mining
- OLAP good for data exploration/preliminary analysis
- Conversely: Mining results are candidates for insertin in OLAP systems
- OLAP may not contain the right data content
    - OLAP reports may not need the customer field annd hence this field may be ommitted
    - OLAP systems might contain summarised data
