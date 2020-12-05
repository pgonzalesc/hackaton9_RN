import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();


function screen() {
    return (
        <View style={styles.container}>
          <View style={styles.containerMonth}>
              <Text style={styles.textMonth}>Diciembre</Text>
          </View>

            <View style={styles.containerIngreso}>
                <Image 
                    style={styles.image}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Arrow_Up.svg/1200px-Green_Arrow_Up.svg.png'}}
                />
                <Text style={styles.textIngreso}>Ingresos</Text>
                <Text style={styles.numIngreso}>S/. 200.00</Text>
            </View>

            <View style={styles.containerIngreso}>
                <Image 
                    style={styles.image}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Green_Arrow_Down.svg/768px-Green_Arrow_Down.svg.png'}}
                />
                <Text style={styles.textIngreso}>Gastos</Text>
                <Text style={styles.numIngreso}>S/. 100.00</Text>
            </View>
        </View>
    )
}

const Finance = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Mis Finanzas" component={screen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275EA8',
    },
    containerMonth: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    textMonth: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e1e1e1',
    },
    containerIngreso: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: 'center',
    },
    textIngreso: {
        fontWeight: 'bold',
        fontSize: 18,
        width: '50%',
        marginLeft:10,
    },
    numIngreso: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign:"center"
    },
    image: {
      width: width / 14,
      height: height / 28,
    },
});

export default Finance;