
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import {Platform, StyleSheet, Text, View} from 'react-native';

 import AddItem from './Src/Screen/AddItem'; 
import Home from './Src/Screen/Home';
import SignUp from './Src/Screen/SignUp';
import Login from './Src/Screen/Login';
import ListItem from './Src/Screen/ListItem';

const AppNavigator = createStackNavigator(
{
  Home,
  AddItem,
  SignUp,
  Login,
  ListItem
  },
  {
    initialRouteName: 'ListItem'
  }

);

const AppContainer = createAppContainer(AppNavigator);


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <AppContainer/>
    );
  }
}
