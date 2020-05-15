# Class 19 Reading

1. What is the main benefit of a message queue server?

   A queue server allows clients to make sure that they're up to data with the data that they need. If a client is offline when data is available for them, the server will wait for the appropriate client to connect before sending the data.

2. Why might we want to initiate messages from an HTTP request?

   Messages are extensions of events because they can contain a queue name, event name, and payload. This gives us more control with how we handle data.

3. Is the Message Queue Server a socket.io client, a socket.io server, or an api server?

   A message queue server appears to be a socket.io server at least according to the reading diagram.

   [Return to Index](index.md)
