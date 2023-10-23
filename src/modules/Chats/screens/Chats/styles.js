import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
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
  text1: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.white,
  },
  view11: {
    backgroundColor: '#62ABFC',
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
    backgroundColor: '#62ABFC',
    paddingHorizontal: 15,
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
   // backgroundColor: 'red',
  },
  view12: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 530,
  },
  safeview: {flex: 1, backgroundColor: '#F5F5F5'},
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '94%',
    justifyContent: 'space-between',
  },
  safeview2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  view3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  view4: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: '#263238',
    fontsize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalMain: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalView2: {
    marginTop: 120,
    // flex: 1,
    marginLeft: 230,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 120,
    width: 100,
    borderRadius: 10,
  },
  editButton: {
    height: 20,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: 100,
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
