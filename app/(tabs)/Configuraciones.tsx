import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Configuraciones = () => {
  const [backgroundColor, setBackgroundColor] = useState('#fff'); // Default background color is white

  const cambiarFondo = () => {
    setBackgroundColor(prevColor => (prevColor === '#fff' ? '#000' : '#fff')); // Toggle between white and black
  
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Configuraciones</Text>
      <Text style={styles.title}>Cambiar fondo de la app</Text>
      <TouchableOpacity style={styles.fondo} onPress={cambiarFondo}>
        <Text style={styles.buttonText}>Cambiar fondo</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Cambiar idioma</Text>
      <TouchableOpacity style={styles.fondo}>
        <Text style={styles.buttonText}>Cambiar idioma</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    color: "black"

  },
  fondo: {
    backgroundColor: '#7212',
    padding: 10,
    borderWidth: 1,
    marginVertical: 5,
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default Configuraciones;
