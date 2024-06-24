import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        🪅🎊Ahora ya puedes acceder a las funciones especiales de la aplicacion. Esperamos que disfrute su instancia 🎊🎉
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "green"
  },
  titulo: {
    fontSize: 32,
    color: 'blue',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    backgroundColor: "white"
  },
  text: {
    fontSize: 19,
    color: 'black',
    borderWidth: 1,
    padding: 15,
    backgroundColor: "white"
  },
  subTitulo: {
    fontSize: 19,
    color: 'black',
    padding: 15,
  },
});

export default Home;
