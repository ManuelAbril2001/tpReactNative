import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {home, tarjet} from '../Estilo/Styles';
import  Importadas from '../components/Importadas';
import  Ver from './Ver';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Importar extends Component {
    constructor(){
        super()
        this.state={
            fav: []
        }
    }

   async componentDidMount(){
       await this.getDataimportados()
    }

    async getDataimportados(){
        try{
            let result = await AsyncStorage.getItem('fav')
            result = JSON.parse(result)
            this.setState({fav:result})
            console.log(result);
        } catch(e){
            console.log(e);
        }
    }

    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
        return(
            <Importadas item={item} />
        )
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
             <Text style={tarjet.titulo}>Contactos favoritos</Text>

             <View style={tarjet.flat}>
                <FlatList data={this.state.fav} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
             </View>


             <Text style={tarjet.atras} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>
             </View>
             </View>

        
        )

    }
}
