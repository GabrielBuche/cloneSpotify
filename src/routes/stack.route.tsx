import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SelectLoginMethod } from '../screnns/selectLoginMethod';
import { FollowFree } from '../screnns/followFree';
import { Login } from '../screnns/login';

const { Screen, Navigator } = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="SelectLoginMethod"
        component={SelectLoginMethod}
        options={{ headerShown: false }} 
      />

      <Screen
        name="FollowFree"
        component={FollowFree}
        options={{
          title: 'Criar conta',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#1b1b1b', 
          },
          headerTitleAlign: 'center',
        }}
      />

      <Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#1b1b1b', 
          },
        }}
      />

    </Navigator>
  );
}


export default StackRoutes;