import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import json from "./task.json";

function AddTask() {
  const [titulo, setTitulo] = React.useState('');
  const [Task, setTask] = React.useState('');
  const [fecha, setFecha] = React.useState('');
  const [autor, setAutor] = React.useState('');

  const addTask = async () => {
    const newTask = {
      id: json.length > 0 ? json[json.length - 1].id + 1 : 1,
      titulo: titulo,
      descripcion: Task,
      autor: autor,
      fecha: fecha,
    };

    try {
      json.push(newTask); // Agregar la nueva tarea al arreglo json
      console.log('Tarea agregada correctamente:', newTask);

      // Limpiar los campos de entrada después de agregar la tarea
      setTitulo('');
      setTask('');
      setFecha('');
      setAutor('');
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
      Alert.alert('Error', 'No se pudo agregar la tarea. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add task:</Text>

      <Text style={styles.label}>Titulo:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Ingrese el titulo"
        />
      </View>

      <Text style={styles.label}>Tarea:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={Task}
          onChangeText={setTask}
          placeholder="Ingrese la tarea"
        />
      </View>

      <Text style={styles.label}>Fecha:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la fecha de la tarea"
          onChangeText={setFecha}
          value={fecha}
        />
      </View>

      <Text style={styles.label}>Nombre del autor:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre del autor"
          onChangeText={setAutor}
          value={autor}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: 'purple',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    margin: 100,
  },
  title: {
    color: "white",
    fontSize: 40,
    marginBottom: 20
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
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  label: {
    color: "white",
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddTask;
