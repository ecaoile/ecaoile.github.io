# Class 25 Reading

1. Is a HashTable useful for search or sorting operations? Why?

   Hash tables are useful for searching because the key serves as a unique index. This allows an O(1) lookup of a value if you know its key.

2. What makes a good hash function?

   A perfect hash function has no collisions. However, this will occasionally happen in the real world, so we want to be able to handle collisions by using a data structure such as a linked list to handle keys that resolve to the same index.

3. Why should you try to reduce the number of collisions?

   Collisions result in increased lookup time. A hash function that uses linked lists to handle collisions would still have to iterate through the linked list to find the appropriate value.

4. What is stored at each index of a HashTable? Why?

   This sounds like a trick question. Isn't it a data structure such as a linked list to hold the values?

   [Return to Index](index.md)
