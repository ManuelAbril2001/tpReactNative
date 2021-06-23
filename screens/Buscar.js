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
import Importadas from '../components/Importadas';
import Tarjetas from '../components/Tarjetas';
import {getData} from '../api/RandomUser';
import {tarjet, home} from '../Estilo/Styles';

export class Buscar extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            palabra: "",
            fav:[],
            tarjetasBuscadas: [],
        }        
        this.filtrarNombre = this.filtrarNombre.bind(this);
    }


    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
        return(
            <Tarjetas item={item} filtrarNombre={this.filtrarNombre} />
        )
    }


async filtrarNombre(text){
    try{
    const filtroNombre = this.state.items.filter(itemList => { 
                return itemList.name == item.name
        });
            this.setState({items: filtroNombre})
        }catch(e){
            console.log(e)
        }
     
}

// filtrarApellido(text){

//     if (text.length > 0) {
//         let buscarApellido = this.state.tarjetas.filter( item => {
//             let apellido = item.name.last.toUpperCase();
//             let inputTexto = text.toUpperCase();
//             return apellido.includes(inputTexto)
//         });

//         this.setState({
//             tarjetas: buscarApellido,
//             text: text,
//         })

//     }else {
//         this.setState({
//             tarjetas: this.state.items
//         })
//     }
// }

// filtrarPais(text){
//     if (text.length > 0) {
//         let buscarPais = this.state.tarjetas.filter( item => {
//             let pais = item.location.country.toUpperCase();
//             let inputTexto = text.toUpperCase();
//             return nombre.includes(inputTexto)
//         });

//         this.setState({
//             tarjetas: buscarPais,
//             text: text,
//         })

//     }else {
//         this.setState({
//             tarjetas: this.state.items
//         })
//     }
// }



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

                        <TextInput style={tarjet.detalle} placeholder='Buscar por nombre' onChangeText={ (text) => this.filtrarNombre(text)}></TextInput>
                        {/* <TextInput style={tarjet.detalle} placeholder='Buscar por apellido' onChangeText={ (text) => this.filtrarApellido(text)}></TextInput>
                        <TextInput style={tarjet.detalle} placeholder='Buscar por pais' onChangeText={ (text) => this.filtrarPais(text)}></TextInput>
         */}

        <View style={tarjet.flat}>
            <FlatList data={this.state.items} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
        </View>
        
        <Text style={tarjet.atras} onPress={ () => this.props.navigation.goBack()}> Volver atras </Text>
    </View>
    </View>
    )

    }
}