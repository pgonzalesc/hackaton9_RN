import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home  from './components/screens/Home';
import Finance from './components/screens/Finance';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function HomeScreen() {
  return (
    <Home />
  );
}

function SettingsScreen() {
  return (
    <Finance />
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Inicio"
        tabBarOptions={{
          activeTintColor: '#1828AA',
          activeBackgroundColor: '#B0B0B0',
          inactiveTintColor: '#000',
          inactiveBackgroundColor: '#e1e1e1'
        }}
      >
        <Tab.Screen 
          name="Inicio" 
          component={HomeScreen} 
        />
        <Tab.Screen name="Finanzas" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
