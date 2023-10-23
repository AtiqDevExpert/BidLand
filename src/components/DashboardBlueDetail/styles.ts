import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants/Colors';

export default StyleSheet.create({
  main:{
    alignSelf: 'center',
    backgroundColor:"#0277FA",
    width:"100%",
    height:200,
    borderRadius:9,
   // alignItems: 'center',
    justifyContent: 'center',
    },
    view1: {
      alignSelf: 'center',
      //backgroundColor:"green",
      width:"96%",
      height:100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"space-between",
      },
      view2: {
        backgroundColor:"#1B85FB",
        alignItems: 'center',
        justifyContent:"center",
        width:"33%",
        borderRadius:9,
        },
        view3: {
          backgroundColor:"#0277FA",
          alignItems: 'center',
          justifyContent:"center",
          width:"32%",
          borderRadius:9,
          },
    text1: {
        fontSize:14,
        marginTop:15,
        fontWeight:"500",
        color:"#fff",
        textAlign:"center",
      },
      text2: {
        marginVertical:10,
        fontSize:18,
        fontWeight:"700",
        color:"#fff"
      }  ,
      text3: {
        fontSize:14,
        marginTop:15,
        fontWeight:"500",
        color:"#fff",
        textAlign:"center",
      },
      text4: {
        marginVertical:5,
        fontSize:18,
        fontWeight:"700",
        color:"#fff"
      } 

});
