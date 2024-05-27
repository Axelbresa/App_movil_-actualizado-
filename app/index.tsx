import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoginScreen from './Login';
import LogeadoScreen from './Logeado';


function index() {
  return (
    <View>
        <TouchableOpacity>Login</TouchableOpacity>
        <TouchableOpacity>Register</TouchableOpacity>
    </View>
 
  );
}

export default index;
