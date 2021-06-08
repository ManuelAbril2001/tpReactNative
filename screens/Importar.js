import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';


export class Importar extends Component {
    render(){
        return (
            <View style={styles.container}>

             <Text style={styles.titulo}>Importar</Text>
             <Text style={styles.texto} onPress={ () => this.props.navigation.goBack()} >
                Go back! </Text>

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
        color: 'blue',
       },
    texto: {
       fontSize: 20,
   },
})