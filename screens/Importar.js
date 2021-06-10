import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import {importar} from '../Estilo/Styles';

export class Importar extends Component {
    render(){
        return (
            <View style={importar.container}>

             <Text style={importar.titulo}>Importar</Text>
             <Text style={importar.texto} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>

            </View>

        )

    }
}