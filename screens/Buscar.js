import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import {buscar} from '../Estilo/Styles';

export class Buscar extends Component {
    render(){
        return (
            <View style={buscar.container}>

             <Text style={buscar.titulo}>Buscar</Text>
             <Text style={buscar.texto} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>

            </View>

        )

    }
}