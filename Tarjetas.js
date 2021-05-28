import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import Detalle from './Detalle';

class Tarjetas extends Component {
render(){
    return (
        <View style={testilo.container}> 
            <Text style={testilo.elimino}>X</Text>
            {/* <Text> <img src="./assets/icon.png" /></Text> */}
            <Text style={testilo.titulos}>Apellido</Text>
            <Text style={testilo.titulos}>Nombre</Text>
            <Text style={testilo.titulos}>Email</Text>
            <Text style={testilo.titulos}>Fecha de nacimiento (edad)</Text>
            {/* <Detalle/> */}
        </View>
    )

    }
}

const testilo = StyleSheet.create({
    container: {
      flex: 1,
      height: 10,
      width: 300,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
    },
    elimino: {
        fontSize: 10,
        color: 'red',
    },
    titulos:{
       fontWeight: "bold",
    },
  });

export default Tarjetas;
