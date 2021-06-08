import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';


export class Home extends Component {
    render(){
        return (
            <View style={styles.container}>

                <Text style={styles.titulo}>Bienvenid@</Text>
                <Text style={styles.texto} onPress={ () => this.props.navigation.navigate('Tarjetas')}>
                    Ver tarjetas
                </Text>
                <Text style={styles.texto} onPress={ () => this.props.navigation.navigate('Importar')}>
                    Importar tarjetas
                </Text>
                <Text style={styles.texto} onPress={ () => this.props.navigation.navigate('Buscar')}>
                    Buscar/Modificar tarjetas
                </Text>
                <Text style={styles.texto} onPress={ () => this.props.navigation.navigate('Papelera')}>
                    Papelera de reciclaje
                </Text>

                <Text style={styles.footer} >Developers: Manuel Abril & Valentina Campitelli</Text>

            </View>

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        color: 'green',
        marginTop: 3,
        marginBottom: 60,
    },
    texto: {
        fontSize: 20,
        marginBottom: 20,
    },
    footer: {
        marginTop: 300,
        fontSize: 10,
        color: 'grey',
    },
})
