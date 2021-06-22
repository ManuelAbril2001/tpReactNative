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

class Ver extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            numero: "",
            fav:[]

        }
        this.agregarAseleccion = this.agregarAseleccion.bind(this);
        
    }


    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
        return(
            <Tarjetas item={item} agregarAseleccion={this.agregarAseleccion}  />
        )
    }


    fetchAPI(numero) {
    getData(numero)
     .then(results =>{
         this.setState({items:results})
     })
   }

    async agregarAseleccion(item){ //agrega a fila el contacto seleccionado
        try{
            let result = await AsyncStorage.getItem('fav')
            result = JSON.parse(result)
            if (result == null) result=[] 
            result.push(item)
            const toJSON = JSON.stringify(result)
            await AsyncStorage.setItem('fav', toJSON)
            
            const nuevaLista = this.state.items.filter(itemList => { // elimina el elegido
                return itemList.login.uuid != item.login.uuid
            });

            this.setState({items: nuevaLista})

        }catch(e){
            console.log(e)
        }
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
        <Text style={tarjet.titulo}>Tus contactos:</Text>

        <TextInput style={{textAlign: 'center'}} placeholder='¿Cuantos contactos queres importar?' keyboardType="numeric"  onChangeText={ (text) => this.fetchAPI(text)}/> 
        

        <View style={tarjet.flat}>
            <FlatList data={this.state.items} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
        </View>
        
        <Text style={tarjet.atras} onPress={ () => this.props.navigation.goBack()}> Volver atras </Text>
    </View>
    </View>
    )

    }
}

export default Ver;
