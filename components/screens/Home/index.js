import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SrcHome from '../../source/Home';
import SrcCuenta from '../../source/Cuenta';
import SrcDetalleCuenta from '../../source/DetalleCuenta';

const Stack = createStackNavigator();

const Home = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={SrcHome}/>
            <Stack.Screen name="Cuenta" component={SrcCuenta}/>
            <Stack.Screen name="Detalle Cuenta" component={SrcDetalleCuenta}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

});

export default Home;