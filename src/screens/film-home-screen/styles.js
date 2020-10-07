import {StyleSheet} from 'react-native';
const black_theme = {
  BGColor: 'black',
  FontColor: {
    main: 'white',
    second: 'rgba(255,255,255,0.64)',
  },
  menuColor: 'rgba(0,0,0,0.53)',
  iconMenuColor: 'rgba(255,255,255,0.75)',
  activeicon: 'rgb(255,178,36)',
};
const styles = StyleSheet.create({
  theme: {
    backgroundColor: black_theme.BGColor,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 40,
  },
  score: {
    color: black_theme.FontColor.main,
    fontSize: 40,
    lineHeight: 60,
    marginTop: 20,
  },
  rating: {
    color: black_theme.activeicon,
    fontSize: 25,
    marginBottom: 15,
  },
  typeOfFilm: {
    color: black_theme.FontColor.main,
    fontSize: 14,
    marginBottom: 30,
  },
  typeOfFilmSpace: {
    color: black_theme.FontColor.main,
    fontSize: 14,
    paddingHorizontal: 20,
  },

  title: {
    color: black_theme.FontColor.main,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
  },

  watchListItem: {
    width: 100,
    height: 130,
    marginRight: 15,
  },
});

export default styles;
