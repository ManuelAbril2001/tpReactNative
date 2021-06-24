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

    //filtros
    filtrarNombre(text){

        if (text.length > 0) {
            let buscarNombre = this.state.items.filter( item => {
                let nombre = item.name.first.toUpperCase();
                let inputTexto = text.toUpperCase();
                return nombre.includes(inputTexto)
            });
    
            this.setState({
                items: buscarNombre,
                text: text
            })
    
        } else {
            this.setState({
                items: this.state.tarjetasBuscadas
            })
        }
    }
    filtrarApellido(text){
    
        if (text.length > 0) {
            let buscarApellido = this.state.items.filter( item => {
                let apellido = item.name.last.toUpperCase();
                let inputTexto = text.toUpperCase();
                return apellido.includes(inputTexto)
            });
    
            this.setState({
                items: buscarApellido,
                text: text,
            })
    
        }else {
            this.setState({
                items: this.state.items
            })
        }
    }
    filtrarPais(text){
    
        if (text.length > 0) {
            let buscarPais = this.state.items.filter( item => {
                let pais = item.location.country.toUpperCase();
                let inputTexto = text.toUpperCase();
                return pais.includes(inputTexto)
            });
    
            this.setState({
                items: buscarPais,
                text: text,
            })
    
        }else {
            this.setState({
                items: this.state.items
            })
        }
    }
    filtrarCiudad(text){
    
        if (text.length > 0) {
            let buscarCiudad = this.state.items.filter( item => {
                let ciudad = item.location.city.toUpperCase();
                let inputTexto = text.toUpperCase();
                return ciudad.includes(inputTexto)
            });
    
            this.setState({
                items: buscarCiudad,
                text: text,
            })
    
        }else {
            this.setState({
                items: this.state.items
            })
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
        
        <Text style={{textAlign: 'center'}} >Buscar Tarjetas</Text>
            <TextInput style={{textAlign: 'center'}} placeholder="Nombre" onChangeText={ (text) => this.filtrarNombre(text)}></TextInput>
            <TextInput style={{textAlign: 'center'}} placeholder="Apellido" onChangeText={ (text) => this.filtrarApellido(text)}></TextInput>
            <TextInput style={{textAlign: 'center'}} placeholder="País" onChangeText={ (text) => this.filtrarPais(text)}></TextInput>
            <TextInput style={{textAlign: 'center'}} placeholder="Ciudad" onChangeText={ (text) => this.filtrarCiudad(text)}></TextInput>

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
