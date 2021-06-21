import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {importar, home} from '../Estilo/Styles';
import  Importadas from '../components/Importadas';
import  Ver from './Ver';

export class Importar extends Component {
    constructor(){
        super()
        this.state={
            // fav: []
        }
    }

    componenDidMount(){
        this.getDataimportados()
    }

    // async getDataimportados(){
    //     try{
    //         const result = await AsyncStorage.getItem('fav')
    //         this.setState({seleccionadasPrevias: JSON.parse(result)})
    //         console.log('se guarda');
    //     } catch(e){
    //         console.log(e);
    //     }
    // }

    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
    return(
        <Importadas item={item} />
    )
}


    render(){

  

        return (
            <View style={importar.container}>
                <View style={home.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={home.lineatexto}>
                            ≡
                        </Text>
                    </TouchableOpacity>
                </View>

             <Text style={importar.titulo}>Contactos favoritos</Text>

        


             <Text style={importar.atras} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>

            </View>
        )

    }
}
