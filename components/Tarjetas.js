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
  
    componentDidMount() {
            async () => {
              let data = await getData()
            this.setState({
              isLoaded: true,
              items: data.results
            });
          }                 
    }

render(){
const { error, isLoaded } = this.state;
const {item} = this.props
return (
  <View>
      {/* <Text style={tarjet.titulo}>Tus contactos</Text> */}
        <View key={item.login.uuid} style={tarjet.container}>
          <View style={tarjet.tarjeta}>
              <Text style={tarjet.eliminar}>X</Text>
              <View style={tarjet.contenido}>
              <Image style={tarjet.imagen} source={{uri: item.picture.large}}/>
              <Text style={tarjet.detalle}> Nombre: {item.name.first} </Text> 
              <Text style={tarjet.detalle}> Apellido: {item.name.last} </Text>
              <Text style={tarjet.detalle}> Email: {item.email} </Text>
              <Text style={tarjet.detalle}> Fecha de nacimiento: {item.dob.date.substring(0,10)} ({item.dob.age}) </Text>
            <Button color="#841584" title="Ver detalle del contacto" onPress={()=> this.setState({showModal: !this.state.showModal})}>  </Button>
              </View>

          <Modal visible={this.state.showModal} animationType="slide">
            <View style={tarjet.verdetalle}>
              <Text style={tarjet.nombre}>Mas detalles de {item.name.first} {item.name.last} </Text>
              <Text style={tarjet.detalle}>Calle y Número: {item.location.street.number}</Text>
              <Text style={tarjet.detalle}>Ciudad/Estado: {item.location.street.number}</Text>
              <Text style={tarjet.detalle}>País: {item.location.country}</Text>
              <Text style={tarjet.detalle}>Código postal: {item.location.country}</Text>
              <Text style={tarjet.detalle}>Fecha de Registro: {item.registered.date.substring(0,10)}</Text>
              <Text style={tarjet.detalle}>Teléfono: {item.phone}</Text>
              <Button color="#841584" title="Volver atras" onPress={()=> this.setState({showModal: !this.state.showModal})}> Volver atras</Button>
            </View>
          </Modal>
          </View>
        </View>

        {/* <Text style={tarjet.detalle} onPress={ () => this.props.navigation.goBack()}> Volver atras </Text> */}

      </View>
    )
  }
}


export default Tarjetas;