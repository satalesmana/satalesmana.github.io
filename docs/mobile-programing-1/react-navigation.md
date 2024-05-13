---
sidebar_position: 24
---

# React Navigation

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code.

## Installation
Install the required packages in your React Native project:


```bash
npm install @react-navigation/native

npm install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack

```

This will install versions of these libraries that are compatible.

The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install 
`@react-navigation/native-stack`

## Creating a native stack navigator

```js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```

## Passing parameters to routes
Remember when I said "more on that later when we talk about `params`!"? Well, the time has come.

There are two pieces to this:

1. Pass params to a route by putting them in an object as a second parameter to the navigation.navigate function: `navigation.navigate('RouteName', { /* params go here */ })`
2. Read the params in your screen component: `route.params.`

We recommend that the params you pass are JSON-serializable. That way, you'll be able to use state persistence and your screen components will have the right contract for implementing deep linking.

For example, say if you have a Profile screen. When navigating to it, you might be tempted to pass the user object in the params:
```js
navigation.navigate('Profile', {
  user: {
    id: 'jane',
    firstName: 'Jane',
    lastName: 'Done',
    age: 25,
  },
});
```
This looks convenient, and lets you access the user objects with `route.params.user` without any extra work.



```js
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
```

## Common actions
The library exports several action creators under the `CommonActions` namespace. You should use these action creators instead of writing action objects manually.

### navigate
The `navigate` action allows to navigate to a specific route. It takes the following arguments:
 - `name` - string - A destination name of the route that has been registered somewhere..
 - `key` - string - The identifier for the route to navigate to. Navigate back to this route if it already exists..
 - `params` - object - Params to merge into the destination route..
The options object passed should at least contain a key or name property, and optionally params. If both key and name are passed, stack navigator will create a new route with the specified key if no matches were found.

```js
import { CommonActions } from '@react-navigation/native';

navigation.dispatch(
  CommonActions.navigate({
    name: 'Profile',
    params: {
      user: 'jane',
    },
  })
);
```

### reset
The `reset` action allows to reset the navigation state to the given state. It takes the following arguments:
```js
import { CommonActions } from '@react-navigation/native';

navigation.dispatch(
  CommonActions.reset({
    index: 1,
    routes: [
      { name: 'Home' },
      {
        name: 'Profile',
        params: { user: 'jane' },
      },
    ],
  })
);
```

### goBack
The `goBack` action creator allows to go back to the previous route in history. It doesn't take any arguments.
```js
import { CommonActions } from '@react-navigation/native';

navigation.dispatch(CommonActions.goBack());
```

### setParams
The `setParams` action allows to update params for a certain route. It takes the following arguments:
```js
import { CommonActions } from '@react-navigation/native';

navigation.dispatch(CommonActions.setParams({ user: 'Wojtek' }));
```