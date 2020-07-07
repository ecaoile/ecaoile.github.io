# Class 29 Reading

1. Why would you wrap your entire application within a context?

   Wrapping an entire application within a context allows the entire app to share variables and functions since context providers can pass information to all of their descendents.

2. What is the purpose of a reducer?

   Reducer functions determine how to update state in a Redux store.

3. What does an action contain?

   An action is an object that contains the action type and payload.

4. Why do we need to copy the state in a reducer?

   Like updating regular state, you're not supposed to directly update the current state. Instead, you make a copy of it and update that. The reducer than returns the modified state.

   [Return to Index](index.md)
