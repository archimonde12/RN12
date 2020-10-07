import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';
import InputHolder from '../../components/input-holder';
import LoginButton from '../../components/login-button';

import styles from './styles';

let TRUE_USERNAME = 'admin';
let TRUE_PASSWORD = 'admin';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPress, setIsPress] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const getInputFromUsername = (text) => {
    setIsPress(false);
    setUsername(text);
  };
  const getInputFromPassword = (text) => {
    setIsPress(false);
    setPassword(text);
  };
  const handleClick = () => {
    AsyncStorage.getItem('info').then((userinfo) => {
      let result = JSON.parse(userinfo);
      TRUE_USERNAME = result.username;
      TRUE_PASSWORD = result.password;
      console.log(TRUE_USERNAME, TRUE_PASSWORD);
    });
    setIsPress(true);
    if (username === TRUE_USERNAME && password === TRUE_PASSWORD) {
      setIsLogin(true);
      navigation.navigate('Home');
    }
  };
  const handleLogout = () => {
    setIsPress(false);
    setIsLogin(false);
  };

  const goToRegister = () => {
    AsyncStorage.getItem('info');
    navigation.navigate('Register');
  };

  return (
    <View style={styles.center}>
      {!isLogin ? (
        <View>
          <InputHolder title="Username" onChange={getInputFromUsername} />
          <InputHolder title="Password" onChange={getInputFromPassword} />
          <LoginButton title="Log In" onClick={handleClick}></LoginButton>
          {isPress ? (
            <Text style={styles.error}>Username and password wrong!</Text>
          ) : null}
          <LoginButton
            title="Dont have account?"
            onClick={goToRegister}></LoginButton>
        </View>
      ) : (
        <View>
          <Text style={styles.heading}>Login Succesfully</Text>
          <Text>Username: {TRUE_USERNAME}</Text>
          <Text>Password: {TRUE_PASSWORD}</Text>
          <LoginButton title="Log Out" onClick={handleLogout}></LoginButton>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
