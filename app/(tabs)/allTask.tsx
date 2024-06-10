import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import taskData from "./task.json";

const ListaTarea = () => {
  const [tasks, setTasks] = useState(taskData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tareas</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.taskItem}>
            <Text style={styles.taskTitle}>{item.titulo}</Text>
            <Text style={styles.taskInfo}>Autor: {item.autor}</Text>
            <Text style={styles.taskInfo}>Fecha: {item.fecha}</Text>
            <TouchableOpacity style={styles.button} onPress={() => verTarea(item.id)}>
              <Text style={styles.buttonText}>Ver tarea</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.editButton]} onPress={() => editarTarea(item.id)}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  taskInfo: {
    fontSize: 16,
    marginBottom: 3,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#28a745', // Cambiar el color del botón de editar
  },
});

export default ListaTarea;
