# Class 33 Reading

![migrate reducers ducks](https://github.com/erikras/ducks-modular-redux/raw/master/migrate.jpg)

As great as Redux is, it does have a lot of boilerplate code. Fortunately, we have Redux toolkit and the almighty Ducks to help make life simpler.

Toolkit is SOPE or (PESO for Mexican/Filipino folks): Simple, Opinionated, Powerful, and Effective. It includes common use cases and addons. I'm not sure what they're talking about with that "slices of state", but maybe results are as delicious as a good slice of pizza. I like doing more with less code.

Ducks let you modularize your reducers and even let them be packaged into a library. That's nice...if I want to share my garbage code with others. Your code needs to be written a specific way, but for people following standard redux naming conventions, it shouldn't be too much of a hassle:

```
A module...

MUST export default a function called reducer()
MUST export its action creators as functions
MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library
```

You can enjoyu the magic of combineReducers with `ducks-reducer`, so using Ducks won't interfere with folks who want to maintain modularity in that sense.

[Return to Index](index.md)
