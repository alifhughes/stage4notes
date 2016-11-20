# SOFT354 - MPI and measuring performance
> Date: 17-11-16

### Speed up

_How long does a parallel version of a program take to run vs a serial version_

- Serial time / parallel program time = speed up

**E.g**
- Serial single processor program takes 60 seconds to run
- Parallel program on 100 processors takes 10 seconds to run
    - 60 / 10 = 6 < speed up

### Linear speed-up

- embarrassingly parallel = different parts can be done completely independently
- If we have p processors
    - What will the speed-up be for problems such as this
- Divide the work up amongst the processors
![speed-up-formula](img/speed-uo-formula.png)\
- How many processors you got is the speed-up
- S=p
- Good, to scale just buy more processors

### Sublinear speed-up

- There are usually some overheads associated with adding additional processors
- S < p

### Superlinear speed-up

- Rare case that running a X amount of processors
    - Then it runs > X faster
- S > p
**E.g**
- say there is 100kb of data to process
- and the cache size is 64kb
- then 1 core isn't enough
- two cores is more than enough if you divide the processing data by 2
    - 100 / 2 = 50
    - but have 64kb of cache data
    - can process more

### Parallel efficiency

- As processor count increases
    - As does the associated overheads
- Although the speed-up may continue to increase with p
    - each additional processor added is likely to give less benefit
- We can measure this with a value called efficiency

![parallel-efficiency-formula](img/parallel-efficiency-formula.png)\

### Amdahl's law & Gustafson's law

**Gene Amdahl:**
- There's a limit to how fast you can do something, even if you add more processors

**John Gustafson:**
- By adding more processors you can always process more data in a given period of time

### Amdahl's law

- Consider a program that takes 20s to run serially
- Imagine that 5s of this time (25%) is spent running code that **cannot be parallelised**
- The remaining 15s (75%) can be parallelised with **linear speed-up**
- How long will the parallel version take with 10 processors?
- Diminishing returns with the more you add
- Limit is the time of serial programming
    - **5s**
- This is focused towards task-parallel approach
- If you have a speedup of 20x
    - It can be good depending on what you're doing
- If the job is more data-parallel
    - We can always process more data in the same time by adding processors
    - **Gustafson's law**

### Gustafson's law

- Assume that problem size (i.e amount of data to be processed) increases with the number of processors (p)
- Divide parallel program execution time into two parts
- Tp = a + b
    - a = time taken in serial execution
    - b = time taken in parallel execution

**E.g**
- a CUDA program that runs in a parallel across 1,000 cores, processing 1,000 pieces of data
- Tp = 100 + 500 = 600ms
- What is Ts?

- Whatever the cores are doing to the data takes 500ms
- So if we only have one core, each pieve of data has to be processed sequentially
- Ts = 100 + 1000 x 500 = 500100ms

- More generally, if Tp = a + b
- And the problem size scales with the number of processors (p)
- Then Ts = a + pb
- What is the speed-up
    - speed-up = Ts / Tp
- speed-up = a + pb / a + b
- Do a bit of re-organisation, using r = a / a + b (serial proportion)
- if r is proportion of code that is taken up by serial code
- if r is small then as p increases, S - > p
- Meaning if we increase the number of processors **and** the size of the problem
    - The speed-up relative to a serial program continues to increase
**E.g**
- If the number of exams to mark increases along with the number of PhD students to do the marking,
    - There's no limit to how many exams can be marked in a week
- The shortest time to do marking is still limited by the time taken to prepare the mark scheme (Amdahl's law)

### Summary of the laws

![summary-of-laws](img/summary-of-laws.png)\

### MPI (message passing interface)

- MPI is an application programming interface for **distributed memory** parallel programming
- its rare as a hardware architecture
- but **distributed memory** is still very widespread as a _software architecture_
- **Processes cannot normally access eachother's memory - > distributed memory**

![threads-vs-processes](img/threads-vs-processes.png)\

- Usually MPI programs follow a single program multiple data approach
    - Write one program and spawn multiple copies of it
- But you can also use a multiple program multiple data approach
    - Divide problem into two programs and run both

### MPI Terminology

- **Communicator:** A group of processes that can talk to each other
    - Default: MPI\_COMM\_WORLD

- **Rank:** An integer uniquely identifying a process within its communicator
    - (0 (num processes -1))

- **Tag:** A user defined integer attached to a message that can be used to indeicate the type of message

### Point-to-Point commumincations

- For sending individual messages between processes
    - Use the MPI\_Send and MPI\_Recv functions

### Blocking

- MPI\_Send and MPI\_Recv are both (potentially) **blocking** functions
    - Send may not block for small messages
- This means that every MPI\_Send on one process must have a matching MPI\_Recv on another process (and vice versa) or the processes will hang
    - Very common cause of bugs
- Messages are 'nonovertaking':
    - If a process sends two messages, they will be received in the order they were sent
    - No guarantees about what order messages from **different** processes will arrive

