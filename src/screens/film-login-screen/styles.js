import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  //Background Image
  backgroundImage: {
    position: 'absolute',
    bottom: 200,
    left: -100,
  },
  //Forgot Button
  forgotButton: {
    position: 'absolute',
    top: 45,
    right: 20,
  },
  //Social Header
  socialHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 17,
  },
  line: {
    width: 80,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.36)',
  },
  socialTitle: {
    color: 'white',
    marginHorizontal: 20,
  },

  //Social Group Icon
  socialIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: 200,
  },

  //Register
  registerTop: {
    color: 'rgba(255,255,255,0.64)',
  },
  registerBottom: {
    color: 'rgb(255,255,255)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;
