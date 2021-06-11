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
import {tarjet} from '../Estilo/Styles';

class ImportCards extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            numero: "",
        }
    }


keyExtractor = (item,idx) => idx.toString();
renderItem= ({item}) => {
    return(
        <Tarjetas item={item} />
    )
}

fetchAPI(numero) {
    getData(numero)
     .then(results =>{
         console.log(results);
         this.setState({items:results})
     })
   }


render(){
    return (
    <View style={tarjet.todo}>
        <Text style={tarjet.titulo}>Tus contactos</Text>

        <TextInput placeholder='Cuantas tarjetas queres importar' onChangeText={ (text) => this.fetchAPI(text)} /> 

        <View style={tarjet.flat}>
            <FlatList data={this.state.items} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
        </View>
        <Text style={tarjet.atras} onPress={ () => this.props.navigation.goBack()}> Volver atras </Text>
    </View>
    )

    }
}

export default ImportCards;