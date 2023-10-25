import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  mainView1: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: "center",
  },
  mainView: {
    backgroundColor: '#F5F5F5',
  },
  view1: {
    backgroundColor: Colors.darkPrimery,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topview1: {
    // height: '10%',
    // width: '100%',
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
    alignSelf: 'center',
    // height: 450,
    backgroundColor: '#F5F5F5',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.black,
    // marginTop: 15,
    padding: 5,
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
  searchInputContainer: {
    height: 50,
    backgroundColor: Colors.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
    // marginBottom: 10,
    width: '100%',
  },
  sortBtn: {
    backgroundColor: Colors.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
