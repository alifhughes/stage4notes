# SOFT354 - Parallel computation and distributed systems
> Date: 29-09-16

### Why parallel?

- Processor clock speeds aren't getting faster:
- But there's a lot more data around
- Science is also pushing the boundaries of what computers are required to do
- working with big data effectiently
- Advance simulations require lots of computing power

- As CPU clock speeds have not increased significantly in the past years but data has
    - parallelism is the solution

### Parallelism

If you can't do something any faster, do more than one thing at the same time!

### Levels of parallelism

- Computers can be parallel at different scales:
    - Within a core (instruction-level parallelism)
    - By having **multiple cores** in a CPU
    - by having multiple CPUS

#### Instruction level parallelism

- The performance of a single processor core can be increased by soing same thing in parallel
_Example_
![fetch-decode-execute-plining](img/multi-FDE-pipeline.png)\
![fetch-decode-execute-plining](img/multi-FDE-pipeline-2.png)\

#### Multiple cores

- Morden CPUs have several largely independent processing cores
- All cores have access to the same memory, but can be running different programs or threads

- **GPUs** have loads of cores
- less flexible than CPU cores

#### Multiple processors
- Distribute a problem amongst multiple computers, connected via a network

#### What's a GPU

- A Graphical Processing Unit
    - Often used for computations that have **nothing to do with graphics**
- More accurate name: General purpose computing on graphical processing units

- **Key insight**: the transformation operation is the same for each vertex
- So why not design a processor that can perform the same operation on many different values at the same time
- All cores are run the same code- simpiler circuitry

#### General purpose GPUS

- Programmable cores
- Rather than performing a fixed funtion
    - you could write arbitrary code for them like you would a regular CPU

#### CUDA and OpenCL

![cuda-vs-opencl](img/cuda-vs-opencl.png)\

#### Basic matrices and vector math

![matrix-vector-excerises](img/matrix-vector-exercises.png)\

#### CUDA compute capablity

![cuda-compute-capability](img/cuda-compute-capability.png)\

#### CUDA

- A GPU is organised differently to a CPU
- Each CPU core has its own control logic
- each thread that's running in parallel can be at a different place in the program
- CUDA cores are organised into streaming Multiprocessors (SMs)
    - _E.g._ in compute capability 2, there are 32 cores per SM
- **All cores within an SM execute the same instruction at the same time**

![CPU-vs-GPU](img/CPU-vs-GPU.png)\

#### Heterogeneous computing
CPU code alongside GPU code, working together

![heterogeneous-computing](img/heterogeneous-computing.png)\

##### Simple processing flow

1. Copy input data from CPU memory to GPU memory
2. Load GPU program and execute, caching data on chip for performance
3. Copy results from GPU memory to CPU memory

### Programing tipbits

- __global__ keyword before function gets run on the GPU
- calling a device function ^ mykernel<<1, 1>> how many functions you want to run on the GPU

