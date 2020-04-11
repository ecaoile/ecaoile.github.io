# Class 09 Reading

1. Describe a use-case where param middleware would come in handy.

   Let's say someone enters an ID. You could verify that the ID is a valid ObjectID. If not, you could return some snarky response to prevent querying in the first place. The main point is that params middleware gives you an opportunity to validate the req.params key-value.

2. What are the two ways to add middleware in-between Mongoose and MongoDB interactions?

    I'm not sure what this is asking for. Maybe you mean `pre` and `post` hooks. That's two. Doesn't param middleware count too?

3. What is the difference between a join by reference and a virtual join?
  
    Virtual joins allow us to treat our database like a relational database. This helps us define more sophisticated relatnships between doucments besides populating data based on only an `_id` field.

4. What do localField and foreignField mean?

    `localField` seems to be a property found in the current collection, whereas `foreignField` is a property elsewhere that you're trying to make a connection with. This stuff is still kinda cryptic to me.

    [Return to Index](index.md)
