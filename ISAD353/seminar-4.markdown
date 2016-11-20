# ISAD353 - Graph databases
> Date: 14-11-16

### Coursework

**Cassandra**
- promptly writing high volumes

**Redis**
- Reading

- This is an example for using NoSql
- _Don't assume you need two different types of databases_
- Can compare my choices against those choices
- Don't have to do Read/Write
- **Main part is recommendation systems**
- Do the rational behind the choices


### Neo4j

- Implemented Java and Scala
- Can interact with database from Java program
    - If their product is already in Java then this is an easy integration
- Has its own language of CQL
    - Cypher query language
    - (more training to use)

### Graph databases

- Graph databases are based on graph theory
- And use nodes and edges (links) to represent and store data
- Important to establish start and end point of edges
    - Have direction significance
- A graph database is essentially a collection of nodes and edges
- Each node represents a record in the database
- Each edge represents a connection or relationship between two records
- Should be able to navigate as much as possible throughout graph

#### Terminology

- Graph databases store entities and relationships between entities
- Entities are any object that exists in the real world that can be distinguished from others
- Entities are also known as nodes
    - Which have properties
- A node or record is an instance of an object in the application
- Relations are known as edges that can have properties and directional significance
- Graph databases let data stored once to be interpreted in many ways

- Relationships are already stored in disk
- Storage can keep growing if not sure relationship already exists

### Traversing

- Start at a particular node
- Travel through the edges and collect the nodes and edges to build a picture of the data it is related to

### Relationships

- Always have a direction
- Always have a type (label for the relationship)
- Always has a start node and end node
- Also have properties

### Properties

- Each node or edge has a collection of key-value pairs, or _properties_, describing it
- Usually in XML or JSON format

### Examples of graph databases

- Neo4j
- Infinite graph
- OrientDB
- FlockDB
    - Original but limited to only one away from current node

### Uses

**Social networks**
- Social networks are a natural ground to deploy and use graph databases
- Properties can add intelligence to the relationships
    - Since they became friends
    - What is the distance between the nodes

**Recommendation engines**
- As nodes and relationships are created
- They can be used to make recommendations
    - Like your friends also bought this product
- if you can categorise something
- Then you can say anything in that category is related
    - Therefore when someone goes into that category
    - they are recommended the same in that category
- Likewise when a friend buys something from that category
    - You are likely to buy it too

### Node traversal

- When you want to traverse graphs at any depth and specify a starting node for the traversal
- Similar notation to Java

### Cypher query language

- Can query it as normal, to retrieve instances of a certain entity type
- Neo4j's query language
- Cypher is a declarative, SQL-inspired language for describing patterns in a graph
    - What needs to be done instead of how it is supposed to be done
- It allows us to state what we want to select, insert, update or delete from our graph without requiring us to describe exactly how to do i
