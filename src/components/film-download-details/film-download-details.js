import React from 'react';
import {Text, Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './styles';

const FilmDownloadDetails = ({name, episodes, size, imageUrl}) => {
  let testpic = {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={{width: 200, height: 150}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>
          {episodes === 1 ? size : `${episodes} Episodes | ${size}`}
        </Text>
      </View>
    </View>
  );
};

export default FilmDownloadDetails;
