/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import { NavigationContainer, StackActions } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginPage from './Components/LoginPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import MainPage from './Components/MainPage/MainPage';
import DonateBlood from './Components/DonateBlood/DonateBlood';
import FindBlood from './Components/FindBlood/FindBlood';


const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />

          <Stack.Navigator >
            <Stack.Screen name=" " component={LoginPage} options={{ headerShown: false}} />
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false}}/>
            <Stack.Screen name="FindBlood" component={FindBlood} />
            <Stack.Screen name="DonateBlood" component={DonateBlood} />
          </Stack.Navigator>
      

      </NavigationContainer>
    </>

  );
};





const styles = StyleSheet.create({
  container1: {
    
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 2,
    borderColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  c1Text: {
    color: 'red',
    fontSize: 18
  },
  container2: {
    // backgroundColor: 'green',
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 2,
    borderColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  c2Text: {
    color: 'pink',
    fontSize: 18
  },
});

export default App;
