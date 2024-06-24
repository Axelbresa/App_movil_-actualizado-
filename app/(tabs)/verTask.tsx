import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import alltask from "./task.json";

const VerTask = () => {
  const { taskId } = useLocalSearchParams();
  const [taskDetails, setTaskDetails] = useState(null);

  useEffect(() => {
    // Función para obtener los detalles de la tarea con el ID específico
    const fetchTaskDetails = async () => {
      try {
        const task = alltask.find(task => task.id === parseInt(taskId));
        if (task) {
          setTaskDetails(task);
        } else {
          console.log('No se encontró la tarea con el ID:', taskId);
        }
      } catch (error) {
        console.log('Error al obtener los detalles de la tarea:', error);
      }
    };
    fetchTaskDetails(); // Llama a la función al cargar el componente
  }, [taskId]); // Ejecuta el efecto cada vez que el ID de la tarea cambie

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarea:</Text>
      {taskDetails ? (
        <View>
          <Text style={styles.taskTitulo}>{taskDetails.titulo}</Text>
          <Text style={styles.taskTarea}>{taskDetails.descripcion}</Text>
          <Text style={styles.taskInfo}>Fecha: {taskDetails.fecha}</Text>
          <Text style={styles.taskInfo}>Autor: {taskDetails.autor}</Text>
        </View>
      ) : (
        <Text>No se encontraron detalles para la tarea con ID {taskId}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    margin:30,
    backgroundColor:"#1297",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor:"#1297",
    borderColor: '#ccc',
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
    fontSize: 17,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  taskTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  taskTarea: {
    fontSize: 18,
    margin:5,
    padding:8,
    marginBottom: 3,
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor:"#1297",
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

export default VerTask;
