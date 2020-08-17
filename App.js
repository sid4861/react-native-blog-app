import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/Screens/IndexScreen';
import { Provider } from './src/Context/BlogContext';

const navigator = createStackNavigator({
  IndexScreen: IndexScreen
}, {
  initialRouteName: 'IndexScreen',
  defaultNavigationOptions: {
    title: 'Blog App'
  }
});

const styles = StyleSheet.create({});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}