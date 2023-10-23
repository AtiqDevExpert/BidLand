import {StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  preloader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.49);',
  },
});
