# Class 12 Reading

1. What's a benefit of using OAuth instead of your own basic authentication?

   OAuth allows you to offload authentication to a third party. That way, you don't have to build authentication, store personal information, and maintain security yourself.

2. Write the following steps in the correct order:

   - Ask the client if they want to sign in via a third party
   - Redirect to a third party authentication endpoint
   - Receive authroization code
   - Make a request to a third-party API endpoint
   - Make a request to the access token endpoint
   - Receive access token
   - Register your application to get a client_id and client_secret

3. What can you do with an authorization code?

   An authorization code allows a server application to request an access token.

4. What can you do with an access token?

   An access token lets a user request from an API endpoint to get data or carry actions (perform CRUD!).

   [Return to Index](index.md)
