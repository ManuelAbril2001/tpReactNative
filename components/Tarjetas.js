import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity, Separator, Button, Modal } from 'react-native';
import {getData} from "../api/RandomUser";
import {tarjet} from '../Estilo/Styles';

class Tarjetas extends Component {
    constructor(){
        super();
    this.state = {
        error: null,
        isLoaded: false,
        numero: "",
        items: [],
        showModal: false,
      } 
    }
 
render(){
const { error, isLoaded } = this.state;
const {item} = this.props
return (
        <View key={item.login.uuid} style={tarjet.container}>
          <View style={tarjet.tarjeta}>
              <Text style={tarjet.eliminar}>X</Text>
              <View style={tarjet.contenido}>
              <Image style={tarjet.imagen} source={{uri: item.picture.large}}/>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Nombre: </Text>{item.name.first} </Text> 
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Apellido: </Text>{item.name.last} </Text>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Email: </Text> {item.email} </Text>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Fecha de nacimiento: </Text> {item.dob.date.substring(0,10)} ({item.dob.age}) </Text>
            <Text style={tarjet.boton} title="Ver detalle del contacto" onPress={()=> this.setState({showModal: !this.state.showModal})}> Ver detalle del contacto </Text>
          </View>

          <Modal visible={this.state.showModal} animationType="slide">
            <View style={tarjet.verdetalle}>
              <Text style={tarjet.nombre}> Mas detalles <Text style={tarjet.interior}> {item.name.first} {item.name.last} </Text></Text>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Calle y Número: </Text> {item.location.street.name}, {item.location.street.number}</Text>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Ciudad/Estado: </Text> {item.location.city}</Text>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> País: </Text> {item.location.country}</Text>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Código postal: </Text> {item.location.postcode}</Text>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Fecha de Registro: </Text> {item.registered.date.substring(0,10)}</Text>
              <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Teléfono: </Text> {item.phone}</Text>
              <Text style={tarjet.boton} title="Volver atras" onPress={()=> this.setState({showModal: !this.state.showModal})}> Volver atras</Text>
            </View>
          </Modal>
          </View>
        </View>
    )
  }
}


export default Tarjetas;