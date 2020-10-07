import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'white',
    letterSpacing: 0.84,
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    minWidth: 285,
    height: 42,
    backgroundColor: 'rgb(33,33,33)',
    borderRadius: 10,
    paddingLeft: 20,
    color: 'rgb(255,255,255)',
    fontSize: 17,
  },
});

export default styles;
