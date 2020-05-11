# Class 18 Reading

1. What does it mean that web sockets are bidirectional? Why is this useful?

   Bidirectional means information can flow two ways. This is useful because it allows two points to both receive and send data.

2. Does socket.io use HTTP? Why?

   Socket.io uses both HTTP and TCP. HTTP ensuires that the connection is able to stay active and authenticated. TCP is for data transfer.

3. What happens when a client emits an event? What happens when a server emits an event?
   A client can emit an event to the server, but it seems that a server can emit to all connected clients or choose to emit to a specific client.

   [Return to Index](index.md)
