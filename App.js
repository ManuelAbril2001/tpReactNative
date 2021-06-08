import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImportCards from './screens/ImportCards';
import {Home} from './screens/Home';
import {Papelera} from './screens/Papelera';
import {Importar} from './screens/Importar';
import {Buscar} from './screens/Buscar';

const Stack = createStackNavigator();

class App extends Component{
  render(){
    return(
        // <ImportCards/>
        <NavigationContainer>

          <Stack.Navigator screenOptions={{
              headerStyle:{
                backgroundColor: 'orange'
              },
              headerTintColor: 'white'
            }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Tarjetas" component={ImportCards}/>
            <Stack.Screen name="Papelera" component={Papelera}/>
            <Stack.Screen name="Importar" component={Importar}/>
            <Stack.Screen name="Buscar" component={Buscar}/>
          </Stack.Navigator>

        </NavigationContainer>
    )
  }
}

export default App;