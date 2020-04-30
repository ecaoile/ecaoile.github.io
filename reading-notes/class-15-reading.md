# Class 15 Reading

1. What is a leaf node? Why is it important to be able to find leaf nodes?

   A leaf node is at the "bottom" of a tree. There are no left or right nodes attached below it.

2. Describe the differences between pre-order, in-order, and post-order traversal. Why are they called pre, in, and post order?

   I always forget this. I guess a way to remember things is that `pre-order` uses the word `pre` because it reads the root node before its children (left and right nodes). `Post-order` would naturally be the opposite, calling left and right before root. `In-order` is...I don't know why it's called that. In my mind, `root -> left -> right` should be "in order." I guess that's the only combination left, and we need a `pre-order` to oppose a `post-order`. You don't call the right node first. It's illegal.

3. What is the height of a fully balanced (each non-leaf node has two children) tree? What is this used for?

   The height is log(n) in a balanced tree.

4. How are stacks and queues used in relation to trees?

   You could use queues for breadth first search. Depth first search involves a recursive stack, and you could actually use a regular stack if you wanted.

   [Return to Index](index.md)
