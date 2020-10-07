import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FilmWatchButton from '../../components/film-watch-button';
import styles from './styles';

const FilmMovieDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.theme}>
      {/* VIDEO */}
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/image-film-details.png')}
            style={{width: '100%'}}
          />
          <Image
            source={require('../../assets/images/play-button-2.png')}
            style={{
              position: 'absolute',
            }}
          />
        </View>

        {/* FILM DETAILS */}
        <ScrollView style={{paddingLeft: 15, paddingBottom: 20, top: -40}}>
          <Text style={styles.filmName}>Dora and the lost city of gold</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.typeOfFilm}>Movie</Text>
            <Text style={styles.typeOfFilmSpace}>|</Text>
            <Text style={styles.typeOfFilm}>Advanture</Text>
            <Text style={styles.typeOfFilmSpace}>|</Text>
            <Text style={styles.typeOfFilm}>Comedy</Text>
            <Text style={styles.typeOfFilmSpace}>|</Text>
            <Text style={styles.typeOfFilm}>Family</Text>
          </View>

          {/* RATING */}
          <View style={styles.ratingContainer}>
            <Text style={styles.score}>4.0</Text>
            <Text style={styles.rating}>★★✰✰✰</Text>

            {/* ABSTRACT */}
            <Text style={styles.abstact}>
              Having spent most of her life exploring the jungle, nothing could
              prepare Dora for her most dangerous adventure yet - high school
            </Text>

            {/* WATCH BUTTON */}
            <FilmWatchButton
              title="watch now"
              onClick={() => {
                console.log('Watch Film!');
              }}
            />
          </View>
          {/* CAST LIST */}
          <View>
            <Text style={styles.title}>Cast</Text>
            <ScrollView horizontal>
              {/* CAST 1 */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('castDetails');
                }}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/Cast1.png')}
                />
                <Text style={styles.watchListItemTitle}>Isabela Moner</Text>
              </TouchableOpacity>
              {/* CAST 2 */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('castDetails');
                }}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/Cast2.png')}
                />
                <Text style={styles.watchListItemTitle}>Michael Peña</Text>
              </TouchableOpacity>
              {/* CAST 3 */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('castDetails');
                }}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/Cast3.png')}
                />
                <Text style={styles.watchListItemTitle}>Eva Longoria</Text>
              </TouchableOpacity>
              {/* CAST 4 */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('castDetails');
                }}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/Cast1.png')}
                />
                <Text style={styles.watchListItemTitle}>Eugenio Derbez</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default FilmMovieDetailsScreen;
