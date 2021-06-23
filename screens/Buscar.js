import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    TextInput,
} from 'react-native';
import Tarjetas from '../components/Tarjetas';
import {getData} from '../api/RandomUser';
import {tarjet, home} from '../Estilo/Styles';

export class Buscar extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            palabra: "",
            fav:[]

        }        
    }


    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
        return(
            <Tarjetas item={item} />
        )
    }


    fetchAPI(palabra) {
    getData(palabra)
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
        <Text style={tarjet.titulo}>Buscar contactos</Text>

        <TextInput style={{textAlign: 'center'}} placeholder='Buscar contactos' onChangeText={ (text) => this.fetchAPI(text)}/> 
        

        <View style={tarjet.flat}>
            <FlatList data={this.state.items} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
        </View>
        
        <Text style={tarjet.atras} onPress={ () => this.props.navigation.goBack()}> Volver atras </Text>
    </View>
    </View>
    )

    }
}