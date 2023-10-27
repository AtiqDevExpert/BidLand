import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {Colors} from '../../../../constants/Colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    //alignItems: "center",
  },
  view1: {
    height: '10%',
    width: '100%',
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
  },
  view12: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 300,
  },
  backIcon: {
    height: 15,
    width: 25,
    marginHorizontal: 15,
  },
  backIcon1: {
    height: 15,
    width: 25,
    marginHorizontal: 15,
  },
  text1: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
    // marginTop:25,
  },
  text2: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.switchergray,
    marginTop: 17,
    marginHorizontal: 20,
  },
  text3: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.darkPrimery,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text4: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkPrimery,
  },
  text5: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.switchergray,
  },
  text6: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkPrimery,
    marginVertical: 16,
    marginHorizontal: 25,
  },
});
