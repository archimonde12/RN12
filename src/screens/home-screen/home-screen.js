import React, {useState, useEffect} from 'react';
import {Text, View, AsyncStorage} from 'react-native';

import styles from './styles';

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('info').then((userinfo) => {
      let result = JSON.parse(userinfo);
      setUsername(result.username);
    });
  }, []);
  return (
    <View>
      <Text>Welcome {username}</Text>
    </View>
  );
};

export default HomeScreen;
