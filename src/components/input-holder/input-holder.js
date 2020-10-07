import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';

const InputHolder = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={props.onChange}></TextInput>
    </View>
  );
};

export default InputHolder;
