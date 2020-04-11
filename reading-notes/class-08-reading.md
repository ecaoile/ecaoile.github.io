# Class 08 Reading

1. What is a benefit to using express.Router()?

   express.Router() allows us to modularize our routes so that we don't have a pile of vomit on the `server.js` page.

2. When I say that top-down order matters in Express, what does that mean?

   Top-down means the express routes are called from the top of the file to the bottom of the file. Express kinda works like a linked list.

3. Why do we use a model class (with create(), read(), etc.) instead of directly calling MongoDB operations (such as save(), find(), etc.) within our Express route handlers?

   We use a model for abstraction and to adhere to RESTful guidelines. We love our CRUD, and having to add other levels of malarkey makes it more complicated and can lead to more errors.

   [Return to Index](index.md)
