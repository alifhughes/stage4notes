# SOFT354 - Compute to global memory access and convolution
> Date: 27-10-16

### CGMA for matrix multiplication

- Compute to global memory access ratio:

![CGMA-ratio](img/CGMA-ratio.png)\

- if we're doing more floating point operations to global access memory that is good
    - Want a high ratio

- What's the CGMA of the simple and shared memory matrix multiplication kernels?
- How many floating point operations will a **block** do?
- Each **Thread** does a dot product of one column from a and one row from b
- In a NxM matrix, this will involve multiplying together N pairs of values (N-FLOPS) and adding them up (N-1 FLOPS)
- A **Block** has MxM **threads**, so it will do:
    - m^2(n+n -1)= m^2(2n-1)
    - floating point operations for one block

- each **thread** accesses all the elements of one row and one column -> 2n accesses
- it also writes its result back to global memory (+1 access)
- a **block** contains MxM **threads**, so will read/write:
    - m^2(2n + 1)
- Floats to/from global memory

![CGMA-ratio-complete-global](img/CGMA-ration-complete-global.png)\


- **SHARED MEMORY ALGO**
- The threads in a block co-operate to load the elements of the matrix, such that each element is only fetched from global memory once
    - NxN global memory reads
- Each thread also has to write its result
    - MxM writes
- So in total a block will do m^2 + n^2 accesses

![CGMA-ratio-complete-shared](img/CGMA-ratio-complete-shared.png)\


### Trouble shooting in with code

##### sizeof()

- Statically allocated arrays can be accesses sizeof(static\_array);
- For Dynamically allocated arrays, you have to keep track of the size
    - If you use sizeof(dynamic\_array); it will give the size of the pointer

##### cudaMemcpySymbol

- Statically allocated device variables have to use cudaMemcpySymbol
- Dynamically allocated device variable have to use cudaMemcpy

### Convolution

- Mathematical operator - technically we're looking at discrete convolution

#### 1D convolution example

- Moving average
- Can use to smooth out noise from signals

![moving-average-conv](img/moving-average-conv.png)\


#### Parallelising 1D convolution

- **Strategy**: each thread calculates one output value

### Using shared memory

- Assume the threads are organised into blocks of four
- How many times each element in global memory accessed by the threads in block 1
    - mask size (m) = 5
- 4 blocks x mask size = 20 global memory accesses across the block
    - But to only 8 different memory addresses
- If we just load each element that the block needs into **shared memory** once
    - Would only need 8 global memory accesses
    - reduction of 60%


