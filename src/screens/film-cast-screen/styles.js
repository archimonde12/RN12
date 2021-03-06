import {StyleSheet} from 'react-native';
const black_theme = {
  BGColor: 'black',
  FontColor: {
    main: 'white',
    second: 'rgba(255,255,255,0.64)',
  },
  menuColor: 'rgba(0,0,0,0.53)',
  iconMenuColor: 'rgba(255,255,255,0.75)',
  castImageBackground: 'rgb(31,31,31)',
  activeicon: 'rgb(255,178,36)',
};
const styles = StyleSheet.create({
  theme: {
    backgroundColor: black_theme.BGColor,
  },
  //CAST DETAILS
  castFirstName: {
    color: black_theme.FontColor.main,
    fontSize: 35,
    textAlign: 'center',
  },
  castLastName: {
    color: black_theme.FontColor.main,
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
  },

  //ABSTRACT
  abstact: {
    color: black_theme.FontColor.second,
    fontSize: 18,
    marginVertical: 15,
    width: '100%',
    textAlign: 'left',
  },
  title: {
    color: black_theme.FontColor.main,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
  },

  watchListItem: {
    width: 120,
    height: 150,
    marginRight: 20,
    backgroundColor: black_theme.castImageBackground,
  },

  watchListItemTitle: {
    textAlign: 'center',
    color: black_theme.FontColor.main,
    fontSize: 18,
    marginRight: 20,
    lineHeight: 30,
  },
});

export default styles;
