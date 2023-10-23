import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants/Colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: Colors.darkPrimery,
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderBottomWidth: 1,
    backgroundColor: Colors.otpBackgroundColor,
    borderRadius: 5,
    borderColor: Colors.darkPrimery,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.borderColor,
    color: Colors.textColor,
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
  logo: { height: 230, width: 230 },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  forgetpassword: {
    color: Colors.darkPrimery,
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  fgdiscription: {
    color: Colors.textColor,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 35,
    marginTop: 10,
  },
  view3: {
    justifyContent: 'center',

  },
  otpView: {
    width: '70%',
    height: 100,
    justifyContent: 'center',
  },
  view4: { flexDirection: 'row' },
  resend: { color: Colors.darkPrimery, fontWeight: '700' },
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
    backgroundColor: '#0277FA',
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
  },
  whitebackground: {
    width: '100%',

    backgroundColor: '#fff',
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
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
    height: '95%',
    width: '100%',
    backgroundColor: "#FBFBFB",
    borderRadius: 10,
    // flex:1
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
    marginVertical: 10,
    marginHorizontal:20,
    //backgroundColor:"red"
  },
  modelText: {
    color: Colors.darkPrimery,
    fontSize: 24,
    fontWeight: '500',
    alignSelf:'flex-start',
    marginHorizontal:10
    },
  modalLogo: {
    height: 220,
    width: 220
  },
  crossRedIcon: {
    height: 20,
    width: 20,
    marginTop: -10,
    marginRight: -8
  },
  sec: {
    textAlign: 'center',
    color: Colors.textColor
  },
  icon: {height: 20, width: 20},
});
