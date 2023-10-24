import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  timer: {
    marginVertical: 10,
    color: Colors.textColor,
  },
  timerText: {
    color: Colors.textColor,
    textAlign: 'center',
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 5,
  },
  logo: {height: 230, width: 230},
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  view3: {
    justifyContent: 'center',
  },

  view4: {flexDirection: 'row'},
  resend: {color: Colors.darkPrimery, fontWeight: '700'},
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
    // flex: 1,
    //top: 50,
    backgroundColor: Colors.white,
    borderRadius: width * 0.09,
  },
  whitebackground: {
    // width: '100%',
    backgroundColor: Colors.white,
    borderRadius: width * 0.09,
    justifyContent: 'center',
    marginHorizontal: 10,
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
  modelMainView: {
    height: '65%',
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  modelView1: {
    // backgroundColor: Colors.darkPrimery,
    flexDirection: 'row-reverse',
  },
  modelView2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  modelText: {
    color: Colors.modalTextColor,
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalLogo: {
    height: 220,
    width: 220,
  },
  crossRedIcon: {
    height: 20,
    width: 20,
    marginTop: -10,
    marginRight: -8,
  },
  sec: {
    textAlign: 'center',
    color: Colors.textColor,
  },
});
