import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';

class Buscar extends Component {
    render(){
    return (
        <View style={bestilo.container}> 
            <Text style={bestilo.text}>Buscar tarjetas</Text>
        </View>
    )

    }
}

const bestilo = StyleSheet.create({
    container: {
      flex: 1,
      height: 6,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'white',
    }
  });

export default Buscar;