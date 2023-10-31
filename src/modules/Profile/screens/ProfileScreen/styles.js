import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
export default StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  img: {
    backgroundColor: Colors.white,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 5,

    marginVertical: 10,
    height: 180,
    width: 180,
    borderRadius: 100,

    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    flex: 1,
    // backgroundColor: Colors.fullDarkBlue,
  },

  text: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'right',
    justifyContent: 'center',
  },
  whitebackground: {
    backgroundColor: Colors.white,
    borderRadius: width * 0.09,
    marginHorizontal: 5,
    justifyContent: 'center',
    flex: 1,
  },

  dummyView: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  dummyView1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  dummy: {
    marginHorizontal: 20,
  },
  input: {marginVertical: 20, marginHorizontal: 10},
  mainView1: {
    justifyContent: 'center',
    alignContent: 'center',
  },
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
    width: 130,
    height: 130,
    borderRadius: 100,
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
  coverView: {
    backgroundColor: Colors.white,
    height: 150,
    width: 150,
    borderRadius: 100,
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
  crossRedIcon: {
    height: 30,
    width: 30,
    bottom: 18,
    marginRight: -12,
  },
  crossRedIcon2: {},
});
