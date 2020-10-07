import React from 'react';
import {Button, Text, TextInput, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './styles';

const FilmLogo = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/movie-player-play-button.png')}
        style={{width: 75, height: 75, marginBottom: 30}}
      />
      <Text style={styles.logoText}>PHOTOPLAY</Text>
    </View>
  );
};

export default FilmLogo;
