# Class 23 Reading

1. Why might you want to create a FormInput component?

    A FormInput would consist of a label and input element. It can be a child of an enclosing Form component, and the Form component can have multiple FormInput components as children.

2. Can a parent component access the state of a child component?

    State variables can typically only be passed locally. You need the magic of props to pass things from a parent to a child.

3. What can be passed along in a prop variable?

    Static variables or entire functions can be passed in props. For example, Form could define an onChange handler and then pass it to the child FormInput through props so that something like `props.onChange` can be called within FormInput.

   [Return to Index](index.md)
