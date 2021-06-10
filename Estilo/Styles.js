import {StyleSheet} from 'react-native';

const home = StyleSheet.create({
    containerHome: {
        justifyContent: 'center',
        marginTop: 200,
        alignItems: 'center',
    },
    titulos: {
        justifyContent: 'center',
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 5,
    },
    footer: {
        marginTop: 250,
        color: 'grey',
    },
})

const tarjet = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    tarjeta: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    contenido: {
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
        alignItems: 'center',
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
        marginTop: 60,
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