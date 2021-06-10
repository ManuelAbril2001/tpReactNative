import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import {papelera} from '../Estilo/Styles';


export class Papelera extends Component {
    render(){
        return (
            <View style={papelera.container}>

             <Text style={papelera.titulo}>Papelera</Text>
             <Text style={papelera.texto} onPress={ () => this.props.navigation.goBack()} >
                Volver atras </Text>

            </View>

        )

    }
}