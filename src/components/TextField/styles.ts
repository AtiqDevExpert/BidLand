import {StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    backgroundColor: 'white',
  },
  labelContainer: {
    marginTop: -3.6,   
    position: 'absolute',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: "#8B8B8B"
  },
  label: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: '#B00020',
    fontFamily: 'Avenir-Medium',
  },
});