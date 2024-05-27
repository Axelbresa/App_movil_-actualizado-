import {Text, View} from 'react-native'
import { useLocalSearchParams, Stack, Link } from 'expo-router';
import { lista_usuarios } from './lista_usuarios';

console.log(lista_usuarios)

function hola() {
  return (
    <View>
        <Text>
            Hola usuario bienvenido a esta pagina
        </Text>
        <Link href={"panel/1"}>Usuario 1</Link>
        <Link href={"panel/2"}>Usuario 2</Link>
        <Link href={"panel/3"}>Usuario 3</Link>
        <Link href={"panel/4"}>Usuario 4</Link>
        <Link href={"panel/5"}>Usuario 5</Link>
    </View>
  )
}

export default hola