import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Buscar from './Buscar';
import Tarjetas from './Tarjetas';

class App extends Component {
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
  }
});

export default App;