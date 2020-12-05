import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const Home = ()=> {
    return (
        <View style={styles.container}>
            <View>
              <Text style={styles.textHeader}>Bienvenido</Text>
            </View>
            <View style={styles.ingreso}>
                <Text style={styles.textIngreso}>Ingresos</Text>
                <Text style={styles.numberIngreso}>S/.200.00</Text>
            </View>
            <View style={styles.gasto}>
                <Text style={styles.textGasto}>Gastos</Text>
                <Text style={styles.numberGasto}>S/.100.00</Text>
            </View>
            <View style={styles.cuentas}>
                <View style={styles.titleCuenta}>
                    <Text style={styles.textCuenta}>CUENTAS</Text>
                </View>
                <View style={styles.containerVerCuenta}>
                    <Text style={styles.textVerCuenta}>Ver Cuenta</Text>
                    <Text style={styles.numberVerCuenta}>S/.200.00</Text>
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
  textHeader: {
    textAlign: 'center',
    margin: 5,
    color: '#e1e1e1',
    fontSize: 15
  },
  ingreso: {
    //flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    //justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textIngreso: {
      marginRight: 10,
      fontWeight: 'bold',
      fontSize: 15,
      color: '#e1e1e1',
  },
  numberIngreso: {
      fontSize: 20,
      color: '#e1e1e1',
  },
  gasto: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textGasto: {
      marginRight: 10,
      fontWeight: 'bold',
      fontSize: 15,
      color: '#e1e1e1',
  },
  numberGasto: {
      fontSize: 20,
      color: '#e1e1e1',
      textAlign: 'right',
      width: '85%',
  },
  cuentas: {
      backgroundColor: '#e1e1e1',
      marginVertical: 15,
      marginHorizontal: 20,
      paddingVertical: 10,
      paddingHorizontal: 15,
  },
  textCuenta: {
      fontSize:20,
  },
  containerVerCuenta: {
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 15,
  },
  textVerCuenta: {
      marginRight: 10,
      fontWeight: 'bold',
      fontSize: 15,
      color: '#3154D7'
  },
  numberVerCuenta: {
      fontSize: 20,
      textAlign: 'right',
      width: '75%',
      color: '#212121'
  },
  titleCuenta:{
      marginBottom: 15,
  }
});

export default Home;