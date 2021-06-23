import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {home, tarjet} from '../Estilo/Styles';
import  Papelerac from '../components/Papelerac';
import  Ver from './Ver';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Papelera extends Component {
    constructor(){
        super()
        this.state={
            fav: [],
            items: [],
            numero: "",
            papelera:[],
        }
    }

   async componentDidMount(){
       await this.getDatapapelera()
    }

    async getDatapapelera(){
        try{
            let result = await AsyncStorage.getItem('papelera')
            result = JSON.parse(result)
            this.setState({papelera:result})
            console.log(result);
        } catch(e){
            console.log(e);
        }
    }

    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
        return(
            <Papelerac item={item}/>
        )
    }


    fetchAPI(numero) {
    getData(numero)
     .then(results =>{
         this.setState({items:results})
     })
   }


    render(){
       return (
        <View style={home.padre}>
                <View style={home.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={home.lineatexto}>
                            ≡
                        </Text>
                    </TouchableOpacity>
                </View>

            <View style={tarjet.todo}>
             <Text style={tarjet.titulo}>Contactos en papelera</Text>

             <View style={tarjet.flat}>
                <FlatList data={this.state.papelera} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
             </View>

             <Text style={tarjet.atras} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>
             </View>
             </View>

        
        )

    }
}
