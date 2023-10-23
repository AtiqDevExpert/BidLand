import DashboardBlueDetail from '@components/DashboardBlueDetail';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import TotalPlotsDashboard from '@components/TotalPlotsDashboard';
const Profile = ({navigation, }) => {
  const data =[
    {
      month:"March",
      amount:"2000000/-",
    },
    {
      month:"April",
      amount:"7000000/-",
    },
    {
      month:"May",
      amount:"5000000/-",
    },
  ] 
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View style={styles.view1}>
          <ImageBackground
            source={require('../../../../Assets/Images/Vector.png')}
            style={styles.img}>
            <View style={styles.view2}>
              <Text style={styles.text1}>Jawad Ali</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text2}>jawadali@gmail.com</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.view4}>
          <View style={styles.view5}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 18,
                textAlign: 'left',
                color: '#0277FA',
              }}>
              City
            </Text>
          </View>
          <View style={styles.view5}>
            <Text style={styles.text3}>Lahore</Text>
          </View>
          <View style={styles.view6}>
            <Text style={styles.text4}>Address</Text>
          </View>
          <View style={styles.view7}>
            <Text style={styles.text5}>
              Shop # 9, Sector A Commercial Market, Block A H.B.F.C Society,
              Lahore, Punjab 54000, Pakistan
            </Text>
          </View>
        </View>

        <View style={styles.mainView}>
          <DashboardBlueDetail
            totalInvestment={'45,00000'}
            totalProfit={'5,00000'}
            TotalLoss={'00'}
            monthlyProfit={'45,00000'}
            startDate={'22-Mar-22'}
            endDate={'22- Jun - 22'}
          />
        </View>
        <View style={styles.view8}>
          <View>
            <TotalPlotsDashboard
              totalPlotsValue={'7'}
              totalClientsValue={'20'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
