import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SrcFinance from '../../source/Finance';

const Stack = createStackNavigator();

const Finance = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Mis Finanzas" component={SrcFinance} />
        </Stack.Navigator>
    )
}

export default Finance;