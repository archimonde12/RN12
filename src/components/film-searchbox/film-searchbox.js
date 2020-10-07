import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';

import styles from './styles';

const FilmSearchBox = () => {
  return (
    <View style={styles.inputContainer}>
      <Icon name="search" type="fontisto" color="white" />
      <TextInput
        placeholder="insert name of film"
        placeholderTextColor="rgb(200,200,200)"
        style={{color: 'white', fontSize: 18, marginHorizontal: 10}}
      />
    </View>
  );
};

export default FilmSearchBox;
