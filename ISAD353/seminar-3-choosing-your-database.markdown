# ISAD353 - Choosing your database
> Date: 07-11-16

### Key-value stores

- Similar to hash tables
- Where the key serves as an index that is used to find an associated value
- Key-value pairs are similar to accessing data in memory where the key is a memory location and value is the data stored at the location
- Making key-value pairs is a good data model for in-memory databases
- Extensibile hash-table is not stored in main memory
- Value can contain anything
    - Doesn't have to be uniform
- Its the responsibility of the application to understand what the value stores

**When to use:**

- User profiles:
    - Users have a unique ID, as well as preferences
    - This can all be put into an object, so getting preferences of a user takes a single GET operation

**When NOT to use:**

- Typically, key-value stores can only be queried by the key
- It is not possible to query by some attribute of the value
- Can make a query based on the value of the key
- You would need to get the whole data set and query on the object

### Document-oriented databases

- Almost the same as key-value but the value is an entire document
- Document can be anything although it is usually encoded in some form standard format such as XML or JSON
- All the data associated with an individual record is encapsulated in what is referred to as a document

**Features:**

- Each document can share a common structure but can also vary in the types of fields that they contain
- This allows new information to be added to some documents without requiring that all documents have the same structure

**Uses:**

**Event Logging:**
- Servers generate a large number of events that contain useful information
- Must servers store it in a plain text file
- Document databases can store all these different types of events and can act as a central data store for event storage
    - This is especially true when _the type of data_ being captured by the events _keeps changing_

**Content management system:**
- Websites are a whole array of different types of data
- New attributes can be easily added with a document-oriented database as they have no predefined schemas

**Disadvantages:**

- Still cannot query against the data in the value
    - _ALL_ the data is stored in one place
- Cross-comparing documents is difficult

### Column-family databases

- One row with the key can refer to many columns
- Each column has a key and a value
- You can group them together with column family
- **Main idea** is to group data that is related in documents in stead of making documents for each data set

**Uses:**

**Expiring usages**

- Expiring columns
    - Allows you to delete columns after a certain time period has expired, eg trials
    - A column in this case is a whole family of data

**Content management systems**

- Using column entries as blog posts with all associated tags as different columns

**Disadvantages:**

- If you need to aggregate data using queries involving operations such as SUM or AVG
    - You will have to do this client side
- Same with the rest
    - You can only access the whole data or nothing at all
    - cannot query parts of the data
- No good for prototyping
    - In early stages you may not be sure about how the query patterns will change, and as these change you have to modify the column family design
