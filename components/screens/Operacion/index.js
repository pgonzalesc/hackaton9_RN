import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SrcOperacion from '../../source/Operacion';

const Stack = createStackNavigator();

const Operacion = ()=> {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Operaciones" component={SrcOperacion} />
        </Stack.Navigator>
    )
}

export default Operacion;