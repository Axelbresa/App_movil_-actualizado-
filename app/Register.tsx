import React from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { usuarios } from './panel/lista_usuarios';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 
import CustomButton from './panel/customButton';

function Register() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmarPassword, setConfirmarPassword] = React.useState('');

  const handleRegister = () => {
    const correoValido = correo.includes('@');
    const usuarioEncontrado = usuarios.find(
      user => user.correo === correo
    );
  console.log(correo)
    if (usuarioEncontrado) {
      alert('El usuario ya está registrado.');
      return;
    }

    if (!correoValido) {
      alert("Debe incluir '@' en el correo electrónico");
    } else if (password.length < 4) {
      alert('La contraseña debe ser como mínimo de 5 caracteres');
    } else if (username === '' || correo === '' || password === '' || confirmarPassword === '') {
      alert( 'No debe estar vacío ningún campo');
    } else if (password !== confirmarPassword) {
      alert('Las contraseñas no coinciden');
    } else {
      const newUser = {
        id: usuarios.length + 1,
        nombre: username,
        correo: correo,
        contraseña: password,
      };
      usuarios.push(newUser);
      alert('Usuario registrado con éxito');
      // navigation.navigate('Logeado', { username: newUser.nombre });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register:</Text>
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
          placeholder="Confirmar contraseña"
        />
      </View>

      <CustomButton title="Registrar" onPress={handleRegister} />
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
    backgroundColor: 'purple',
  },
  title: {
    color: "white",
    fontSize: 40,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
  franja: {
    height: "30%",
    width: "100%",
    backgroundColor: "white",
    marginTop: 2,
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  label: {
    color: "white",
  },
});

export default Register;
