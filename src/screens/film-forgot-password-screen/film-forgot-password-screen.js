import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FilmButton from '../../components/film-button';
import FilmInputHolder from '../../components/film-input-holder';
import FilmLogo from '../../components/film-logo';
import styles from './styles';

const FilmForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <FilmLogo />
      <View style={styles.intro}>
        <Text style={styles.title}>Forgot password?</Text>
        <Text style={styles.content}>
          Enter the email address you used to create your account and we will
          email you a link to reset your password
        </Text>
      </View>
      <FilmInputHolder title="email" holder="email here" />
      <FilmButton title="send email" />
    </View>
  );
};

export default FilmForgotPasswordScreen;
