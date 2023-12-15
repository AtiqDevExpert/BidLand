import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  questionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 10,
  },
  questionText: {
    fontSize: 16,
    color: '#333',
  },
  chatContainer: {
    flex: 1,
    marginVertical: 20,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  messageText: {
    fontSize: 16,
  },
});
