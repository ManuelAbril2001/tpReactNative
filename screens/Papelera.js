import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {home, tarjet} from '../Estilo/Styles';
import  Papelerac from '../components/Papelerac';
import  Ver from './Ver';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Papelera extends Component {
    constructor(props){
        super(props);
        this.state={
            fav: [],
            items: [],
            numero: "",
            papelera:[],
            eliminar: [],
            itemsBorrados: [],
        }
        // this.agregarAeliminar = this.agregarAeliminar.bind(this);
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
            <Papelerac item={item} eliminarTarjetas={this.eliminarTarjetas.bind(this)}
            // agregarAeliminar={this.agregarAeliminar} 
            />
        )
    }


    fetchAPI(numero) {
    getData(numero)
     .then(results =>{
         this.setState({items:results})
     })
   }

   eliminarTarjetas (item){
    console.log(item)
     let resultados = this.state.items.filter(item => {
    return (item.login.uuid !== items.login.uuid)
    })

    this.setState({items: resultados})

    alert('Se eliminó tu tarjeta')
}

//    async agregarAeliminar(item){ //agrega a fila el contacto seleccionado
//     try{
//         let result = await AsyncStorage.getItem('papelera')
//         result = JSON.parse(result)
//         if (result == null) result=[] 
//         result.push(item)
//         const toJSON = JSON.stringify(result)
//         await AsyncStorage.setItem('papelera', toJSON)
        
//         const nuevaLista3 = this.state.items.filter(itemList3 => { // elimina el elegido
//             return itemList3.login.uuid != item.login.uuid
//         });

//         this.setState({items: nuevaLista3})

//     }catch(e){
//         console.log(e)
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
