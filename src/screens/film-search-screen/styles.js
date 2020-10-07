import {StyleSheet} from 'react-native';
import dark_theme from '../../configs/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark_theme.BGColor,
    alignItems: 'center',
    flex: 1,
  },

  result: {
    width: '100%',
    height: 200,
    borderTopColor: 'rgb(33,33,33)',
    borderTopWidth: 2,
    marginTop: 35,
    flexDirection: 'row',
    marginLeft: 10,
  },

  title: {
    color: dark_theme.FontColor.main,
    textTransform: 'uppercase',
    height: 20,
    fontSize: 18,
    paddingHorizontal: 20,
    position: 'absolute',
    top: -10,
    backgroundColor: dark_theme.BGColor,
  },
});

export default styles;
