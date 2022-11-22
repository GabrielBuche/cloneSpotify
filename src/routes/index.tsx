import React from 'react';

import { NavigationContainer, StackRouter } from '@react-navigation/native';

import  StackRoutes  from './stack.route' 

const Routes: React.FC = () => {
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )

}

export default Routes;