# Exercise: Data Structures #

# Sprint One: Object-Oriented Programming #
In this assignment, we'll implement and test two basic data structures:

1. **[Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))**
A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (FIFO: first in, first out).

![image](https://user-images.githubusercontent.com/76498304/116342514-982e3f00-a797-11eb-8633-7f5c170df6db.png)

__A queue would be great for....__
Issuing instructions to your sandwich-making robot.

2. **[Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))**
A stack works like a stack of plates -- plates are added and removed from the the top of the stack (LIFO: last in, first out).

![image](https://user-images.githubusercontent.com/76498304/116342564-ada36900-a797-11eb-9988-cfea0e5e3eae.png)

__A stack would be great for...__
Implementing your browser's back button.

### Bare Minimum Requirements ###
Implement both __stack__ and __queue__ data structures in each of the instantiation styles. The functional style is stubbed out in __`src/functional/queue.js`__ and __`src/functional/stack.js`__ to get you started.
* No arrays! Instead, use an object with numeric keys

- [ ] Pass all the tests. To run all the tests, first run npm start in your terminal from the sprint's root directory. You'll know if this step completed successfully when you see the following output in your terminal:

``` Serving "/Users/.../your-sprint-folder" at http://127.0.0.1:xxxx ```

Now, navigate to the __`http://127.0.0.1:xxxx`__ link in your browser (don't forget to include the colon and extra numbers at the end), and open the __`SpecRunner.html`__ file.

#### Pomander ####
In Terminal, run the following command from within this repository:

``` curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash ```
[Pomander](https://github.com/reactorcore/pomander) will check your code for syntax errors and violations against the Hack Reactor style guide before each commit.

It uses a pre-commit hook to run staged files through __eslint__ before each commit. __eslint__ is a linter that will block your commit should you have any syntax errors, or, should you violate the Hack Reactor style guide. There are some preferred whitespace style rules that will give warnings but not block your commit. Your work will be of a higher quality if you follow the instructions of the linter. That said, if the linter gives you any funny bugs, these bugs are not intentional, and you should feel free to skip using it during commits with the __--no-verify__ option.

#### Data Structure Specs ####
- [ ] Implement a [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) with the following methods:
    * push(string) - Add a string to the top of the stack
    * pop() - Remove and return the string on the top of the stack
    * size() - Return the number of items on the stack

- [ ] Implement a [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) with the following methods:
    * enqueue(string) - Add a string to the back of the queue
    * dequeue() - Remove and return the string at the front of the queue
    * size() - Return the number of items in the queue

#### Instantiation Styles ####
1. __Functional instantiation__: a simple "maker" pattern
    * ___Do:____
     * Work within the __`src/functional/`__ folder
     * Define all functions and properties within the maker function
     * Capitalize the maker function name
    * ___Don't:___
     * Use the keyword __`new`__, the keyword __`this`__, or any __`prototype`__ chains
    * ___Example:___ The provided classes __`Stack`__ and __`Queue`__ already follow this pattern

2. __Functional instantiation with shared methods:__ same as step 1, but with shared methods
    * ___Do:___
     * Work within the __`src/functional-shared/`__ folder
     * Create an object that holds the methods that will be shared by all instances of the class
     * Use the keyword __`this`__ in your methods
     * Use __[_.extend](http://underscorejs.org/#extend)__ to copy the methods onto the instance
    * ___Don't:___
     * Use the keyword __`new`__ or __`prototype`__ chains
    * ___Example:___ [functional instantiation example](https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeExtend.js)
 
3. __Prototypal instantiation:__ using __`Object.create`__
    * ___Do:___
     * Work within the __`src/protoypal/`__ folder.
     * Use __[Object.create](https://duckduckgo.com/l/?uddg=https%3A%2F%2Fdeveloper.mozilla.org%2Fen%2DUS%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FObject%2Fcreate&rut=41c78a2d58c18bcf5531edad42495c1702d655c9c97194364201aa907a1a1983)__ with the object from step 2 to create instances of your class
    * ___Don't:___
     * Use the keyword __`new`__
    * ___Example:___ [prototypal instantiation example](https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePrototype.js)
 
4. __Pseudoclassical instantiation:__ create instances with the keyword __new__
    * ___Do:___
     * Work within the __`src/pseudoclassical/`__ folder
     * Capitalize your function name to indicate to others that it is intended to be run with the keyword __new__
     * Use the keyword __`new`__ when instantiating your class
     * Use the keyword __`this`__ in your constructor
    * ___Don't:___
     * Declare the instance explicitly
     * Return the instance explicitly
    * ___Example:___ [pseudoclassical instantiation example](https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js)
   
5. __ES6 instantiation:__ declare classes with the keyword __`class`__
    * ___Do:___
     * Work within the __`src/es6/`__ folder
     * Capitalize your function name to indicate to others that it is intended to be run with the keyword __`new`__
     * Use the keyword __`new`__ when instantiating your class
     * Use the keyword __`this`__ in your constructor
     * Explicitly declare a class method named __`constructor`__
     * Declare all other class methods within the class declaration
    * ___Don't:___
     * Declare the instance explicitly
     * Return the instance explicitly
     * Add class methods to the class prototype directly
    * ___Example:___ [es6 instantiation example](https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeES6.js)
    
# Sprint Two: Data Structures #
This repo holds a mostly-empty [Mocha](https://mochajs.org/) test suite. To run all the tests, first run __`npm start`__ in your terminal from the sprint's root directory. You'll know if this step completed successfully when you see the following output in your terminal:

```Serving "/Users/.../your-sprint-folder" at http://127.0.0.1:xxxx```

Now, navigate to the __`http://127.0.0.1:xxxx`__ link in your browser (don't forget to include the colon and extra numbers at the end), and open the __`SpecRunner.html`__ file.

Some failing specs are included. You're welcome! You should make them pass, then write more specs and more code.

## Bare Minimum Requirements ##
### mplement and test the following classes: ###

1. __[Linked List](https://en.wikipedia.org/wiki/Linked_list)__
A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to an array which on average has linear time insertion and removal operations). In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list from the beginning.

![image](https://user-images.githubusercontent.com/76498304/116344009-65397a80-a79a-11eb-8917-fd258d51d478.png)

__A linked list would be great for....__
An itinerary you expect to add and remove destinations to and from.
* A __`linkedList`__ class, in functional style, with the following properties:
 - [ ] __`.head`__ property, a __`linkedListNode`__ instance
 - [ ] __`.tail`__ property, a __`linkedListNode`__ instance
 - [ ] __`.addToTail()`__ method, takes a value and adds it to the end of the list
 - [ ] __`.removeHead()`__ method, removes the first node from the list and returns its value
 - [ ] __`.contains()`__ method, returns boolean reflecting whether or not the passed-in value is in the linked list
 - [ ] What is the time complexity of the above functions?
  
2. __[Tree](https://en.wikipedia.org/wiki/Tree_(data_structure))__
A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.

![image](https://user-images.githubusercontent.com/76498304/116344170-a16cdb00-a79a-11eb-92ee-90ea1ecc8a4a.png)

__A tree would be great for....__
Making a family tree.
* A __tree__ class, in functional with shared methods style, with the following properties:
 - [ ] __`.children`__ property, an array containing a number of subtrees
 - [ ] __`.addChild()`__ method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
 - [ ] A __`.contains()`__ method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
 - [ ] What is the time complexity of the above functions?

3. __[Graph](https://en.wikipedia.org/wiki/Graph_(mathematics))__ 
Graphs consist of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed, which means there is an asymmetrical relationship between nodes that are connected by an edge. You will be implementing an undirected graph.

![image](https://user-images.githubusercontent.com/76498304/116344291-d711c400-a79a-11eb-80e8-079e32af25ed.png)

__A graph would be great for....__
Representing how a collection of websites (or the entire world wide web) link to each other, and [many other things](https://www.cs.princeton.edu/courses/archive/spring13/cos226/lectures/42DirectedGraphs.pdf)
* Implement a __graph__ class, in pseudoclassical style, with the following properties:
 - [ ] It is an undirected graph. It does not have to be 'connected'.
 - [ ] An __`.addNode()`__ method that takes a new node and adds it to the graph
 - [ ] A __`.contains()`__ method that takes any node and returns a boolean reflecting whether it can be found in the graph
 - [ ] A __`.removeNode()`__ method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
 - [ ] An __`.addEdge()`__ method that creates a edge (connection) between two nodes if they both are present within the graph
 - [ ] A __`.hasEdge()`__ method that returns a boolean reflecting whether or not two nodes are connected
 - [ ] A __`.removeEdge()`__ method that removes the connection between two nodes
 - [ ] A __`.forEachNode()`__ method that traverses through the graph, calling a passed in function once on each node
 - [ ] What is the time complexity of the above functions?
 
4. __[Set](https://en.wikipedia.org/wiki/Set_(abstract_data_type))__ 
Sets contain unique values in no particular order.

![image](https://user-images.githubusercontent.com/76498304/116344478-21934080-a79b-11eb-9f69-9c036874b1f2.png)

__A set would be great for....__
A raffle, where all the tickets are unique and you just want to randomly pick one (or several) out of them all.
* A __set__ class, in prototypal style, with the following properties:
 - [ ] An __`.add()`__ method, takes any string and adds it to the set
 - [ ] A __`.contains()`__ method, takes any string and returns a boolean reflecting whether it can be found in the set
 - [ ] A __`.remove()`__ method, takes any string and removes it from the set, if present
 - [ ] What is the time complexity of the above functions?
  * __Note:__ Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
  * __Note:__ Until the advanced section, your sets should handle only string values.
  * __Note:__ This is a rather simple data structure. Take a look at the [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type)) entry. Which native Javascript type fits the requirements best?
  
5. __[Hash Table](https://en.wikipedia.org/wiki/Hash_tables)__ 
Hash tables (sometimes called hash maps) store key value pairs. They do so in a memory efficient way by using a 'hashing function' that translates keys into numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible.

![image](https://user-images.githubusercontent.com/76498304/116344629-6cad5380-a79b-11eb-9119-84a835e2f7d3.png)

__A hash table would be great for....__
A contact list you might add to or remove from over time.
- [ ] A __hashTable class__, in pseudoclassical style:
  - [ ] __First__: Play with each of the helper functions provided to get a sense of what they do.
   * You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
   * A __`limitedArray`__ helper has been provided for you, check out the source code for it in __`src/hashTableHelpers.js`__. Use it to store all inserted values rather than using a plain JavaScript array. The __`limitedArray`__, as you will see in the source code, provides __`get`__, __`set`__, and __`each`__ methods which you should use in order to interact with it. Do not use the typical bracket notation for arrays when interacting with a __`limitedArray`__ instance. Try interacting with it from the console first.
    * Make the following properties appear on all instances:
     - [ ] An __`.insert()`__ method
     - [ ] A __`.retrieve()`__ method
     - [ ] A __`.remove()`__ method
   - [ ] What is the time complexity of the above functions?
  - [ ] Using your understanding of hash tables, refactor your set implementation from above to run in constant time
__On Objects and Hash Tables:__ An astute hacker might find themself wondering "Is it not so that a JavaScript object is a hash table?" or even further, "Why would I ever need to create a hash table in JavaScript?" While it is true that objects and hash tables are functionally similar, knowing how a hash table works is hugely important as they are an incredibly useful and fundamental data structure. To have detailed knowledge of how a hash table is constructed will give you valuable insight on your path to code mastery. Additionally, other languages might not provide the convenience of JavaScript's object class, meaning you may someday have to put your hash table construction abilities to good use.

** Interesting Aside: JavaScript objects aren't necessarily backed by hash tables. Despite the similarities, the [ECMA-262](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf) standard makes no restrictions on how JavaScript objects are implmented. The [V8 JavaScript engine](https://v8.dev/#prop_access), which is used in Chrome, implements objects in a way that is significantly faster than using a hash table.

6. __[Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree)__ 
Binary trees are trees that can only have 0, 1, or 2 children. Remember that trees are recursive data structures and therefore a tree's children are themselves trees and can each have 0, 1, or 2 children. In a binary search tree, one child (out of potentially two) will always be less than the node's value (based on whatever sorting condition you wish) and the other child will always be greater than the node's value. Whether it is the 'left' or the 'right' child which is greater or lesser is consistent throughout the binary search tree. This structure results in particularly fast find operations. You'll be asked to answer just how fast yourself.

![image](https://user-images.githubusercontent.com/76498304/116344914-f6f5b780-a79b-11eb-8409-ce2ffa7679b5.png)

__A binary search tree would be great for....__
A dictionary of all English words.
* Implement a __`binarySearchTree`__ class with the following properties:
  - [ ] A __`.left`__ property, a binary search tree (BST) where all values are lower than the current value.
  - [ ] A __`.right`__ property, a BST where all values are higher than the current value.
  - [ ] A __`.insert()`__ method, which accepts a value and places it in the tree in the correct position.
  - [ ] A __`.contains()`__ method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  - [ ] A __`.depthFirstLog()`__ method, which accepts a callback and executes it on every value contained in the tree.
  - [ ] What is the time complexity of the above functions?
 * Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.
 
#### Tests ####
- [ ] For each of the data structures you have implemented, go back and add at least one additional unit test. If possible, try to add a test that will require you improve your implementation in order to make the test pass.

### APIs and Implementation: A Note on Communicating Your Intentions as a Developer ###
___tl;dr: prefix private properties and methods with an underscore___

APIs are more than just URLs that return data; __API__ is a general term that refers to the visible surface of any system, object, or library with which your code interacts. E.g., an airplane has an API that consists of knobs, dials, pedals, and a yoke which allow the pilot to make use of the airplane's underlying __implementation__--an engine, wings, and rudders. Importantly, the next model of airplane will probably have improvements to the engine, but the pilot need not know about this, as the controls will remain basically unchanged.

This relationship between APIs and implementations--that they remain independent--is what keeps the towering stacks of software we use everyday from falling over.

In JavaScript, because there is no concept of private variables (except through closure), sometimes API and implementation are both visible. If it's impossible to distinguish between API and implementation, you might depend upon a piece of implementation that later changes and breaks your code.

To prevent this from happening to your collaborators and consumers, indicate private properties and methods by prefixing them with an underscore. This is how we do.
