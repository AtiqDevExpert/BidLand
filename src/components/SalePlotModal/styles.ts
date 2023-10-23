import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants/Colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  modelMainView: {
    height: 420,
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  modelView1: {  
    //backgroundColor: Colors.darkPrimery,
   flexDirection: 'row-reverse',
  // backgroundColor:"green"
 },
 filter:{
  fontSize:28,
  fontWeight: '600',
  color: Colors.darkPrimery,
 },
 view1:{
  width:"94%",
  alignSelf: 'center',
  marginVertical:10,
  //backgroundColor: "red"
 // backgroundColor:"green"
 },
 view2:{
  width:"94%",
  alignSelf: 'center',
  marginVertical:10,
  justifyContent:'space-between',
  //backgroundColor: "red",
   flexDirection:"row"
 },
 crossRedIcon: {
  height: 25,
  width: 25,
  top:-12,
  right:12,
 // backgroundColor:"green"
},
downIcon: {
  height: 18,
  width: 18,
  marginHorizontal:27
},
text1:{
  fontSize:18,
  fontWeight: '600',
  color: Colors.darkPrimery,
  marginVertical:5,
  // backgroundColor:"green"
   },
   
 text2:{
  fontSize:16,
  fontWeight: '600',
  color: "#A4A4A4",
  marginHorizontal:10,
 },
 text3:{
  fontSize:16,
  fontWeight: '600',
  color: "#A4A4A4",
  marginHorizontal:10,
  marginVertical:12,
 },
 view9:{
  width:"94%",
  alignSelf: 'center',
  marginVertical:10,
  // backgroundColor: "red",
   //flexDirection:"row"
 },
 view11:{
  backgroundColor: '#F5F5F5',
  borderRadius: 10,
  //backgroundColor:"yellow"
},
view12:{
  flexDirection:'row' , 
  justifyContent:'space-between',
  },
  view13: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
},
});
