import {StyleSheet} from 'react-native';
import dark_theme from '../../configs/theme';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'rgb(33,33,33)',
    color: dark_theme.FontColor.main,
    width: 320,
    height: 42,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
});

export default styles;
