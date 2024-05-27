import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: '../assets/images/Logo.jpg' }} 
          style={styles.image}
        />
      </View>

      <Text style={styles.welcomeText}>Bienvenido a la App de Tareas</Text>
      <Text style={styles.descriptionText}>
        Regístrate para poder crear tus tareas y demás.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  imageContainer: {
    // marginBottom: 20, // Espacio entre la imagen y los botones

  },
  image: {
    width: 250,
    height: 250,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    width:"100%",
    height:"10%",
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 5, // Para la separación de 10px total (5px de cada lado)
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Index;
