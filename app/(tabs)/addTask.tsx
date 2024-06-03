import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

function AddTask() {
    const addTask = () => {
        // if (task) {
        //   setTaskList([...taskList, { id: Date.now().toString(), text: task }]);
        //   setTask('');
        // }
      };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add task:</Text>

      <Text style={styles.label}>Titulo:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el titulo"
        />
      </View>

      <Text style={styles.label}>Tarea:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la tarea"
        />
      </View>

      <Text style={styles.label}>Fecha:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la fecha de la tarea"
        />
      </View>

      <Text style={styles.label}>Nombre del autor:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre del autor"
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
    borderWidth: 2, // Agregar borde
    borderColor: 'white', // Color del borde
    borderRadius: 10, // Opcional: bordes redondeados para el formulario
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
    borderWidth: 1, // Agregar borde a los campos de entrada
    borderColor: 'gray', // Color del borde de los campos de entrada
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
