import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Easing, TextInput, TouchableWithoutFeedback, Animated } from 'react-native';
import {home} from '../Estilo/Styles';

export class Home extends Component {
    constructor(){
        super();
        // this.desplegarMenu = this.desplegarMenu.bind(this)
        this.state = {
            toValue: 200,
        }
    }

    position = new Animated.Value(10);

    topDown = () => {
        Animated.timing(this.position,{
            toValue: this.state.toValue,
            duration: 1000, 
            //un segundo
            useNativeDriver: false,
            //obligatorio
            easing: Easing.bounce,
        }).start();
     this.setState({toValue: this.state.toValue==10? 200 : 10})
    }

    // desplegarMenu(){
    //     console.log(this.info)
    //     if(style === "none"){
    //         style = "block";
    //     } else{
    //         style = "none";
    //     }
    //   }

    render(){
        return (
            <View style={home.containerHome}>
                <View style={home.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={home.lineatexto}>
                            ≡
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={home.titulos}>Bienvenidx</Text>
                <Animated.View style={{
                    top: this.position,
                    width: 300,
                    height:70,
                    textAlign: 'center',
                }}>
                    <TouchableOpacity style={{flex:1}} onPress={this.topDown}>
                    <Text style={home.titulo}
                    //  onPress={this.desplegarMenu}
                     >Mover menu</Text>
                    <Text style={home.texto} onPress={ () => this.props.navigation.navigate('Contactos')}>
                        Todos los contactos
                    </Text>
                    <Text style={home.texto} onPress={ () => this.props.navigation.navigate('Favoritos')}>
                         Favoritos
                    </Text>
                    <Text style={home.texto} onPress={ () => this.props.navigation.navigate('Buscar')}>
                        Buscar/Modificar contactos
                    </Text>
                    <Text style={home.texto} onPress={ () => this.props.navigation.navigate('Papelera')}>
                        Papelera de reciclaje
                    </Text>
                </TouchableOpacity>
                </Animated.View>

               
                <Text style={home.footer} >Developers: Manuel Abril & Valentina Campitelli</Text>

            </View>

        )

    }
}