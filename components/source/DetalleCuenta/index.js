import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SrcDetalleCuenta = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.panelData}>
                <Text style={styles.title}>GENERAL</Text>
                <Text style={styles.subTitle}>Tipo de Cuenta</Text>
                <Text>CUENTA AHORRO</Text>
                <Text style={styles.subTitle}>Descripción</Text>
                <Text>Cuenta Bancaria</Text>
                <Text style={styles.subTitle}>Número de Cuenta</Text>
                <Text>xxxx-xxxx-xxxxxxxxxx</Text>
                <Text style={styles.subTitle}>CCI</Text>
                <Text>xxx-xxx-xxxxxxxxxx-xx</Text>
                <Text style={[styles.title,{marginTop:25}]}>PARTICIPANTES</Text>
                <Text style={styles.subTitle}>Titular</Text>
                <Text>Pedro Gonzales Camacho</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275EA8',
    },
    panelData: {
        backgroundColor: '#FFF',
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 5,
    },
    subTitle: {
        color: '#787878',
        marginTop: 15,
    }
});

export default SrcDetalleCuenta;