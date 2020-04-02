# Class 04 Reading

1. What makes an interface useful?

   Interfaces allow us to standardize our collections. It also saves us from writing redundant code when multiple collections have similar functionality (CRUD).

2. Why is middleware called middleware?

   It sits between two other softwares, so it's "in the middle." Mongoose is middlware between an application and a database.

3. Fundamentally, what does it mean to have a mock of something? Why is this useful?

   A mock is a fake version of something. Sometimes we only want to test a specific part of our application and not a dependency it uses. For example, there is no need to test external modules such as `fs` or `minimist`. Those have already been tested on their own.

4. What does it mean to have a mock database?

   A mock database has all of the functionality of the application's database, but it only exists for the lifetime of the test (deleted after).

   [Return to Index](index.md)
