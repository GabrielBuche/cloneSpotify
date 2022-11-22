import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screnns/login/index';

const { Screen, Navigator } = createNativeStackNavigator();

 const StackRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Navigator>
  );
}


export default StackRoutes;