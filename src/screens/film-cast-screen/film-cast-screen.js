import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FilmWatchButton from '../../components/film-watch-button';
import styles from './styles';

const FilmCastScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.theme}>
      {/* VIDEO */}
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/Isabela-Moner-copy.png')}
          />
        </View>

        {/* FILM DETAILS */}
        <ScrollView style={{paddingLeft: 15, paddingBottom: 20, top: -50}}>
          <Text style={styles.castFirstName}>Michael</Text>
          <Text style={styles.castLastName}>Peña</Text>
          <View style={styles.ratingContainer}>
            {/* ABSTRACT */}
            <Text style={styles.abstact}>
              Michael Peña was born and raised in Chicago, to Nicolasa, a social
              worker, and Eleuterio Peña, who worked at a button factory. His
              parents were originally from Mexico.
            </Text>
          </View>
          {/* CAST LIST */}
          <View>
            <Text style={styles.title}>Known for</Text>
            <ScrollView horizontal>
              {/* CAST 1 */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail');
                }}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/0e22e62c08519c45dbc116f56e8dcd2d.png')}
                />
              </TouchableOpacity>
              {/* CAST 2 */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail');
                }}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/72f7932c582d8f41d55e2f7748e0b9c2.png')}
                />
              </TouchableOpacity>
              {/* CAST 3 */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail');
                }}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/1b082d8eb9969933599707375c70f246.png')}
                />
              </TouchableOpacity>
              {/* CAST 4 */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail');
                }}>
                <Image
                  style={styles.watchListItem}
                  source={require('../../assets/images/3790c440afe96b17c19e6742b58d13d5.png')}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default FilmCastScreen;
