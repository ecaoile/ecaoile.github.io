# Class 13 Reading

1.  When is Basic Authorization used vs. Bearer Authorization?

    Basic authentication is a way to sign in with a user name and password. It goes through the server encoded with base 64 when passed from the client and later on gets decoded. Bearer authentication is an encrypted token that allows the server to continuously verify the user's identity instead of having to repeatedly sign in.

2.  What does the JSON Web Token package do?

    JSON Web Token transmits information between two systems as a JSON object. The server holds a secret key that helps digitally sign the JSON object so that it's verified and trusted.

3.  What considerations should we make when creating and storing a SECRET?

    We don't want people to have access to our dirty secrets, so they should be stored somewhere where they can't be seen or encrypted.

    [Return to Index](index.md)
