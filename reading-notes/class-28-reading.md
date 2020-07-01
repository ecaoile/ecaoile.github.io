# Class 28 Reading

1. What is the difference between the variables MyContext and MyProvider in the examples above?

   MyContext allows for sharing state variables, and MyProvider creates them.

2. Why is context useful?

   Context allows us to pass state down the component tree through a provider-consumer relationship. This sounds kinda shady, but it apparently works with state variables.

3. Can a component outside of a provider get its context?

   A component can normally only send state to components in the render function of its provider, but the magic of context allows a provider to send state to any descendant.

   [Return to Index](index.md)
