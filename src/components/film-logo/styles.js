import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  button: {
    backgroundColor: 'rgb(255 ,169 ,10)',
    width: 285,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(255 ,187, 59)',
    marginBottom: 35,
    letterSpacing: 1.2,
  },
});

export default styles;
