# PRCO304 - Operational Transformation notes
> Date: 29-10-16

### Pessimistic vs Optimistic transformation algorithm

**Pessimistic:**

- Pessimistic algorithms require communication with other sites or with a central coordinator before making a change to data
- This communication can be made apparent to the user or left implicit where the user's program does the communication behind the scenes
- The user must wait for a round-trip to the other sites before any change is finalised

**Optimistic:**

- Optimistic concurrency control requires no communication before applying changes locally
- The party making a change applies it immediately
- Then informs the other parties of the action
- If more than one participant makes a change at the same time
    - A conflict resolution algorithm creates compensating changes to move everyone to the same final state

Optimistic algorithms are well-suited for high-latency communications channels since the results of a user's actions may be displayed without waiting for a communications round-trip
**This means that they have immediate feedback**

### Operations

- An action which is to be performed on a document
- A single operation may be made up of a sequence of operation components
    - each of which performs a particular action to the cursor
- Operations in my program would be:
    - click to enable button
    - click to disable button
    - retain - advances the index a specified number of times

### Composition

- Operations of discrete components that are equal in length can be merged together into a single operation
- Important factor is that in order for operations to be composed
    - **They must be fundamentally compatible**
- Primarily, this means that the two operations must span the same number of indexes
- Composition is not commutative; ordering is significant

### Transformation

- Optimisitic concurrency control mechanism
- It allows two editors to modify the same section of a document at the same time without conflict
- It provides a mechanism for sanely resolving those conflicts so that neither user intervention nor locking become necessary

![one-step-diamond-problem](img/one-step-diamon-problem.png)\

- The way to read OT diagrams is the representation of operation application on two documents at the same time
- Client operations move the document to the left
- Server operations move the document to the right
- Both client and server operations move the document downward
- This representation allows us to visualise the application of operations in a literal 'state space'
- The vertices of these paths (not explicitly rendered) are points in state space, representing a particular state of the document
- When both the client and the server line pass through the same point, it means that the content of their respective documents were in sync

![transform-function-mathematical-representation](img/transform-function-mathematical-representation.png)\

- The _transfrom_ function (xform) takes two operations
    - One server and one client
- And produces a pair of operations
- These operations can be applied to their counterpart's end state to produce exactly the same state when complete
- Thus, on the client-side, we recieve operatioin _b_ from the server, pair it with _a_ to produce _(a', b')_
- And then we can compose _b'_ with _a_ to produce our final document state
- OT only solves one conflict, you have to incorporate it with other methods if further challenges arise

### Compound OT

- If the client and server diverge by more than one step
    - Simple OT will not suffice
- _e.g._ if client A performs two operations, _a and b_ one after another simultaneously with client B performing a single operation _c_
    - Then the OT function will fail as it tries to get the second transformed operation for _b_ it will fail because it has nothing to transform it against
    - Will succeed for _a_ as it can transform against _c_ directly
- We need to transform incoming operations against operations which _never happened_
- In this case, the phantom operation that we need for the purposes of OT would take us from the tail end of _a_ to the tail end of _a'_
- This can be seen as a _bridge_ between client state space and server state space
- We need this bridge, this second half of the diamon if we are to apply OT to solve the problem of transforming _b_ into server state space

![compound-ot-first-step](img/compound-ot-first-step.png)\

- To be able to perform the bridge you need to add some metadata to our poerations
- No only do they need to contain their components
    - The must also maintain some notion of parentage
- We need to be able to determine exactly what state operation requires for successful application
- We will then use this information to detect the case where an incoming operation is parented on a state which is not in our history
- Can use hashing or monotonicalling-increasing scalar

Hashing is good for a number of reasons:
- Given an operation and its associated parent hash
- We can determine instantly whether or not we have the appropriate document state to apply said operation
- Hashes also have the very convenient property of converging exactly when the document states converge
- Thus, in our one-step diamond case from earlier,
    - operations _a and b_ would be parented off of the same hash
- Operation _b'_ would be parented off of the hash of the document resulting from applying _a_ to the initial document state
    - and similarly for _a'_
- Finally, the point in state space where the client and server converge once again, after applying their respective operations
    - will have a single hash
    - As the document states will be synchronised
- Therefore any further operations applied on either side will be parented off of a correctly-shared hash
- (parent hash) being the hash of the document state _prior_ to applying a particular operation

- With this hashing of the parents operations
- The server is capable of detecting that operation _b_ is not parented off of any state in its history
- What we need to do is derive an operation which will take us from the parent of _b_ to some point in server state-space

![compound-ot-second-step](img/compound-ot-second-step.png)\

- This case, we already had it from the first OT transformation but infact we discarded it
    - It completes the first diamond
- To get to _b'_'s dirvied state, we need to re-implent that OT transformation and we will complete the diamond
    - Thus giving us a point of which we can get the next diamond

![compound-ot-third-step](img/compound-ot-third-step.png)\

- Having completed the first diamond, we are able to use the other side of _a'_'s derived state to get _b_'s
- The problem is the client must transform _c_ against two operations (_a and b_)
    - But _c_ is parented off of a state which the client has in its history, so it should be able to directly apply OT
- We could apply OT twice
    - Deriving an intermediary operation in the first step and then transforming that operation against _b_
    - However, this is inefficient
- The ideal solution is to first compose _a_ with _b_ and then transform _c_ against the composition of the two operations
- The final state looking like:

![compound-ot-final-step](img/compound-ot-final-step.png)\

### Client/Server Asymmetry

- The above is theoretically all you need to implement a fully-functional client/server collaborative editing system
- The problem with above in practise is that in order to derive the middle point that was used to get _b'_
    - The server must hold on to operation _a_ in order to use it a second time in deriving the intermediary operation
- If a server was to maintain this sort of information essentially indefinitely for every client which it handles, it would be a huge scalability problem
- One way of solving is to add the following constraint:
    - _any operation received by the server must be parented on some point in the server's history_
- Thus, the server would have rejected operation _b_ in the example above since it did not branch from any point in the server state space
- The parent of _b_ was _a_, but the server didn't have _a_, it only had _a'_
    - Which is clearly a different point in state space
- The solution is to move all the heavy lifting onto the client
    - The server shouldn't have to track every one of the clients moves
- Instead the client should track the server as it moves through state space
    - Since there's never going to be any more than one (logical) server
    - Thus, we can offload most of the compound OT work onto the client side

- Before it sends any operations to the server, the client will be responsible for ensuring those operations are parented off of some point in the server's history
- Obviously the server may have applied some operations that the client doesn't know about yet
    - But that is ok
- As long as any operations sent by the client are parented off of some point in the server's history
    - The server will be able to transform that incoming operation against the composition of anything which has happened since that point without tracking any history other than its own
- Thus, the server never does anything more complicated than the simple one-step diamond divergence
- The server can always directly apply OT to incoming operations
    - deriving the requisite operation extremely efficiently
- To do this, the client needs to work twice as hard
    - Translating its operations into server state space and correspondingly server operations back into its state space
    - (reverse translation from server to client)
- In order to maintain this guarantee that the client will never send an operation to the server which is not parented on a version in server state space
    - We need to impose a restriction on the client
    - _we can never send more than one operation at a time to the server_
- This means that as soon as the client sends an operation, it must wait until sending the next operation until the server acknowledges the first
- This is necessary because the client needs to somehow translate the second operation into server state space
    - So whenever the next instruction eventually ends up in server state space, it has to be a descendant of transformed first instruction
- A very important design feature: whenever the server applies a transformed operation
    - It sends that operation off to all clients without delay
- The clients will be able to count on the fact that they will receive operations from the server in exactly the order in which the server applied them
- Thus, they will be able to maintain a locally-inferred copy of the server's history
- This also means that the client who applied the operation is going to receive it from the server like any other operation
- Have to differentiate somehow between the operations that are you own applied and other clients applied
- To do this, we add another bit of metadata to the operation
    - **locally synthesised unique ID**
- This unique ID will be attached to the operation when we send it to the server and _preserved_ by the server through the application of OT
- Thus, operation _a'_ will have the same ID as operation _a_ but very different ID from operations _c and d_
- With this extra bit of metadata in place, clients are able to distinguish their own operations from others sent byt the server
    - Non-self-initiated operations (_like c and d_) must be translated into client state space and applied to the local document
    - Self-initiated operations (_like a'_) are actually server acknowledgements of our currently-pending operations
    - Once we receive this acknowledgement, we can flush the client buffer and send the pending operations up to the server

### Building the Bridge

- To maintain the ability of applying operations from the server and client at all time
- Need to build inferred bridges
- Pro-actively maintain a bridge which will always take us from the absolute latest point in server state space (that we know of) to the absolute latest point in client state space
- Thus whenever we receive a new operation from the server, we can directly transform it against this bridge without any extra effort
- We can maintain this bridge by composing together all operations which have been synthesized locally since the point where we diverged from server
- We always have to update the buffer so that it is parented off of some point in server state space
- Once the client sends the first operation to the server, it goes into a state where any further local operations will be composed into the buffer
- the second operation comes in, and is the first operation composed into the buffer
- Once the next operation is recieved from the server you have to transform the buffer with respect to the incoming server operation
- In essence, we're anticipating the operation which the server will derive when it transforms the clients operation against the server's own local history
- The idea is to predict that when the server applies the operation, that it should be equivalent to our inferred operation


