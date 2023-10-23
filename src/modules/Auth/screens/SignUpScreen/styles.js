import {StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.fullDarkBlue,
  },
  bluebackground: {
    backgroundColor: Colors.darkPrimery,
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
  },
  text: {
    color: Colors.white,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  whitebackground: {
    backgroundColor: Colors.white,
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
  },

  dummyView: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  dummyView1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  dummy: {
    marginHorizontal: 20,
  },
  input: {marginVertical: 20},
  mainView1: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
