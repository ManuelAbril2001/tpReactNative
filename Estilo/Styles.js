import {StyleSheet} from 'react-native';

const home = StyleSheet.create({
    containerHome: {
        justifyContent: 'center',
        marginTop: 250,
        alignItems: 'center',
    },
    titulos: {
        justifyContent: 'center',
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
    texto: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 5,
    },
    footer: {
        marginTop: 300,
        color: 'grey',
    },
})

const tarjet = StyleSheet.create({
    todo:{
        justifyContent: 'center',
    },
    flat:{
        height: '80%',
        width: '100%',
    },
    container:{
        justifyContent: 'center',
        marginBottom: 20,
    },
    tarjeta: {
        marginTop: 10,
        marginRight: 7,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    contenido: {
        justifyContent: 'center',
    },
    titulo: {
        justifyContent: 'center',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'green',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 60,
        flex: 1,
        width: '100%',
        height: '12%',
    },
    interior: {
        fontStyle: 'italic',
    },
    eliminar: {
        fontSize: 15,
        color: 'red',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    imagen: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    detalle: {
        textAlign: 'center',
    },
    nombre:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    verdetalle: {
        marginTop: 250,
        margin: 5,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        textAlign: 'center',
    },
    atras: {
        color: 'orange',
        textAlign: 'right',
        flex: 1,
        width: '100%',
        height: '3%',
    },
    boton: {
        textAlign: 'center',
        margin: 4,
        color: 'purple',
        fontSize: 15,
        fontWeight: '500',
    },
})

const papelera = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        justifyContent: 'center',
        color: 'green',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
       fontSize: 20,
   },
})


const buscar = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
       fontSize: 20,
   },
})


const importar = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        justifyContent: 'center',
        color: 'green',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
       fontSize: 20,
   },
})

export {home, tarjet, papelera, buscar, importar}