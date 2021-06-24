import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Easing, TextInput, TouchableWithoutFeedback, Animated } from 'react-native';
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
            duration: 1000, //un segundo
            useNativeDriver: false, //obligatorio
            easing: Easing.bounce,
        }).start();
     this.setState({toValue: this.state.toValue==10? 200 : 10})
    }

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
                    <Text style={home.principal}>Menu principal</Text>
                    <Text style={home.menu} onPress={ () => this.props.navigation.navigate('Contactos')}>
                        Todos los contactos
                    </Text>
                    <Text style={home.menu} onPress={ () => this.props.navigation.navigate('Favoritos')}>
                         Favoritos
                    </Text>
                    <Text style={home.menu} onPress={ () => this.props.navigation.navigate('Papelera')}>
                        Papelera de reciclaje
                    </Text>
                    {/* <Text style={home.menu} onPress={ () => this.props.navigation.navigate('Buscar')}>
                        Buscar
                    </Text> */}
                <TouchableOpacity  onPress={this.topDown}>
                    <Text style={home.mover}>Mover menu</Text>
                </TouchableOpacity>
                </Animated.View>

               
                <Text style={home.footer} >Developers: Manuel Abril & Valentina Campitelli</Text>

            </View>

        )

    }
}