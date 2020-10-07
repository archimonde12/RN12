import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

const FilmProfileSection = ({title, iconName, iconType}) => {
  return (
    <View style={styles.container}>
      <Icon color="white" name={iconName} type={iconType} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default FilmProfileSection;
