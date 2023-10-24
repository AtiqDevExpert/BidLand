import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  logo: {height: 230, width: 230},
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetpassword: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  fgdiscription: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 35,
    marginTop: 10,
  },
  view3: {alignContent: 'center'},

  view4: {flexDirection: 'row'},
  view5: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  counter: {
    justifyContent: 'center',
  },
  view6: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  bluebackground: {
    backgroundColor: '#fff',
    borderRadius: width * 0.09,
    justifyContent: 'center',
  },
  whitebackground: {
    backgroundColor: '#fff',
    borderRadius: width * 0.09,
    justifyContent: 'center',
    marginHorizontal: 10,
    alignContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    // lineHeight: 20,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  sec: {textAlign: 'center', color: Colors.black},
});
