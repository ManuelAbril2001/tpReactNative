import {StyleSheet} from 'react-native';

const home = StyleSheet.create({
    padre:{
        justifyContent: 'center',
    },
    containerHome: {
        justifyContent: 'center',
        marginTop: 250,
        alignItems: 'center',
    },
    titulos: {
        justifyContent: 'center',
        color: 'green',
        fontSize: 30,
        marginBottom: 10,
        textDecorationLine: 'underline',
        fontWeight: '300',
        letterSpacing: 5,
    },
    titulo: {
        justifyContent: 'center',
        color: 'red',
        fontSize: 20,
        marginBottom: 10,
    },
    mover:{
        color: 'purple',
        fontSize: 18,
        marginTop: 10,
        fontWeight: '300',
    },
    principal:{
        letterSpacing: 2,
        color: 'black',
        fontWeight: '300',
        fontSize: 18,
    },
    menu:{
        textAlign: 'center',
        letterSpacing: 4,
        color: 'orange',
        fontWeight: '300',
        fontSize: 20,
        marginTop: 15,
        marginRight: 7,
        padding: 6,
    },
    texto: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 5,
    },
    footer: {
        marginTop: 400,
        color: 'grey',
    },
    lineaboton: {
        width: 50,
        height: 40,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        left: 10,
        bottom: 600,
    },
    lineatexto: {
        color: 'white',
        fontSize: 25,
    },
})

const tarjet = StyleSheet.create({
    todo:{
        justifyContent: 'center',
        top: 70,
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
        marginBottom: 5,
        marginTop: 25,
        flex: 1,
        width: '100%',
        height: '12%',
        fontWeight: '300',
        letterSpacing: 3,
    },
    interior: {
        fontStyle: 'italic',
    },
    eliminar: {
        fontSize: 10,
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
        marginTop: 200,
        margin: 7,
        justifyContent: 'center',
        textAlign: 'center',
    },
    atras: {
        color: 'orange',
        textAlign: 'right',
        flex: 1,
        width: '100%',
        height: '3%',
        margin: 2,
    },
    boton: {
        textAlign: 'center',
        margin: 4,
        color: 'purple',
        fontSize: 15,
        fontWeight: '500',
        fontWeight: '300',
        letterSpacing: 1,
    },
    fav: {
        textAlign: 'center',
        margin: 4,
        color: '#b40a0d',
        fontSize: 13,
        fontWeight: '500',
        fontWeight: '300',
        letterSpacing: 2,
    },
    coment: {
        margin: 4,
        color: '#E18510',
        fontSize: 13,
        fontWeight: '500',
        fontWeight: '300',
        letterSpacing: 2,
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
        marginBottom: 10,
        fontWeight: '300',
        letterSpacing: 3,
    },
    texto: {
       fontSize: 20,
   },
   atras: {
    color: 'orange',
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
        fontWeight: '300',
        letterSpacing: 3,
        marginBottom: 10,
    },
    texto: {
       fontSize: 20,
   },
   atras: {
    color: 'orange',
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
        fontWeight: '300',
        letterSpacing: 3,
        marginBottom: 10,
    },
    texto: {
       fontSize: 20,
   },
   atras: {
    color: 'orange',
},
})

const acerca = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    todo: {
       marginRight: 2,
       marginLeft: 2,
    },
    titulo: {
        justifyContent: 'center',
        color: 'green',
        fontSize: 25,
        fontWeight: '300',
        letterSpacing: 3,
        marginBottom: 10,
    },
    texto: {
       fontSize: 15,
       marginBottom: 9,
   },
   atras: {
      color: 'orange',
      textAlign: 'right',
      marginTop: 100,
      marginLeft: 120,
    },
    interior: {
        fontWeight: 'bold',
    },
    lineaboton: {
        width: 50,
        height: 40,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        left: 10,
        top: 60,
        bottom: 600,
    },
    lineatexto: {
        color: 'white',
        fontSize: 25,
    },
})

export {home, tarjet, papelera, buscar, importar, acerca}
