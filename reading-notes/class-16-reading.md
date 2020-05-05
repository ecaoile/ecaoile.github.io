# Class 16 Reading

1.  Given the examples of front-end events such as button click, window resize, form submit, etc, what are some examples of back-end events?

    I'm not sure what you're looking for here. CRUD (create, read, update, delete)?

2.  Why are events sometimes better than asynchronous actions with callbacks?

    Events allows us to associate multiple listeners with one event. It's more difficult to do that with callbacks.

3.  What does an EventEmitter instance do?

    EventEmitter objects let us do all kinds of stuff with events like define listeners and emit.

4.  When is a program’s call stack, event queue, and event loop active?

    The call stack is active when you're running your application. When an asychronous command is complete, it gets pushed into the event queue. The event loop takes things from the event queue and then pushes them to the call stack only when it's empty.

    [Return to Index](index.md)
