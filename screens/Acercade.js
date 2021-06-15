import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {acerca, home} from '../Estilo/Styles';

export class Acercade extends Component {
    render(){
        return (
            
            <View style={acerca.container}>
                <View style={acerca.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={acerca.lineatexto}>
                            ≡
                        </Text>
                    </TouchableOpacity>
                </View>
             <Text style={acerca.titulo}>Acerca de nosotros</Text>
        <View style={acerca.todo}>
             <Text style={acerca.texto}> 
                <Text style={acerca.interior}> Developers: </Text> Manuel Abril & Valentina Campitelli
            </Text>
            <Text style={acerca.texto}> 
                <Text style={acerca.interior}> Nuestra historia: </Text> Fundado en mayo 2021, socios desde marzo 2019
            </Text>
            <Text style={acerca.texto}> 
                <Text style={acerca.interior}> Nuestros productos/servicios:</Text> Wxpertos en programacion
            </Text>
            <Text style={acerca.texto}> 
                <Text style={acerca.interior}> Casos de éxito: </Text> Programacion 1, 2 y media 3.
            </Text>
            <Text style={acerca.texto}> 
                <Text style={acerca.interior}> Opiniones de nuestros clientes: </Text> excelente grupo, excelentes resultados
             </Text>
             <Text style={acerca.texto}> 
                <Text style={acerca.interior}> Gracias a: </Text> randomuser.me
             </Text>
        </View>

            <View style={acerca.atras}>
            <Text style={acerca.atras} onPress={ () => this.props.navigation.goBack()} >
                Volver atras </Text>
            </View>

        </View>
        )

    }
}