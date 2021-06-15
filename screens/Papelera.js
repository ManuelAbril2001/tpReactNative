import React, {Component} from 'react';
import { StyleSheet, Button, Animated, Easing, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {home, papelera} from '../Estilo/Styles';


export class Papelera extends Component {

    render(){
        return (
            <View style={papelera.container}>
                 <View style={home.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={home.lineatexto}>
                            ≡
                        </Text>
                    </TouchableOpacity>
                </View>

             <Text style={papelera.titulo}>Papelera</Text>
             
             <Text style={papelera.atras} onPress={ () => this.props.navigation.goBack()} >
                Volver atras </Text>

            </View>
        )

    }
}