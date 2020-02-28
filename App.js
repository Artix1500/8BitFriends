import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Discover from './views/Discover.js';
import Login from './views/Login.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerLeft: null}}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{headerLeft: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
