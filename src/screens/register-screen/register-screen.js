import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {AsyncStorage, Text, View} from 'react-native';

import InputHolder from '../../components/input-holder';
import LoginButton from '../../components/login-button';

import styles from './styles';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const getInputFromUsername = (text) => {
    setUsername(text);
  };
  const getInputFromEmail = (text) => {
    setEmail(text);
  };
  const getInputFromPassword = (text) => {
    setPassword(text);
  };

  const handleRegister = () => {
    let infoUser = {
      username,
      password,
      email,
    };
    let infoUserJSON = JSON.stringify(infoUser);
    AsyncStorage.setItem('info', infoUserJSON);
    AsyncStorage.getItem('info').then((userinfo) => {
      let result = JSON.parse(userinfo);
      console.log(result.email);
    });
    navigation.navigate('Login');
  };
  return (
    <View>
      <InputHolder title="Email" onChange={getInputFromEmail} />
      <InputHolder title="Username" onChange={getInputFromUsername} />
      <InputHolder title="Password" onChange={getInputFromPassword} />
      <LoginButton title="Register" onClick={handleRegister}></LoginButton>
    </View>
  );
};

export default RegisterScreen;
