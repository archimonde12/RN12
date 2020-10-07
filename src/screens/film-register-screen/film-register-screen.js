import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FilmButton from '../../components/film-button';
import FilmInputHolder from '../../components/film-input-holder';
import FilmLogo from '../../components/film-logo';
import {Icon} from 'react-native-elements';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const FilmRegisterScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 60,
        }}>
        <Icon
          reverse
          name="person"
          type="octicon"
          color="rgb(29,29,29)"
          reverseColor="rgb(255,187,59)"
          size={50}
        />
        <Text style={{color: 'white', marginBottom: 30}}>
          Add profile picture
        </Text>
        <FilmInputHolder title="first name" holder="first name here" />
        <FilmInputHolder title="last name" holder="last name here" />
        <FilmInputHolder title="email" holder="email here" />
        <FilmInputHolder title="password" holder="password here" />
        <FilmInputHolder
          title="confirm password"
          holder="confirm password here"
        />
        <FilmButton title="register" />
      </ScrollView>
    </View>
  );
};

export default FilmRegisterScreen;
