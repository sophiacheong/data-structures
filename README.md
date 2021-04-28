# Exercise: Data Structures #
# Sprint One: Object-Oriented Programming #
In this assignment, we'll implement and test two basic data structures:

1. Queue 
A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (FIFO: first in, first out).

queue image

A queue would be great for....
Issuing instructions to your sandwich-making robot.

2. Stack 
A stack works like a stack of plates -- plates are added and removed from the the top of the stack (LIFO: last in, first out).

stack image

A stack would be great for...
Implementing your browser's back button.

Bare Minimum Requirements
Implement both stack and queue data structures in each of the instantiation styles. The functional style is stubbed out in src/functional/queue.js and src/functional/stack.js to get you started.

No arrays! Instead, use an object with numeric keys
 Pass all the tests. To run all the tests, first run npm start in your terminal from the sprint's root directory. You'll know if this step completed successfully when you see the following output in your terminal:

Serving "/Users/.../your-sprint-folder" at http://127.0.0.1:xxxx
Now, navigate to the http://127.0.0.1:xxxx link in your browser (don't forget to include the colon and extra numbers at the end), and open the SpecRunner.html file.

Pomander
In Terminal, run the following command from within this repository:

curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash
Pomander  will check your code for syntax errors and violations against the Hack Reactor style guide before each commit.

It uses a pre-commit hook to run staged files through eslint before each commit. eslint is a linter that will block your commit should you have any syntax errors, or, should you violate the Hack Reactor style guide. There are some preferred whitespace style rules that will give warnings but not block your commit. Your work will be of a higher quality if you follow the instructions of the linter. That said, if the linter gives you any funny bugs, these bugs are not intentional, and you should feel free to skip using it during commits with the --no-verify option.

Data Structure Specs
 Implement a stack with the following methods:

push(string) - Add a string to the top of the stack
pop() - Remove and return the string on the top of the stack
size() - Return the number of items on the stack
 Implement a queue with the following methods:

enqueue(string) - Add a string to the back of the queue
dequeue() - Remove and return the string at the front of the queue
size() - Return the number of items in the queue
Instantiation Styles
Functional instantiation: a simple "maker" pattern

Do:
Work within the src/functional/ folder
Define all functions and properties within the maker function
Capitalize the maker function name
Don't:
Use the keyword new, the keyword this, or any prototype chains
Example: The provided classes Stack and Queue already follow this pattern
Functional instantiation with shared methods: same as step 1, but with shared methods

Do:
Work within the src/functional-shared/ folder
Create an object that holds the methods that will be shared by all instances of the class
Use the keyword this in your methods
Use _.extend  to copy the methods onto the instance
Don't:
Use the keyword new or prototype chains
Example: functional instantiation example 
Prototypal instantiation: using Object.create

Do:
Work within the src/protoypal/ folder.
Use Object.create  with the object from step 2 to create instances of your class
Don't:
Use the keyword new
Example: prototypal instantiation example 
Pseudoclassical instantiation: create instances with the keyword new

Do:
Work within the src/pseudoclassical/ folder
Capitalize your function name to indicate to others that it is intended to be run with the keyword new
Use the keyword new when instantiating your class
Use the keyword this in your constructor
Don't:
Declare the instance explicitly
Return the instance explicitly
Example: pseudoclassical instantiation example 
ES6 instantiation: declare classes with the keyword class

Do:
Work within the src/es6/ folder
Capitalize your function name to indicate to others that it is intended to be run with the keyword new
Use the keyword new when instantiating your class
Use the keyword this in your constructor
Explicitly declare a class method named constructor
Declare all other class methods within the class declaration
Don't:
Declare the instance explicitly
Return the instance explicitly
Add class methods to the class prototype directly
Example: es6 instantiation example 
Sprint Two: Data Structures
This repo holds a mostly-empty Mocha  test suite. To run all the tests, first run npm start in your terminal from the sprint's root directory. You'll know if this step completed successfully when you see the following output in your terminal:

Serving "/Users/.../your-sprint-folder" at http://127.0.0.1:xxxx
Now, navigate to the http://127.0.0.1:xxxx link in your browser (don't forget to include the colon and extra numbers at the end), and open the SpecRunner.html file.

Some failing specs are included. You're welcome! You should make them pass, then write more specs and more code.

Bare Minimum Requirements
Implement and test the following classes:
1. Linked List 
A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to an array which on average has linear time insertion and removal operations). In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list from the beginning.

Linked List image

A linked list would be great for....
An itinerary you expect to add and remove destinations to and from.

A linkedList class, in functional style, with the following properties:
 .head property, a linkedListNode instance
 .tail property, a linkedListNode instance
 .addToTail() method, takes a value and adds it to the end of the list
 .removeHead() method, removes the first node from the list and returns its value
 .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
 What is the time complexity of the above functions?
2. Tree 
A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.

Tree image

A tree would be great for....
Making a family tree.

A tree class, in functional with shared methods style, with the following properties:
 .children property, an array containing a number of subtrees
 .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
 A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
 What is the time complexity of the above functions?
3. Graph 
Graphs consist of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed, which means there is an asymmetrical relationship between nodes that are connected by an edge. You will be implementing an undirected graph.

Graph image

A graph would be great for....
Representing how a collection of websites (or the entire world wide web) link to each other, and many other things 

Implement a graph class, in pseudoclassical style, with the following properties:
 It is an undirected graph. It does not have to be 'connected'.
 An .addNode() method that takes a new node and adds it to the graph
 A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
 A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
 An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
 A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
 A .removeEdge() method that removes the connection between two nodes
 A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
 What is the time complexity of the above functions?
4. Set 
Sets contain unique values in no particular order.

Set image

A set would be great for....
A raffle, where all the tickets are unique and you just want to randomly pick one (or several) out of them all.

A set class, in prototypal style, with the following properties:
 An .add() method, takes any string and adds it to the set
 A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
 A .remove() method, takes any string and removes it from the set, if present
 What is the time complexity of the above functions?
Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
Note: Until the advanced section, your sets should handle only string values.
Note: This is a rather simple data structure. Take a look at the Wikipedia entry. Which native Javascript type fits the requirements best?
5. Hash Table 
Hash tables (sometimes called hash maps) store key value pairs. They do so in a memory efficient way by using a 'hashing function' that translates keys into numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible.

Hash Table image

A hash table would be great for....
A contact list you might add to or remove from over time.

 A hashTable class, in pseudoclassical style:
 First: Play with each of the helper functions provided to get a sense of what they do.
You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
A limitedArray helper has been provided for you, check out the source code for it in src/hashTableHelpers.js. Use it to store all inserted values rather than using a plain JavaScript array. The limitedArray, as you will see in the source code, provides get, set, and each methods which you should use in order to interact with it. Do not use the typical bracket notation for arrays when interacting with a limitedArray instance. Try interacting with it from the console first.
Make the following properties appear on all instances:
 An .insert() method
 A .retrieve() method
 A .remove() method
 What is the time complexity of the above functions?
 Using your understanding of hash tables, refactor your set implementation from above to run in constant time
On Objects and Hash Tables: An astute hacker might find themself wondering "Is it not so that a JavaScript object is a hash table?" or even further, "Why would I ever need to create a hash table in JavaScript?" While it is true that objects and hash tables are functionally similar, knowing how a hash table works is hugely important as they are an incredibly useful and fundamental data structure. To have detailed knowledge of how a hash table is constructed will give you valuable insight on your path to code mastery. Additionally, other languages might not provide the convenience of JavaScript's object class, meaning you may someday have to put your hash table construction abilities to good use.

**Interesting Aside: JavaScript objects aren't necessarily backed by hash tables. Despite the similarities, the ECMA-262  standard makes no restrictions on how JavaScript objects are implmented. The V8 JavaScript engine, which is used in Chrome, implements objects in a way that is significantly faster than using a hash table.

6. Binary Search Tree 
Binary trees are trees that can only have 0, 1, or 2 children. Remember that trees are recursive data structures and therefore a tree's children are themselves trees and can each have 0, 1, or 2 children. In a binary search tree, one child (out of potentially two) will always be less than the node's value (based on whatever sorting condition you wish) and the other child will always be greater than the node's value. Whether it is the 'left' or the 'right' child which is greater or lesser is consistent throughout the binary search tree. This structure results in particularly fast find operations. You'll be asked to answer just how fast yourself.

Binary Search Tree image

A binary search tree would be great for....
A dictionary of all English words.

Implement a binarySearchTree class with the following properties:
 A .left property, a binary search tree (BST) where all values are lower than the current value.
 A .right property, a BST where all values are higher than the current value.
 A .insert() method, which accepts a value and places it in the tree in the correct position.
 A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
 A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
 What is the time complexity of the above functions?
Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.
Tests
 For each of the data structures you have implemented, go back and add at least one additional unit test. If possible, try to add a test that will require you improve your implementation in order to make the test pass.
APIs and Implementation: A Note on Communicating Your Intentions as a Developer
tl;dr: prefix private properties and methods with an underscore

APIs are more than just URLs that return data; API is a general term that refers to the visible surface of any system, object, or library with which your code interacts. E.g., an airplane has an API that consists of knobs, dials, pedals, and a yoke which allow the pilot to make use of the airplane's underlying implementation--an engine, wings, and rudders. Importantly, the next model of airplane will probably have improvements to the engine, but the pilot need not know about this, as the controls will remain basically unchanged.

This relationship between APIs and implementations--that they remain independent--is what keeps the towering stacks of software we use everyday from falling over.

In JavaScript, because there is no concept of private variables (except through closure), sometimes API and implementation are both visible. If it's impossible to distinguish between API and implementation, you might depend upon a piece of implementation that later changes and breaks your code.

To prevent this from happening to your collaborators and consumers, indicate private properties and methods by prefixing them with an underscore. This is how we do.
