import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Login and Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
