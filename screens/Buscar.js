import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {buscar, home} from '../Estilo/Styles';

export class Buscar extends Component {
    render(){
        return (
            <View style={buscar.container}>
                <View style={home.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={home.lineatexto}>
                            ≡
                        </Text>
                    </TouchableOpacity>
                </View>

             <Text style={buscar.titulo}>Buscar</Text>
             <Text style={buscar.atras} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>

            </View>

        )

    }
}