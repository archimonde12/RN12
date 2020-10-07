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
  background: {
    backgroundColor: black_theme.BGColor,
    paddingTop: 60,
  },
});

export default styles;
