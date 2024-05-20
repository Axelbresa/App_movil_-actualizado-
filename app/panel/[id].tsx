import { useLocalSearchParams, Stack } from 'expo-router';
import { Text, View } from 'react-native';

function idScreen() {
  let { id } = useLocalSearchParams();

  return (
    <View>
       <Stack.Screen options={{ title: 'Id usuario:' + id }}></Stack.Screen>
       <Text>{`ID de Usuario: ${id}`}</Text>
   </View>
  );
}

export default idScreen;
