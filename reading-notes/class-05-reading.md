# Linked Lists and Why They're (Supposed to Be) Cool

- pointer to .next allows adding/inserting/deleting without having to shift the rest of the nodes like you would for an array
- basis for other data structures
- used in interviews (Amazon loves them plus I've gotten one before)

I like to think of linked list as a bunch of heavy spheres that are too difficult to physically move yourself. Think of the Amazon spheres. Imagine the .next reference as arrows pointing from one sphere for another. If you want re-organize a linked list, you don't try to move the sphress around. They're simply too heavy for you. Instead, you change the direction of the arrows (the pointers). Sometimes that will require creating temp variables to hold pointers while you manipulate other pointers.

By the way, I know a lot of people will end up thinking that the only way to traverse a linked list is a while loop. You can still do it with a for loop.

```
var reverseList = function(head) {
    let prev = null;
    let next = head;
    for (let curr = head; head; head = next) {
        next = head.next;
        head.next = prev;
        prev = head
    }
    return prev;
};
```

It's not optimal, but I figure I'd show this just to open up anyone's mind who reads this.

[Return to Index](index.md)
