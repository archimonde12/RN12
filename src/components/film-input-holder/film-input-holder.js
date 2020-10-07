import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';

const FilmInputHolder = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.title}</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={props.holder}
        placeholderTextColor="gray"></TextInput>
    </View>
  );
};

export default FilmInputHolder;
