import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {home, tarjet} from '../Estilo/Styles';
import  Importadas from '../components/Importadas';
import  Ver from './Ver';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Importar extends Component {
    constructor(){
        super()
        this.state={
            fav: [],
            items: [],
            numero: "",
            papelera:[],
        }
        this.agregarApapelera = this.agregarApapelera.bind(this);
    }

   async componentDidMount(){
       await this.getDataimportados()
    }

    async getDataimportados(){
        try{
            let result = await AsyncStorage.getItem('fav')
            result = JSON.parse(result)
            this.setState({fav:result})
            console.log(result);
        } catch(e){
            console.log(e);
        }
    }

    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
        return(
            <Importadas item={item} agregarApapelera={this.agregarApapelera} />
        )
    }


    fetchAPI(numero) {
    getData(numero)
     .then(results =>{
         this.setState({items:results})
     })
   }


// A PAPELERA
   async agregarApapelera(item){ //agrega a fila el contacto seleccionado
    try{
        let result = await AsyncStorage.getItem('papelera')
        result = JSON.parse(result)
        if (result == null) result=[]
        result.push(item)
        const toJSON = JSON.stringify(result)
        await AsyncStorage.setItem('papelera', toJSON)
        const nuevaLista2 = this.state.items.filter(itemList2 => { // elimina el elegido
            return itemList2.login.uuid != item.login.uuid
        });
        console.log(nuevaLista2) // NO LLEGA!!!!!!!!!!     

        this.setState({items: nuevaLista2})
    }catch(e){
        console.log(e)
    }
}

// clearAsyncStorage = async() => {
//     AsyncStorage.clear();
// }    

//filtros
// filtrarPorNombre(text){
//     if (text.length > 0) {
//         let buscarNombre = this.state.items.filter( item => {
//             let nombre = item.name.first.toUpperCase();
//             let inputTexto = text.toUpperCase();
//             return nombre.includes(inputTexto)
//         });

//         this.setState({
//             items: buscarNombre,
//             text: text
//         })

//     } else {
//         this.setState({
//             items: this.state.tarjetasBuscadas
//         })
//     }
// }

// filtrarPorApellido(text){
//     if (text.length > 0) {
//         let buscarApellido = this.state.items.filter( item => {
//             let apellido = item.name.last.toUpperCase();
//             let inputTexto = text.toUpperCase();
//             return apellido.includes(inputTexto)
//         });

//         this.setState({
//             items: buscarApellido,
//             text: text,
//         })

//     }else {
//         this.setState({
//             items: this.state.items
//         })
//     }
// }

// filtrarPorPais(text){
//     if (text.length > 0) {
//         let buscarPais = this.state.items.filter( item => {
//             let pais = item.location.country.toUpperCase();
//             let inputTexto = text.toUpperCase();
//             return pais.includes(inputTexto)
//         });

//         this.setState({
//             items: buscarPais,
//             text: text,
//         })

//     }else {
//         this.setState({
//             items: this.state.items
//         })
//     }
// }

// filtrarPorCiudad(text){
//     if (text.length > 0) {
//         let buscarCiudad = this.state.items.filter( item => {
//             let ciudad = item.location.city.toUpperCase();
//             let inputTexto = text.toUpperCase();
//             return ciudad.includes(inputTexto)
//         });

//         this.setState({
//             items: buscarCiudad,
//             text: text,
//         })

//     }else {
//         this.setState({
//             items: this.state.items
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
             <Text style={tarjet.titulo}>Contactos favoritos</Text>
             {/* <TouchableOpacity onPress={() => this.clearAsyncStorage()}><Text>Limpiar memoria</Text></TouchableOpacity> */}
                                                                                        
             <View style={tarjet.flat}>
             {/* <Text style={tarjet.coment}>Buscar Tarjetas</Text>
            <TextInput placeholder="Nombre" onChangeText={ (text) => this.filtrarPorNombre(text)}></TextInput>
            <TextInput placeholder="Apellido" onChangeText={ (text) => this.filtrarPorApellido(text)}></TextInput>
            <TextInput placeholder="País" onChangeText={ (text) => this.filtrarPorPais(text)}></TextInput>
            <TextInput placeholder="Ciudad" onChangeText={ (text) => this.filtrarPorCiudad(text)}></TextInput> */}

                <FlatList data={this.state.fav} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
             </View>


             <Text style={tarjet.atras} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>
             </View>
             </View>

        
        )

    }
}