# SOFT354 - More topologies and revision
> Date: 01-12-16

### 2D Torus arrangement

- N is a square number, eg N=16
- Arrange nodes evenly in 2D to give a square shape

![torus-connected-topology](img/torus-connected-topology.png)\

- What is the diameter (max path length)?
- 4 
- it is usually the square root if torus topology

- What is the bisection width?
    - 8
    - 8 * link bandwidth
    - 2 * square root generally

- What is the valency? (no. of links for each node)
    - 4
    - always be 4 for torus

- What is link count
    - 32
    - in general 4N / 2 = 2N

### Fat tree topology

- **solves low bisection width**
- start with normal thin tree
- as you go up each level in the tree
    - double the number of links (or their bandwidth)

![fat-tree-topology](img/fat-tree-topology.png)\

### Indirect networks

- So far we've assumed that every node in the network is a full node (i.e. a computer)
- The advantage of this is that the network interface is closer to the CPU / RAM  - > faster
- The disadvantage is that for high valency each machine needs many network interfaces
- In an indirect network, the actual network topology is made up of dedicated switching devices

### Revision

### GPU Memory types

- **Registers:** fastest, accessible by a single thread
    - The fastest
    - Local variable inside kernel go into registers, were possible
    - Two exceptions:
    1. if the index accessing the array using a variable then it is stored in local memory
    2. if you use more than the available register space

- **L1 Cache/ Shared memory:** located in an SM, shared between threads in that SM, extremely fast
    - individual to each SM
    - Different to L2 as all SMs share L2
    - **Shared:** you do have to write code to use it
    - as a programmer have control of its use
    - to allocate `__shared__`
    - every block of thread has this area to communicate with threads that are in the same block

- **Uniform cache:** Similar to L1 
    - SM Has its own L1 and uniform
    - used for broadcasting out data
    - used for any variables going to be used by all threads simultaneously so they can access it
    - **BUT they can't change the values**

- **L2 Cache:** shared between all SMs, much faster than RAM but slower than L1

- **GLobal memory RAM:** big + slow shared between all SMs _only memory we can read/write from host_
    - **Huge but slow**
    - Only memory that you can directly access from inside the host - using cudaMemcpy
    - This is slowest type of transfer
    - can speed it up using DMA which pinns memory
    - allocate global memory

![global-memory-accessing](img/global-memory-accessing.png)\

    - global memory has smaller regions for specific uses:
    1. constant memory, if we put variables here they will be cached for broadcast in the SMs' uniform caches
    2. Local memory any of a thread's local variables that can't go in registers go here

- **local memory** anything that doesn't fit in registers will be stored in a special region of global memory that can only be accessed by one thread
    - As only 1 thread has access this is called local memory
    - Global memory is slow so you want to avoid this
    - although it will more than likely be cached

- **Constant memory:** To take advantage of the Uniform cache we need to specificy that a particular variable in gloabl memory can't change
    - use `__constant__` modifier
    - These variables will be stored in the device's global memory in a special area reserved for **constant data**
    - When a thread access data from here it will be cached in the uniform cache and optimised for broadcast reads

### Calculating occupancy

- **Occupancy:** How many blocks can be resident in one SM at one time
- Always a whole number
- Low occupancy can be a problem for performacn
    - Few warps resident in SM meaning that there is more chance of them being in the same state - idle
- **three main things:**
    1. hard blocks per SM limit
    2. the number of threads in a block
    3. the amount of shared memory used by a block
- You need to calculate the occupancy limit according to each of these constraints, then take the minimum

1. every compute capability specifies a max no. of blocks that can be resident in an SM at once:
2. multiple each of the dimensions together
    - look at max no of threads per multiprocessor
    - divide max no resident threads by how many threads in each block = how many blocks you can fit (ROUND DOWN)
3. if any variables are marked as shared then each SM only has a limited amount of shared memory
    - divide amount of shared memory a kernel uses  by max amount of shared memory per MP (ROUND DOWN)

### CGMA

![ratio-cgma-revision](img/ratio-cgma-revision.png)\

- Top part count how many floating point operations are done
- lower part how many read and writes to global memory

- **one floating point operation:**
    - add/subtract/divide/multiply together two floating point values
    - calling basic math function: sin, cos, exp, log

- if an array is declared with `__deivice__` or allocated with `cudaMalloc` then it is stored in global memory
- All reads/writes from/to elements such an array count towards the bottom of "GMA" part of ration
- `__shared__` don't count either
- don't count integer operations


![speed-up-effiency-formulas](img/speed-up-effiency-formulas.png)\
