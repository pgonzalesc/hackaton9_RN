import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SrcCuenta = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Cuenta Ahorro</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275EA8',
    },
});

export default SrcCuenta;