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
        this.getDataimportados()
    }

    async favoritos(){
    try{
        this.importadas();
        const fav = [...this.state.seleccionadasPrevias, ...this.state.seleccionados]

        console.log(fav.length);
   

        const jsonUsers = JSON.stringify(fav);

        const seleccionadosLength = "se importaron" + this.state.seleccionados.length + "tarjetas seleccionados"
        await AsyncStorage.setItem('fav', jsonUsers)
        if(this.state.seleccionados.length != 0){
        // this.quitar(this.state.seleccionados, this.state.personas)
        console.log('se guarda');
        }
        else{
            console.log('no se guarda');
        }
        this.setState({seleccionados: []})
    }catch(e){
        console.log(e);
    }
}

   


    

}

export default Component