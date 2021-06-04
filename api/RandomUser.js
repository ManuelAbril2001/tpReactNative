import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData() {
    
        try{
          const response = await fetch("https://randomuser.me/api/?results=4");
          const json = await response.json();
          return json.results;
        }catch(e){
          console.error(e);
        }
      
}