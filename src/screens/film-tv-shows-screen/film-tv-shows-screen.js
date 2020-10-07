import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FilmWatchButton from '../../components/film-watch-button';
import styles from './styles';

const FilmMovieDetailsScreen = () => {
  return (
    <View style={styles.theme}>
      {/* VIDEO */}
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/0e34a5e080e8c915030603ddcdb4eeba.png')}
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
          <Text style={styles.filmName}>Narcos</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.typeOfFilm}>Drama</Text>
            <Text style={styles.typeOfFilmSpace}>|</Text>
            <Text style={styles.typeOfFilm}>Biographical</Text>
            <Text style={styles.typeOfFilmSpace}>|</Text>
            <Text style={styles.typeOfFilm}>Crime Film</Text>
            <Text style={styles.typeOfFilmSpace}>|</Text>
            <Text style={styles.typeOfFilm}>Crime Fiction</Text>
          </View>

          {/* RATING */}
          <View style={styles.ratingContainer}>
            <Text style={styles.score}>9.0</Text>
            <Text style={styles.rating}>★★★★✰</Text>

            {/* ABSTRACT */}
            <Text style={styles.abstact}>
              Netflix chronicles the rise of the cocaine trade in Colombia and
              the gripping real-life stories of drug kingpins of the late ‘80s
              in this raw, gritty original series.
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
              <View style={{backgroundColor: 'black'}}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/Cast1.png')}
                />
                <Text style={styles.watchListItemTitle}>Isabela Moner</Text>
              </View>
              <View>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/Cast2.png')}
                />
                <Text style={styles.watchListItemTitle}>Michael Peña</Text>
              </View>
              <View>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/Cast3.png')}
                />
                <Text style={styles.watchListItemTitle}>Eva Longoria</Text>
              </View>
              <View>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/Cast1.png')}
                />
                <Text style={styles.watchListItemTitle}>Eugenio Derbez</Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default FilmMovieDetailsScreen;
