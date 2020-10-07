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
  container: {
    marginHorizontal: 16,
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },

  detailsContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    color: black_theme.FontColor.main,
    marginBottom: 8,
  },
  details: {fontSize: 18, color: black_theme.FontColor.second},
});

export default styles;
