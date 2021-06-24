import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ver from './screens/Ver';
import {Home} from './screens/Home';
import {Papelera} from './screens/Papelera';
import {Importar} from './screens/Importar';
import {Acercade} from './screens/Acercade';


// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component{
  render(){
    return(
        <NavigationContainer>

          {/* <Stack.Navigator screenOptions={{
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
          </Stack.Navigator> */}

          <Drawer.Navigator 
                initialRouteName="Home"
                drawerPosition="left"
                drawerType="back"
                overlayColor='grey'
                drawerStyle={{
                  backgroundColor:'orange',
                  width: 200,
                }}
                drawerContentOptions={{
                  actitiveBackgroundColor:'grey',
                  activeTintColor: 'white',
                  inactiveTintColor: 'black',
                }}
              >
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Contactos" component={Ver}/>
            <Drawer.Screen name="Favoritos" component={Importar}/>
            <Drawer.Screen name="Papelera" component={Papelera}/>
            <Drawer.Screen name="Acerca de..." component={Acercade}/>
          </Drawer.Navigator>
        
        </NavigationContainer>
    )
  }
}

export default App;