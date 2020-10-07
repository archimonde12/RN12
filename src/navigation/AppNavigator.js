import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from '../screens/login-screen';
import RegisterScreen from '../screens/register-screen';
import HomeScreen from '../screens/home-screen';

//Film Project
//------------Ath
import FilmLoginScreen from '../screens/film-login-screen';
import FilmForgotPasswordScreen from '../screens/film-forgot-password-screen';
import FilmRegisterScreen from '../screens/film-register-screen';
//------------Home
import FilmCastScreen from '../screens/film-cast-screen';
import FilmDownloadScreen from '../screens/film-download-screen';
import FilmHomeScreen from '../screens/film-home-screen';
import FilmMovieDetailsScreen from '../screens/film-movie-details-screen';
import FilmSearchScreen from '../screens/film-search-screen';
import FilmTVShowsScreen from '../screens/film-tv-shows-screen';
import FilmProfileScreen from '../screens/film-profile-screen';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'man' : 'man';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={RegisterScreen} />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="film"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'auth'} component={AuthStack} />
      <Stack.Screen name={'app'} component={TabNavigator} />
      <Stack.Screen name={'film'} component={FilmStack} />
    </Stack.Navigator>
  );
};

//Film Project

const FilmStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FAuth"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FAuth" component={FAuthStack} />
      <Stack.Screen name="FHome" component={FHomeTab} />
    </Stack.Navigator>
  );
};

const FAuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FLogin"
      screenOptions={{
        headerShown: true,
        headerTitle: 'BACK',
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="FLogin"
        component={FilmLoginScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="FRegister"
        component={FilmRegisterScreen}></Stack.Screen>
      <Stack.Screen
        name="FForgot"
        component={FilmForgotPasswordScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

const FHomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="FHome"
      tabBarOptions={{
        inactiveBackgroundColor: 'rgb(33,33,33)',
        activeBackgroundColor: 'rgb(33,33,33)',
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          top: -30,
          height: 90,
          paddingTop: 10,
          paddingBottom: 30,
        },
        activeTintColor: 'rgb(255,178,36)',
      }}>
      <Tab.Screen
        name="FHome"
        component={FHomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home" type="ionicon" color={color} />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="FSearch"
        component={FilmSearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search" type="ionicon" color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="FDownload"
        component={FilmDownloadScreen}
        options={{
          title: 'Download',
          tabBarIcon: ({color}) => (
            <Icon name="download" type="feather" color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="FProfile"
        component={FilmProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="person" type="ionicon" color={color} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const FHomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'home'} component={FilmHomeScreen} />
      <Stack.Screen name={'detail'} component={FilmMovieDetailsScreen} />
      <Stack.Screen name={'TVShowsdetail'} component={FilmTVShowsScreen} />
      <Stack.Screen name={'castDetails'} component={FilmCastScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator = () => (
  <NavigationContainer>{AppStack()}</NavigationContainer>
);
