
import {StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import { Colors } from '../../constants/Colors';

export default StyleSheet.create({
  input: {
    padding: 15,
    //borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    //backgroundColor: 'red',
    width:"87%"
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
  text1:{
    fontStyle: 'normal',
    fontWeight:"400",
    fontSize:14,
    lineHeight:17,
    color:"#263238",
  },
  text5:{
    fontStyle: 'normal',
    fontWeight:"600",
    fontSize:20,
    color:"#fff",
    marginVertical:4
  },
  text6:{
    fontStyle: 'normal',
    fontWeight:"400",
    fontSize:14,
    color:"#263238",
    marginRight:5
  },
  ndummyChild1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:5
  },
  ndummyChild2:{
    width:"70%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
},
ndummyChild21:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: 5,
  marginHorizontal:5
},
logo: { height: 15, width: 15 },
text2: {
  width:"70%",
  color:  Colors.black,
  fontFamily: 'SF Pro Display',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: 14,
   marginHorizontal: 7,
},
ndummyChild3:{alignItems: 'center', alignSelf: 'center'},
bluePrice: {
  color: Colors.darkPrimery,
  fontFamily: 'SF Pro Display',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: 16,
  alignItems: 'center',
  justifyContent: 'center',
 textAlign: 'center',

},
});
