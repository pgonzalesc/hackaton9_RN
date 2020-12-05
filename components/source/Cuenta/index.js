import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SrcCuenta = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.panelCuenta}>
                <View style={styles.containerTitle}>
                    <Text style={styles.titleCuenta}>Cuenta Ahorro</Text>
                </View>
                <View style={styles.textSaldo}>
                    <Text style={styles.saldo}>S/.200.00</Text>
                    <Text style={styles.saldo}>Saldo Disponible</Text>
                </View>

                <View style={styles.textSaldo}>
                    <Text style={styles.saldo}>S/.200.00</Text>
                    <Text style={styles.saldo}>Saldo Contable</Text>
                </View>

                <View style={styles.textSaldo}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Detalle Cuenta')}>
                        <Text style={styles.textDetalleCuenta}>Detalle de cuenta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275EA8',
    },
    containerTitle: {
        marginVertical: 15,
    },
    titleCuenta: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    panelCuenta: {
        backgroundColor: '#FFF',
        margin: 10,
    },
    saldo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#212121'
    },
    textSaldo: {
        margin: 10,
    },
    textDetalleCuenta: {
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#3154D7',
        textAlign: 'center',
    },
});

export default SrcCuenta;