import {StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';

import {Colors} from '../../constants/Colors';

export default StyleSheet.create({
  mainInputView3: {
    borderWidth: 1,
    bottom: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 15,
    backgroundColor: '#F6F6F6',
    borderColor: '#F6F6F6',
  },
  inputView: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 20,
  },
  container: {width: 200},
  labelStyle: {
    textAlign: 'left',
    fontSize: 12,
    color: 'black',
    padding: 15,
  },
});
