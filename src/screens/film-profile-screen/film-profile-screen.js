import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FilmProfileSection from '../../components/film-profile-sections';
import styles from './styles';

const FilmProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView contentContainerStyle={styles.theme}>
        <Image
          source={require('../../assets/images/avatar.jpg')}
          style={{
            borderWidth: 4,
            width: 140,
            height: 140,
            borderColor: 'rgb(255,178,36)',
            borderRadius: 140,
          }}
        />
        <Text style={styles.name}>Luu Dinh Hoan</Text>
        <Text style={styles.member}>Premium</Text>
        <View style={{width: '100%', marginLeft: 50}}>
          <FilmProfileSection
            title="Account"
            iconName="person"
            iconType="octicon"
          />
          <FilmProfileSection
            title="Notifications"
            iconName="notifications"
            iconType="ionicon"
          />
          <FilmProfileSection
            title="Settings"
            iconName="settings"
            iconType="ionicon"
          />
          <FilmProfileSection
            title="Help"
            iconName="info-circle"
            iconType="font-awesome-5"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FAuth');
            }}>
            <FilmProfileSection
              title="Logout"
              iconName="sign-out"
              iconType="octicon"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FilmProfileScreen;
