import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import {importar, home} from '../Estilo/Styles';

export class Importar extends Component {
    render(){
        return (
            <View style={importar.container}>
                <View style={home.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={home.lineatexto}>
                            ≡
                        </Text>
                    </TouchableOpacity>
                </View>
            
             <Text style={importar.titulo}>Importar</Text>
             <Text style={importar.atras} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>

            </View>
        )

    }
}
