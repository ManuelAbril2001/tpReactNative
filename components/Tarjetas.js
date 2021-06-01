import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

class Tarjetas extends Component {
    constructor(){
        super();
    this.state = {
        error: null,
        isLoaded: false,
        numero: "",
        items: [],
      } 
    }
  
  
    componentDidMount() {
      fetch("https://randomuser.me/api/?results=4")
        .then(res => res.json())
        .then(
          (data) => {
              console.log(data)
            this.setState({
              isLoaded: true,
              items: data.results
            });
          },            
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )  
    }

    

render(){
const { error, isLoaded, items } = this.state;
const datos = items.map(item => ( 
    <View key={item.login.uuid} style={testilo.tarjet}>
      <TouchableOpacity onPress={() => Alert.alert("Mas detalles:" + item.name.first)}>
        <Text style={testilo.elimino}>Eliminar tarjeta</Text>
        <Text style={testilo.tarjet}> Nombre: {item.name.first} </Text> 
        <Text> Apellido: {item.name.last} </Text>
        <Text> Email: {item.email} </Text>
        <Text> Fecha de nacimiento: {item.dob.date.substring(0,10)} ({item.dob.age}) </Text>
        <Image style={testilo.image} source={{uri: item.picture.thumbnail}}/>
      </TouchableOpacity>
    </View>
))

      return (
        <View style={testilo.container}> 
        <Text style={testilo.titulos}>PERSONAS</Text>
            {datos}
        </View>
       
    )

    }
    // }
}

const testilo = StyleSheet.create({
    container: {
      flex: 1,
      height: 9,
      width: 350,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
    },
    elimino: {
        fontSize: 10,
        color: 'red',
        textAlign: 'right',
    },
    titulos:{
        fontSize: 20,
        fontWeight: "bold",
    },
    tarjet: {
        color: 'brown',
    },
    image: {
      width: 30,
      height: 30,
    },
  });

export default Tarjetas;
