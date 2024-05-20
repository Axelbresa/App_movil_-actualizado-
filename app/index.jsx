import {Text, Button, View, TextInput} from 'react-native'

function index() {
  return (
    <View>
      <Text>Login:</Text>
      <Text>Correo:</Text>
      <TextInput
          // style={styles.input}
          // value={correo}
          // onChangeText={setCorreo}
          placeholder="Correo electrónico"
        />
      <Text>Contraseña:</Text>
      <Button title="inisiar seccion"> </Button>
    </View>
  )
}

export default index