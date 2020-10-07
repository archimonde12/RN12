import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  intro: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 285,
    marginBottom: 37,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  content: {
    color: 'rgba(255,255,255,0.64)',
    textAlign: 'center',
  },
});

export default styles;
