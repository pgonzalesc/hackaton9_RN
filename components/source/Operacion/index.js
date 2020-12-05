import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SrcOperacion = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.panel}>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Pagos y Recargas</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Transferencias</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Retiro</Text>
                </View>
                <View style={{}}>
                    <Text style={{backgroundColor: '#e1e1e1', padding: 15}}>OPERACIONES FRECUENTES</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItemOperacion}>Luz</Text>
                    <Text style={styles.textItemOperacion}>Desde Cuenta Ahorro</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItemOperacion}>Agua</Text>
                    <Text style={styles.textItemOperacion}>Desde Cuenta Ahorro</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItemOperacion}>Internet</Text>
                    <Text style={styles.textItemOperacion}>Desde Cuenta Ahorro</Text>
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
    panel: {
        flex:1,
        backgroundColor: '#FFF',
        margin: 15,
        padding: 10,
    },
    item: {
        borderBottomWidth: 2,
        borderColor: '#275EA8',
        paddingHorizontal: 5,
        paddingVertical: 15,
    },
    textItem: {
        fontSize: 20
    },
    textItemOppperacion: {
        fontSize: 16
    }
});

export default SrcOperacion;