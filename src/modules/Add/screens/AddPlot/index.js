
import React,{useEffect} from 'react';
import {View, Text, ScrollView,SafeAreaView} from 'react-native';
import styles from './styles';

//component containing the view of Login screen
const AddPlot = ({navigation}) => {
  useEffect(() => {
    navigation.navigate('AddNewSocietyModule')
   },[])
  return (
    <SafeAreaView>
    <Text>
      add screen
    </Text>
    </SafeAreaView>
  );
};

export default AddPlot
