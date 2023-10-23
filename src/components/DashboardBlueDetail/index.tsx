import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {Colors} from '../../constants/Colors';




const DashboardBlueDetail: React.FC<any> = ({
  totalInvestment,
  totalProfit,
  TotalLoss,
  monthlyProfit,
  startDate,
  endDate,

}) => {



  return (
    <SafeAreaView
      style={styles.main}>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.text1}>Total Investment</Text>
          <Text style={styles.text2}>{totalInvestment}</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.text1}>Total Profit</Text>
          <Text style={styles.text2}>{totalProfit}</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text1}>Total Loss</Text>
          <Text style={styles.text2}>{TotalLoss}</Text>
        </View>
       
 
      </View>

      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.text1}>Monthly Profit</Text>
          <Text style={styles.text2}>{monthlyProfit}</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.text1}>Start Date</Text>
          <Text style={styles.text2}>{startDate}</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text1}>End Date{'\n'}Last Transection</Text>
          <Text style={styles.text4}>{endDate}</Text>
        </View>
       
 
      </View>

     


     
    </SafeAreaView>
  );
};

export default DashboardBlueDetail;
