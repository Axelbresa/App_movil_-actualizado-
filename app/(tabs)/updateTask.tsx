import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { useLocalSearchParams} from 'expo-router';
import alltask from "./task.json";

function UpdateTask() {
  const [titulo, setTitulo] = useState('');
  const [Task, setTask] = useState('');
  const [fecha, setFecha] = useState('');
  const [autor, setAutor] = useState('');
  const { taskId} = useLocalSearchParams();
  const navigation = useNavigation(); // Obtiene la navegación
  const route = useRoute(); // Obtiene la ruta y sus parámetros
  const { actualizarListaTareas } = route.params; 
  

  useEffect(() => {
    // Función para obtener los detalles de la tarea con el ID específico
    const fetchTaskDetails = async () => {
      try {
        console.log(taskId)
        console.log(alltask)
      } catch (error) {
        console.error('Error al obtener los detalles de la tarea:', error);
      }
    };
    fetchTaskDetails(); // Llama a la función al cargar el componente
  }, [taskId]); // Ejecuta el efecto cada vez que el ID de la tarea cambie

  const updateTask = async () => {
    const updatedTaskData = {
      id: parseInt(taskId),
      titulo: titulo,
      descripcion: Task,
      autor: autor,
      fecha: fecha,
    };
  
    try {
      const taskToUpdate = alltask.find(task => task.id === updatedTaskData.id);
  
      if (taskToUpdate) {
        const updatedTaskList = alltask.map(task => {
          if (task.id === updatedTaskData.id) {
            return {
              ...task,
              titulo: updatedTaskData.titulo,
              descripcion: updatedTaskData.descripcion,
              autor: updatedTaskData.autor,
              fecha: updatedTaskData.fecha,
            };
          }
          return task;
        });
  
        // Actualiza el JSON con la nueva lista de tareas
        console.log('JSON actualizado:', updatedTaskList);
  
        // Llama a la función de actualización de la lista de tareas en la página anterior
        actualizarListaTareas(updatedTaskList);
  
        // Regresa a la página anterior después de actualizar la tarea
        navigation.goBack();
      } else {
        console.error('No se encontró la tarea con el ID:', updatedTaskData.id);
        alert('No se pudo encontrar la tarea. Por favor, inténtalo de nuevo.');
      }
  
      console.log('Tarea actualizada correctamente:', updatedTaskData);
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      alert('No se pudo actualizar la tarea. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update task:</Text>

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

      <TouchableOpacity style={styles.button} onPress={updateTask}>
        <Text style={styles.buttonText}>Update Task</Text>
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

export default UpdateTask;
