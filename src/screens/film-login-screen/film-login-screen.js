import React, {useState} from 'react';
import {ImageBackground, View, Text, Image} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import FilmButton from '../../components/film-button';
import FilmInputHolder from '../../components/film-input-holder';

import styles from './styles';
import FilmLogo from '../../components/film-logo';
import {useNavigation} from '@react-navigation/native';

const FilmLoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('./LoginImage.png')}
        style={styles.backgroundImage}
      />
      <FilmLogo />
      <FilmInputHolder title="Email" holder="email here" />
      <View>
        <FilmInputHolder title="Password" holder="password here" />
        <View style={styles.forgotButton}>
          <TouchableOpacity onPress={() => navigation.navigate('FForgot')}>
            <Text style={styles.registerBottom}>Forgot?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FilmButton
        title="Login"
        onClick={() => {
          navigation.navigate('FHome');
        }}
      />
      <View style={styles.socialHeaderContainer}>
        <View style={styles.line}></View>
        <Text style={styles.socialTitle}>Social Logins</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.socialIconContainer}>
        <Icon
          reverse
          name="facebook-f"
          type="font-awesome-5"
          color="rgb(255 ,169 ,10)"
          reverseColor="rgb(0,0,0)"
          size={26}
        />
        <Icon
          reverse
          name="google"
          type="font-awesome-5"
          color="rgb(255 ,169 ,10)"
          reverseColor="rgb(0,0,0)"
          size={26}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.registerTop}>Don't have an account?</Text>
        <TouchableHighlight onPress={() => navigation.navigate('FRegister')}>
          <Text style={styles.registerBottom}>Register</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default FilmLoginScreen;
