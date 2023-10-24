import {StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bluebackground: {
    backgroundColor: Colors.white,
    borderRadius: width * 0.09,

    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  whitebackground: {
    backgroundColor: Colors.white,
    borderRadius: width * 0.09,
  },
  dontaccountview: {
    marginVertical: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
  },
  Forgetpass: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginVertical: 20,
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
    // paddingHorizontal: 20,
    // marginVertical: 30,
  },
  input: {marginVertical: 15, marginHorizontal: 10},
  mainView1: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
