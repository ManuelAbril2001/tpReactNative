import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {importar, home} from '../Estilo/Styles';
import  Importadas from '../components/Importadas';

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

             <Text style={importar.titulo}>Contactos favoritos</Text>
             <Text style={importar.atras} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>

            </View>
        )

    }
}
