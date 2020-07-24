# Class 34 Reading

React Native lets developers build mobile apps with native components instead of web components. Let's examine the hello world app [here](https://reactnative.dev/docs/tutorial)

```
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default LotsOfGreetings;
```

Just like with regular react app we need to import our modules at the time. The React Native components are `Text`, `View`, and `StyleSheet`.

We use `View` as a container for other components. Its name is...self-explanatory. `Text` is obviously a container for text. `StyleSheet` is the dirty JS way of adding styling to your component.

State and props appear to be handled the same way in React and React Native. Hooks can be used too. Hooray!

[Return to Index](index.md)
