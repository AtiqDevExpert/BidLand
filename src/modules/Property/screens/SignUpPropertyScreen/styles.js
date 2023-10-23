import {StyleSheet} from 'react-native';
// import colors from '@commons/colors'
// import fonts from '@commons/fonts'
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bluebackground: {
    backgroundColor: Colors.darkPrimery,
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
    // marginTop: 10,
    // height: height,
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
    marginBottom: 100,
  },
  dontaccountview: {
    marginTop: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  Forgetpass: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  dummyView: {
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 15,
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
  cover: {marginBottom: 10, color: Colors.darkPrimery},
  coverView: {
    backgroundColor: Colors.white,
    height: 150,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.hiddenText,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {height: 50, width: 50},
  buttonView: {marginBottom: 45},

  modelMainView: {
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
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalLogo: {
    height: 220,
    width: 220,
  },
  crossRedIcon: {
    height: 30,
    width: 30,
    bottom: 18,
    marginRight: -12,
  },
  crossRedIcon2: {
    height: 30,
    width: 30,
    bottom: 20,
    marginRight: -20,
  },
  sec: {textAlign: 'center', color: Colors.textColor},

  ModalView: {
    backgroundColor: '#FFFFFF',

    height: 200,
    width: '100%',

    // marginHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  ModalBtnView: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-evenly',
    // marginVertical:-50
  },
  Modalbtn: {
    borderRadius: 40,
    backgroundColor: 'white',
    height: 50,
    width: 130,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 0.2,
  },
  Modalbtntext: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
    flex: 1,
  },
  modalIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  images: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  imageBox: {
    flexDirection: 'row-reverse',
    marginHorizontal: 10,
  },
  touchable: {
    marginTop: -10,
    height: 15,
    marginLeft: -10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonTouch: {
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  icon: {height: 20, width: 30},
  indicator: {height: 120, width: '100%'},
  mainView1: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
