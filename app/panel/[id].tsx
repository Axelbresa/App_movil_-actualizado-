import { Stack, Link, useLocalSearchParams } from 'expo-router'
import {Text} from 'react-native'


function idScreen() {
    let {id}=useLocalSearchParams()


  return (
    <Stack.Screen options={{title:"Usuario: " + {id}}}></Stack.Screen>
  )
}

export default idScreen