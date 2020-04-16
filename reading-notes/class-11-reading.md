# Class 11 Reading

1. Come up with an application scenario where you would want to use a stack.

   You can use stacks in scenarios where you want to reverse the output or check the output in reverse order. Reversing strings and validating parentheses come to mind.

2. Come up with an application scenario where you would want to use a queue.

   You can use queues in situations where you temporarily want to store the data, but then return the output in the same order that you received the input. We're not supposed to know this yet, but a queue is used for breadth first traversal in a binary tree.

3. Why are pop, push, enqueue and dequeue always O(1)?

   Unlike arrays, you don't have to worry about changing the index of the existing elements. Therefore, no traversal is involved when adding or removing items.

4. Why do stacks and queues not have traversal or searching operations?

   You're not supposed to use stacks and queues for traversal or searching. If you are, you're using the wrong data structure. Adding those features makes the data structure more complex.

   [Return to Index](index.md)
