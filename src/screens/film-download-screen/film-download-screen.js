import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FilmDownloadDetails from '../../components/film-download-details';
import styles from './styles';
import dataDownloadFilm from '../../data/dataDownloadFilm';

const FilmDownloadScreen = () => {
  const imageURL = dataDownloadFilm[0].imageUrl;
  return (
    <View style={styles.background}>
      <ScrollView>
        {dataDownloadFilm.map((data) => {
          console.log(
            data.imageUrl === '../../assets/images/narcos_download.png'
              ? 'true'
              : 'false',
          );
          return (
            <FilmDownloadDetails
              name={data.name}
              imageUrl={data.imageUrl}
              episodes={data.episodes}
              size={data.size}
              key={data.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FilmDownloadScreen;
