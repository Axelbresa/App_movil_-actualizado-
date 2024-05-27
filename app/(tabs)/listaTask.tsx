import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const prueba = () => {
  return (
    <View >
      <Text>Lista de tareas</Text>
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  taskItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 8,
  },
  taskTitle: {
    fontSize: 18,
  },
});

export default prueba;
