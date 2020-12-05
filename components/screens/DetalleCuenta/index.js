import React from 'react';
import { } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SrcDetalleCuenta from '../../source/DetalleCuenta';

const Stack = createStackNavigator();

const DetalleCuenta = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Detalle Cuenta" component={SrcDetalleCuenta}/>
        </Stack.Navigator>
    )
}

export default DetalleCuenta;