# Database justification

### CouchDB

- Going to use CouchDB for user information and saving editing
- This is because it is NoSQL
    - Giving me freedom and flexibility in the data structure that is stored
    - Need this because the instruments, patterns and scores that will be save can be in many different formats, the best of which I haven't decided yet so it still gives me freedom of not having to write a script schema
- it is native JSON storage which is what I plan to structure my data as so instead of it being a 'hack' as noted in my MySQL justification, CouchDB is designed for this type of storage.
- It is new to me and is well known database so I think it would be good to learn something new. I have not ever implemented a NoSQL database so I think this is a great opportunity for me to learn as the size of the project is still relatively small.
- Its focus is on the web and ease of use. Making it perfect for my application and me, as I am new to it.
- It uses JavaScript as its query language
    - Even though it is `map-reduce` which is alien to me coming from an SQL background (which is similar to querying in MongoDB) it actually works out as a benefit.
        - I want to learn functional programming and I think this will be a good chance to get the basics of it.
- I like the web interface it uses and being able to access it through HTTP API
    - Seems intuitive
- Could be seen if I want to port this in the future to mobile device then CouchDB is designed to do so

### MongoDB

- Seen as the most common document-store NoSQL similar to CouchDB
- The trade-offs are seen as:
    - BSON stored instead of JSON
    - Master-slave instead of Master-Master
    - Update inplace instead of MVCC
    - Faster out of the box
    - SQL like querying
- I don't have a lot of knowledge in general database terms so a lot of the benefits and disadvantages I do not understand.
- Boils down to:
    - MongodB : Consistency and Partition Tolerance
    - CouchDB : Availability and Partition Tolerance
- From a first glance perspective I seem to gravitate towards CouchDB more, due to its JSON storage, its JavaScript query language, web-interface and HTTP API access.
- I'm not interested in raw speed and at this point prefer the thought of consistency so leaning more towards CouchDB
(ref: https://stackoverflow.com/questions/12437790/when-to-use-couchdb-over-mongodb-and-vice-versa)
(ref: http://www.slideshare.net/gabriele.lana/couchdb-vs-mongodb-2982288)

### MySQL

- Although I've had a lot of experience with MySQL and feel the most comfortable with I don't think I will use it for my database
- This is because of two reasons:
    - It is a relational model, meaning that it needs a strict schema to store the data, of which I am not sure how yet it will be structured so using a NoSQL model gives me more freedom in this respect
        - I could of course just store the whole editing as a JSON formatted string in a `Blob` or `string` field and use a method similar to php `pack` to compress it
        - This would give fast, reliable results but MySQL isn't built for this and therefore it feels more of a hack than a solution.
    - I also want to take the opportunity to learn something new. As my database for this application won't be extensive, it allows me to have a relatively easy introduction and expierence with it.

### Alternatives

**Redis:**

- Often seen as a good alternative and also has a big following and community surrounding it, but because it is an in-memory key value it is used a lot to store user sessions.
- It can very well and is used for more than this but so far the benefits of CouchDB out-way it the benefits for Redis.
- I may come to use Redis for storing user sessions later on in the project but that is a desirable feature and right now it isn't in consideration nor scope.
