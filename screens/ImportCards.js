// import React, {Component} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import{
//     View,
//     Text,
//     ScrollView,
//     TouchableOpacity,
// } from 'react-native';
// import {getData} from '../api/RandomUser'

// class ImportCards extends Component {
//     constructor(){
//         super();
//         this.state = {
//             items: [],
//         }
//     }





// keyExtractor = (item,idx) => idx.toString();
// renderItem= ({item}) => {
//     return(
//         <Tarjetas/>
//     )
// }
// componentDidMount() {
//     getData()
//      .then(results =>{
//          console.log(results);
//          this.setSatet({items:results})
//      })
//    }



// render(){
    


// return (
//  <View>
//      <FlatList data={this.state.items} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
//  </View>
// )

// }
// }

// export{ImportCards};