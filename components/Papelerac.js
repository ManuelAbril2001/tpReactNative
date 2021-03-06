import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import { StyleSheet, Image, Text,  Animated, Easing, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity, Separator, Button, Modal } from 'react-native';
import { Value } from 'react-native-reanimated';
import {getData} from "../api/RandomUser";
import {tarjet} from '../Estilo/Styles';

class Papelera extends Component{
    constructor(props){;
        super(props);
        this.state={
          error: null,
          isLoaded: false,
          numero: "",
          items: [],
          showModal: false,
          toValue: 1,
          comentarios: [],
          papelera: [],
          // eliminar: [],
        }
    }


    resize = new Animated.Value(0.8);

  toSize = () => {
      Animated.spring(this.resize,{
          toValue: this.state.toValue,
          friction: 16,
          tension: 10,
          useNativeDriver: false,
      }).start();
      this.setState({toValue: this.state.toValue==0.8? 1 : 0.8})
  }


  async eliminarTarjeta(){
    Alert.alert('Tarjeta eliminada definitivamente')
    try{
      let resultado = this.state.papelera.filter((item) => {
        return item.login.uuid != value.login.uuid
      })
      this.setState({papelera: resultado})

      const jsonValue = JSON.stringify(resultaado)
      await AsyncStorage.setItem('papelera', jsonValue)
    }catch(e){
      console.log(e);
    }
  }


render(){
    const { error, isLoaded } = this.state;
    const {item} = this.props;
    
    return (
            <View key={item.login.uuid} style={tarjet.container}>
              <View style={tarjet.tarjeta}>
              <TouchableOpacity onPress={() => this.eliminarTarjeta(item)}><Text style={tarjet.eliminar}> Eliminar definitivamente </Text></TouchableOpacity>
                  <View style={tarjet.contenido}>
                  <Image style={tarjet.imagen} source={{uri: item.picture.large}}/>
                  <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Nombre: </Text>{item.name.first} </Text> 
                  <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Apellido: </Text>{item.name.last} </Text>
                  <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Email: </Text> {item.email} </Text>
                  <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Fecha de nacimiento: </Text> {item.dob.date.substring(0,10)} ({item.dob.age}) </Text>
    
                
                <Text style={tarjet.boton} title="Ver detalle del contacto" onPress={()=> this.setState({showModal: !this.state.showModal})}> Ver m??s detalles </Text>
                </View>
    
              <Modal visible={this.state.showModal} animationType="slide">
              <View style={tarjet.verdetalle}>
                <Button title="Presione para modificar el tama??o" onPress={this.toSize}></Button>
                       <Animated.View style={{
                         borderWidth: 2,
                         borderColor: 'black',
                           width: 350,
                           height: 200,
                           transform: [
                               {scale: this.resize}
                           ]
                       }}>
                          <Text style={tarjet.nombre}> Mas detalles de<Text style={tarjet.interior}> {item.name.first} {item.name.last} </Text></Text>
                          <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Calle y N??mero: </Text> {item.location.street.name}, {item.location.street.number}</Text>
                          <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Ciudad/Estado: </Text> {item.location.city}</Text>
                          <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Pa??s: </Text> {item.location.country}</Text>
                          <Text style={tarjet.detalle}> <Text style={tarjet.interior}> C??digo postal: </Text> {item.location.postcode}</Text>
                          <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Fecha de Registro: </Text> {item.registered.date.substring(0,10)}</Text>
                          <Text style={tarjet.detalle}> <Text style={tarjet.interior}> Tel??fono: </Text> {item.phone}</Text>
                          <Text style={tarjet.boton} title="Volver atras" onPress={()=> this.setState({showModal: !this.state.showModal})}> Volver atras</Text>
                       </Animated.View>
                </View>
              </Modal>
              </View>
            </View>
        )
      }
    

}

export default Papelera;