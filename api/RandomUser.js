import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData(value) {
        try{
          const response = await fetch("https://randomuser.me/api/?results=" + value);
          const json = await response.json();
          return json.results;
        }catch(e){
          console.error(e);
        }
      
}