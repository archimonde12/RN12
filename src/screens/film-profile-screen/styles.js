import {StyleSheet} from 'react-native';
import black_theme from '../../configs/theme';

const styles = StyleSheet.create({
  theme: {
    backgroundColor: black_theme.BGColor,
    alignItems: 'center',
    paddingVertical: 40,
  },
  name: {
    color: black_theme.FontColor.main,
    fontSize: 36,
    textTransform: 'capitalize',
    lineHeight: 45,
    marginTop: 10,
  },
  member: {color: black_theme.activeicon, fontSize: 18, marginBottom: 10},
});

export default styles;
