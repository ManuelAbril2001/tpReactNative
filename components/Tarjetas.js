import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity, Button, Modal } from 'react-native';
import {getData} from "../api/RandomUser";

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
        <View key={item.login.uuid} style={testilo.container}>
          <View style={testilo.tarjet}>
          <TouchableOpacity onPress={() => Alert.alert("Mas detalles:" + item.name.first)}>
            {/* importar un modal */}
              <Text style={testilo.elimino}>Eliminar tarjeta</Text>
              <Image style={testilo.image} source={{uri: item.picture.thumbnail}}/>
              <Text style={testilo.tarjet}> Nombre: {item.name.first} </Text> 
              <Text> Apellido: {item.name.last} </Text>
              <Text style={testilo.detalle}> Email: {item.email} </Text>
              <Text style={testilo.detalle}> Fecha de nacimiento: {item.dob.date.substring(0,10)} ({item.dob.age}) </Text>

          </TouchableOpacity>

            <Button title="cargar detalles" onPress={()=> this.setState({showModal: !this.state.showModal})}>  </Button>

          <Modal visible={this.state.showModal}
          animationType="slide">
              <View style={testilo.tarjet}>

              <Text style={testilo.detalle}>Calle y Número: {item.location.street.number}</Text>
            <Text style={testilo.detalle}>Ciudad/Estado: {item.location.street.number}</Text>
            <Text style={testilo.detalle}>País: {item.location.country}</Text>
            <Text style={testilo.detalle}>Código postal: {item.location.country}</Text>
            <Text style={testilo.detalle}>Fecha de Registro: {item.registered.date.substring(0,10)}</Text>
            <Text style={testilo.detalle}>Teléfono: {item.phone}</Text>
              <Button title="go back!" onPress={()=> this.setState({showModal: !this.state.showModal})}> Go back!</Button>
              </View>
          </Modal>
          </View>
        </View>
    )
  }
}

const testilo = StyleSheet.create({
    container: {
      flex: 1,
      // height: 9,
      // width: 350,
      // backgroundColor: 'grey',
      // alignItems: 'center',
      // justifyContent: 'center',
      // borderColor: 'white',
    },
    elimino: {
        fontSize: 10,
        color: 'red',
        textAlign: 'right',
    },
    titulos: {
        fontSize: 20,
        fontWeight: "bold",
    },
    tarjet: {
        color: 'brown',
        marginTop: 30,
    },
    detalle:{
      marginTop: 20,
    },
    image: {
      width: 30,
      height: 30,
    },
  });

export default Tarjetas;