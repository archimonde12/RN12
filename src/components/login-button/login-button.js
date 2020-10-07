import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

import styles from './styles';

const LoginButton = (props) => {
  return (
    <View style={styles.container}>
      <Button title={props.title} onPress={props.onClick}></Button>
    </View>
  );
};

export default LoginButton;
