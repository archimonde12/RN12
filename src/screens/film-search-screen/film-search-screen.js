import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import FilmSearchBox from '../../components/film-searchbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const FilmSearchScreen = () => {
  const navigation = useNavigation();
  const goToDetails = () => {
    console.log('Go to Details');
  };
  return (
    <View style={styles.container}>
      <Text>FilmSearchScreen</Text>
      <FilmSearchBox />
      <View style={styles.result}>
        <Text style={styles.title}>TV Shows</Text>
        <TouchableOpacity onPress={goToDetails}>
          <Image
            source={require('../../assets/images/search_TV_shows_1.png')}
            style={{marginTop: 40, marginRight: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        <Text style={styles.title}>Movies</Text>
        <TouchableOpacity onPress={goToDetails}>
          <Image
            source={require('../../assets/images/search_movie_2.png')}
            style={{marginTop: 40, marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToDetails}>
          <Image
            source={require('../../assets/images/search_movie_1.png')}
            style={{marginTop: 40, marginRight: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilmSearchScreen;
