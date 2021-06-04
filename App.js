import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import Buscar from './components/Buscar';
import Tarjetas from './components/Tarjetas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImportCards from './screens/ImportCards';

class App extends Component{
  render(){
    return(
        <ImportCards/>
    )
  }
}

export default App;


// class App extends Component {
//   constructor(){
//     super();
//   }

  
//   render(){
//   return (
//     <View style={aestilo.container}>

//       <Text style={aestilo.text}>Tarjetas vol2</Text>

//       <Tarjetas/>

//       {/* <Buscar/> */}

//     </View>
//   );
// }
// }

// const aestilo = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 100,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: 'white',
//   }
// });

// export default App;