import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import Home from './Screens/Home'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export default class App extends Component {
  render() {
    return (
    <AppContainer/>
    );
  }
}
const Navigator=createSwitchNavigator({
  WelcomeScreen: {
    screen:WelcomeScreen
  },
  Home:{screen:Home},
Drawer:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(Navigator)
