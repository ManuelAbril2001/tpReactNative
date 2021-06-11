import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import {home} from '../Estilo/Styles';

export class Home extends Component {
    render(){
        return (
            <View style={home.containerHome}>
                <Text style={home.titulos}>Inicio</Text>
                <Text style={home.texto} onPress={ () => this.props.navigation.navigate('Contactos')}>
                    Ver contactos
                </Text>
                <Text style={home.texto} onPress={ () => this.props.navigation.navigate('Importar')}>
                    Importar contactos
                </Text>
                <Text style={home.texto} onPress={ () => this.props.navigation.navigate('Buscar')}>
                    Buscar/Modificar contactos
                </Text>
                <Text style={home.texto} onPress={ () => this.props.navigation.navigate('Papelera')}>
                    Papelera de reciclaje
                </Text>

                <Text style={home.footer} >Developers: Manuel Abril & Valentina Campitelli</Text>

            </View>

        )

    }
}