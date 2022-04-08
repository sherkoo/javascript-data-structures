# Javascript Data Strucutres

Series of files that includes various programming data structures built with JavaScript. 

# What are data structures?
In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification.More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data, i.e., it is an algebraic structure about data.

## Usage
Data structures serve as the basis for abstract data types (ADT). The ADT defines the logical form of the data type. The data structure implements the physical form of the data type.[5]

## Implementation
Data structures are generally based on the ability of a computer to fetch and store data at any place in its memory, specified by a pointer—a bit string, representing a memory address, that can be itself stored in memory and manipulated by the program. Thus, the array and record data structures are based on computing the addresses of data items with arithmetic operations, while the linked data structures are based on storing addresses of data items within the structure itself.

## Install dependencies

1. If `nodemon` isn't already installed, run `$ npm i nodemon`

## Running the files

1. Either fork the project, or download the zip
2. Open the folder in visual studio code, and run `$ nodemon stack.js` `

## Data structures

### Array `array.js`
- 

### Sets: `sets.js`
- duplicates wont be added
- order and position is not guarenteed

### Stack: `stack.js`

- A queue is a list with a linear pattern which has two end*s*: front and rear. The front end allows deletion of data items from the list. The rear end allows insertion of data items into the list. In case of a queue, the input data doesn’t need to be processed immediately. In fact, the data is processed in a FIFO fashion. It is very efficient for scenarios wherein data is transferred between different processes.

- **Applications:** Disk scheduling, CPU scheduling, File IO, Data transmission

- **Time complexity**
  - accessing: O(n)
  - searching: O(n)
  - inserting (push): O(1)
  - deleting (pop): O(1)

### Queue: `queue.js`

### Binary Tree: `binary-tree.js`

### Map
- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
