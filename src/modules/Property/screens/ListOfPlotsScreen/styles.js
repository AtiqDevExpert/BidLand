import {StyleSheet} from 'react-native';
// import colors from '@commons/colors'
//import fonts from '../../'
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  mainView: {
     flex: 1,
    backgroundColor: Colors.white,
  },
  bluebackground: {
    height:height,
    backgroundColor: Colors.darkPrimery,
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
    marginTop: 50,
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
 //   backgroundColor: "red",
  },
  buttonView: {
    marginBottom: 5
  },
  icon: {
    height: 20,
    width: 30
  },
  buttonTouch: {
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  indicator: {
    height: 50,
    width: '100%'
  },
  mainView1: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
    },
});
