import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import { StyleSheet, Image, Text,  Animated, Easing, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity, Separator, Button, Modal } from 'react-native';
import {getData} from "../api/RandomUser";
import {tarjet} from '../Estilo/Styles';

class Importadas extends Component{
    constructor(){
        super()
        this.state={
            fav: []
        }
    }

    componenDidMount(){
        this.getDataimportados
    }

    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
    return(
        <Tarjetas item={item}  quitarSeleccion={this.quitarSeleccion} />
    )
}

async getDataimportados(){
    try{
        const result = await AsyncStorage.getItem('fav')
        this.setState({seleccionadasPrevias: JSON.parse(result)})
    } catch(e){
        console.log(e);
    }
}
    

}

export default Component