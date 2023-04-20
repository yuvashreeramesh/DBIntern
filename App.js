import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CarList from './src/screens/carList';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="CarList" component={CarList} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;