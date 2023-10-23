import { red } from '@mui/material/colors';
import {StyleSheet} from 'react-native';
// import colors from '@commons/colors'
//import fonts from '../../'
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import {Colors} from '../../constants/Colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  modalizeBluebackground: {
    height: height,
    backgroundColor: Colors.darkPrimery,
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
    // marginTop: 50,
  },
  bluebackground: {
    height: height,
    backgroundColor: Colors.darkPrimery,
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
    marginTop: 50,
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
  username: {
    color: Colors.darkPrimery,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  price: {
    color: Colors.greyClient,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  personlogoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {height: 16, width: 16},
  address: {
    color: Colors.address,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'left',
    justifyContent: 'flex-end',
     marginHorizontal:2
  },
  location:{
    color: Colors.address,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'left',
    // justifyContent: 'flex-end',
    //  width:'95%',
    flexWrap:'wrap',
    marginHorizontal:5
    // backgroundColor:'green'
  },
  plotamount: {
    color: Colors.plotAmountColor,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    marginHorizontal: 10,
  },
  totalInvestment: {
    color: Colors.greyClient,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
  },
  whitebackground: {
    backgroundColor: Colors.white,
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
    marginBottom: 40,
  },
  modalizeWhitebackground: {
    height: '100%',
    backgroundColor: Colors.white,
    borderTopStartRadius: width * 0.09,
    borderTopEndRadius: width * 0.09,
    marginBottom: 40,
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
    //backgroundColor: "red",
  },
  dummyView1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  dummy: {
    marginHorizontal: 20,
  },
  input: {marginVertical: 15},
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
    // height: '65%',
    // width: '100%',
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
    //  flex:1,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  buttonTouch: {
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  icon: {height: 20, width: 30},
  mainView1: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  bigText: {
    color: Colors.darkPrimery,
    marginHorizontal: 25,
    fontSize: 28,
    fontWeight: '600',
  },
  checkBox: {
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  cardView: {
    marginVertical: 10,
    marginHorizontal: 8,
    backgroundColor: 'white',
    // width: '95%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#FBFBFBf',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  cardView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardView2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView3: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    paddingTop: 10,
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  cardView4: {
    height: 38,
    width: 1,
    borderWidth: 2,
    borderColor: '#0277FA',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView5: {
    flexDirection: 'row',
    marginHorizontal: 7,
    justifyContent: 'space-between',
    // width: '80%',
    // backgroundColor:'green'
  },
  cardView6: {
    flexDirection: 'row',
  },
  cardView7: {
    flexDirection: 'row',
    marginHorizontal: 7,
    marginTop: 5,
    // backgroundColor:"green"
  },
  indicator: {
    height: 50,
    width: '100%',
  },
  modalView2: {
    position: 'absolute',
    //marginTop: 120,
    zIndex: 1,
    top:25,
    Left: 230,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 70,
    width: 80,
    borderRadius: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },
  editButton: {
    height: 20,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: 80,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: '#CACACA',
  },
  deleteButton: {
    height: 20,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
