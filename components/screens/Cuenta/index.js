import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SrcCuenta from '../../source/Cuenta';

const Stack = createStackNavigator();

const Cuenta = ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cuenta" component={SrcCuenta}/>
        </Stack.Navigator>
    )
}

export default Cuenta;