import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Buscar from './Buscar';
import Tarjetas from './Tarjetas';
import AsyncStorage from '@react-native-async-storage/async-storage';


class App extends Component {
  constructor(){
    super();
  }

  
  render(){
  return (
    <View style={aestilo.container}>

      <Text style={aestilo.text}>Tarjetas vol2</Text>

      <Tarjetas/>

      <Buscar/>

    </View>
  );
}
}

const aestilo = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
  }
});

export default App;