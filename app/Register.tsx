import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {usuarios} from "./panel/lista_usuarios"
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 
import CustomButton from './panel/customButton';

function Register() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmarPassword, setConfirmarPassword] = React.useState('');

  const handleLogin = () => {

    const correoValido = correo.includes('@');
    const usuarioEncontrado = usuarios.find(
        user => user.nombre === username  && user.correo === correo && user.contraseña === password
      );
  
      if (usuarioEncontrado) {
            alert('Usuario logeado');
            navigation.navigate('Logeado', { username: usuarioEncontrado.nombre });
      } else {
        if (!correoValido) {
            alert("Debe incluir '@' en el correo electrónico");
        } if (password.length<8) {
            alert('La contraseña debe ser como minimo de 8 caracteres');
        } if (username=="" || correo=="" || password=="") {
            alert('No debe estar vacio ningun campo');
        } 

      }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Login:</Text>
    <Text style={styles.label}>Nombre de usuario:</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Nombre de usuario"
        />
      </View>

    <Text style={styles.label}>Correo:</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          placeholder="Correo electrónico"
        />
      </View>

    <Text style={styles.label}>Password:</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Contraseña"
        />
      </View>
      <Text style={styles.label}>Confirmar password:</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={confirmarPassword}
          onChangeText={setConfirmarPassword}
          secureTextEntry={true}
          placeholder="Contraseña"
        />
      </View>
        <CustomButton title="Iniciar sesión" onPress={handleLogin} />
      <View style={styles.franja}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'purple', // Fondo claro para el contenedor
  },
  title: {
    color:"white",
    fontSize:40,
    marginBottom:20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0', // Fondo claro para los campos de entrada
    borderRadius: 50, // Bordes redondeados
  },  
  franja:{
    height: "40%",
    width: "100%",
    backgroundColor: "white",
    // position: "absolute",
    marginTop:2,
    // borderTopEndRadius: 50,
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  label:{
    color:"white",
  },
});

export default Register;
