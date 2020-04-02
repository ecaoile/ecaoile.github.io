# Class 07 Reading

1. What code does the server actually run?

   All code on the server is meant to be run indefinitely. I'm not sure if that's what the question meant, though.

2. What Express/HTTP operations map to CRUD operations?

   - create -> post
   - read -> get
   - update -> put/patch
   - delete -> delete

3. What does res.send() do?

   It sends data back to the client in the proper format.

4. What is the order of operations for the three categories of middleware (handler, application, route)?

   The application run first. Then it runs the route middlware followed by the handler.

5. What is the parameter next used for?

   `Next` is a callback functions that calls the next piece of middleware in the server. You can kinda think of it as a link list trying to access its next.

    [Return to Index](index.md)
