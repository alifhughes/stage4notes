# SOFT351 - Week 7
> Date: 10-11-16


### Test corrections

**Q9:**

_Row major formula to access elements in a 1D array_

TIPS:
- Draw out the grid
- Work out the positions for each of the first element in the single 1D array
- Work out how to get to `n`th element

**Q11:**

_Working out the maximum number of blocks that can be resident in a multiprocessor_

max thread count = 2048 / MP
- divide that by number of threads in a block - 200
2048 / 200 = 10 - 1st constraint

max shared memory : 64k / MP 
    - 64k derived from Max. number of resident warps per multiprocessor
- divide that number shared memory array of size - 10kb
64 / 10 = 6 blocks - 2nd constraint

- Choose the minimum = 6 blocks

**Q13:**

CGMA calculations

FLOPS - Computes
- How many operations does it need assuming that has the data

- Add M numbers
- So M - 1 flops

Global memory access
- How many reads it needs
- M (number of elements calculated per thread)

- Can consider one thread if shared memory is not used

**Q15:**

_Will code cause branch divergence?_

**Divergence => If threads in one warp take different path in code**
**Warps are 32 threads from the block**

`if ((threadIdx.x < 32) == 0) { ..`

- Doesn't cause divergence because the all threads in a warp will go into that

### Parallel architectures

**Terminology:**
- Task parallelism
    - group workers to do different sections of the task
- Data parallelism
    - Every worker does every step of the task parallel but work on separate pieces of data


**Flynn's Taxonomy**

_Single instruction, Single data_
- This is classic von Neumann architecture
- The CPU does one operation at a time, on one piece of data

_Single instruction, multiple data_
- Multiple cores that process **multiple data streams** in parallel, but **each core executes the same instruction** at once
- This is like one SM in a GPU
- Each core is working on some different type of data

_Multiple instructions, single data_
- Used for reliability 

_Multiple instructions, multiple data_
- Each processing unit can access different data from memory, and can run different instructions
