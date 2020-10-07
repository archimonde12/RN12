import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styles from './styles';

const FilmHomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.theme}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('detail');
          }}
          style={{alignItems: 'center'}}>
          <View>
            <Image
              source={require('../../assets/images/home_background_1.png')}
            />
          </View>
          <View style={{position: 'absolute', top: 280}}>
            <Image
              source={require('../../assets/images/home_background_2.png')}
            />
          </View>
        </TouchableOpacity>

        {/* RATING */}
        <Text style={styles.score}>4.0</Text>
        <Text style={styles.rating}>★★✰✰✰</Text>

        {/* TYPE OF FILM */}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.typeOfFilm}>Movie</Text>
          <Text style={styles.typeOfFilmSpace}>|</Text>
          <Text style={styles.typeOfFilm}>Advanture</Text>
          <Text style={styles.typeOfFilmSpace}>|</Text>
          <Text style={styles.typeOfFilm}>Comedy</Text>
          <Text style={styles.typeOfFilmSpace}>|</Text>
          <Text style={styles.typeOfFilm}>Family</Text>
        </View>

        {/* WATCHING LIST */}
        <View style={{marginLeft: 20}}>
          <Text style={styles.title}>Watching</Text>
          <ScrollView horizontal contentContainerStyle={{paddingVertical: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TVShowsdetail');
              }}>
              <Image
                source={require('../../assets/images/watch_list_1.png')}
                style={styles.watchListItem}
              />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/watch_list_2.png')}
              style={styles.watchListItem}
            />
            <Image
              source={require('../../assets/images/watch_list_3.png')}
              style={styles.watchListItem}
            />
            <Image
              source={require('../../assets/images/watch_list_4.png')}
              style={styles.watchListItem}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default FilmHomeScreen;
