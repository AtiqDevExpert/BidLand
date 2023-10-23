import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants/Colors';

export default StyleSheet.create({  
    mainView: {
      backgroundColor: "red",
      marginBottom:71,
    },
    investmentICon:{
      height:20,
      width:20,
    },
    ploticon:{
      height:30,
      width:30,
      margin:15,
    },
    arrowIconnext:{
      height:30,
      width:30,
    },
    plotsView1: {
      backgroundColor: "#fff",
      width: '94%',
      alignSelf: 'center',
      borderRadius: 9,
    },
    plotsView2: { 
      width:"100%" ,
      //backgroundColor: "green",
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      },
      plotsView3: { 
        flexDirection: 'row',
        alignItems: 'center'
      },
      plotsView4: { margin:7,
        backgroundColor:Colors.graywhite,
        borderRadius:5,
      },
      plotsView5: { 
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor:"yellow"
        },
      plotsView6: {
          marginHorizontal:10,
        },
      plotsText1: {
        fontSize:20,
        fontWeight:"600",
        color:"#818181",
        marginHorizontal:7
        },
        plotsText2:{
          marginHorizontal:7,
          fontSize:30,
          fontWeight:"600",
          color:Colors.darkPrimery,
          //backgroundColor:"red"
          },
  
});
