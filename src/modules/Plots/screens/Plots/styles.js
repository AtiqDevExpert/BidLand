import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  mainView1: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    //alignItems: "center",
  },
  mainView: {
    backgroundColor: '#fff',
  },
  view1: {
    backgroundColor: Colors.darkPrimery,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topview1: {
    height: '25%',
    width: '100%',
    backgroundColor: Colors.darkPrimery,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    marginBottom:20,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
    alignSelf: 'center',
    // height: 450,
    // backgroundColor:'green'
  },
  text1: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.white,
    marginTop: 25,
  },



  view11: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '94%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 24,
  },
  locationIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  searchRightIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  view10: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '88%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text3: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.darkPrimery,
    //backgroundColor:"red"
    //marginHorizontal:10,
    //marginVertical:12,
  },
  routeView: {
    justifyContent: 'center',
    marginVertical: 15,
  },
  switchertxt: {
    fontWeight: '400',
    fontSize: 20,
    //marginVertical:5
  },
  iconView: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
