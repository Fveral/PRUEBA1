import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../theme/styles';

const RegistroScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (email === '' || password.length < 6) {
      setError('Email no válido o contraseña muy corta');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => setError(''))
      .catch(error => setError(error.message));
  };

  return (
    <View style={styles.container2}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Registrarse" onPress={handleSignUp} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};



export default RegistroScreen;