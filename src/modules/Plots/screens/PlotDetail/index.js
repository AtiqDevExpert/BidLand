import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {Colors} from '../../../../constants/Colors';
import {BackIconWhite} from '@assets/SVG/SvgDashboard';
import ListofClientCard from '@components/ListofClientCard/ListofClientCard';
import styles from './styles';
import Button from '@components/Button/button';
import SalePlotModal from '@components/SalePlotModal';
//component containing the view of Login screen
const PlotDetail = ({navigation}) => {
  const [issalePlotModalVisible, setSalePlotModalVisible] = useState(false);

  const clientDetail = [
    {
      personName: 'John Smith',
      plotcount: '5',
      Block: 'Block C',
      location: 'Plot 266, Block B H.B.F.C Society, Lahore, Punjab, Pakistan',
      totalInvestment: '50 Lacs',
    },
    {
      personName: 'John Aly',
      plotcount: '8',
      Block: 'Block B',
      location: 'Plot 266, Block B H.B.F.C Society, Lahore, Punjab, Pakistan',
      totalInvestment: '70 Lacs',
    },
    {
      personName: 'Smith Asad',
      plotcount: '7',
      Block: 'Block C',
      location: 'Plot 266, Block B H.B.F.C Society, Lahore, Punjab, Pakistan',
      totalInvestment: '10 Lacs',
    },
    {
      personName: 'Jawad Ahmed',
      plotcount: '5',
      Block: 'Block K',
      location: 'Plot 266, Block B H.B.F.C Society, Lahore, Punjab, Pakistan',
      totalInvestment: '60 Lacs',
    },
  ];
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.view1}>
        <BackIconWhite
          style={styles.backIcon}
          fill={Colors.white}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text1}>Plot Detail</Text>
        <BackIconWhite style={styles.backIcon1} />
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              width: '94%',
              backgroundColor: Colors.white,
              marginVertical: 10,
              borderRadius: 11,
            }}>
            <Text style={styles.text2}>Property Detail</Text>
            <Text style={styles.text3}>Avenue Society</Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                flex: 1,
              }}>
              <View style={{width: '50%', flex: 1}}>
                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Plot No:</Text>
                  <Text style={styles.text5}>03251 - 21251</Text>
                </View>

                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Price:</Text>
                  <Text style={styles.text5}>2 Crore</Text>
                </View>

                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Plot Area:</Text>
                  <Text style={styles.text5}>2 Kanal</Text>
                </View>

                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Purchase Date:</Text>
                  <Text style={styles.text5}>22-Oct-2021</Text>
                </View>

                {/* <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Profit:</Text>
                  <Text style={styles.text5}>22,00000</Text>
                </View> */}
              </View>

              <View
                style={{
                  width: '50%',
                  //backgroundColor: 'yellow'
                }}>
                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Address:</Text>
                  <Text numberOfLines={1} style={styles.text5}>
                    New colony 33 streerny ali kodex
                  </Text>
                </View>

                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Plot Dimension: </Text>
                  <Text style={styles.text5}>307 * 307</Text>
                </View>

                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>No Of Clients:</Text>
                  <Text style={styles.text5}>2 </Text>
                </View>

                {/* <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Sold Date:</Text>
                  <Text style={styles.text5}>22-Nov-2021</Text>
                </View> */}
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.white,
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: Colors.white,
              marginVertical: 10,
            }}>
            <Text style={styles.text6}>Client’s Detail</Text>
          </View>
        </View>

        <View style={styles.view12}>
          <FlatList
            nestedScrollEnabled={true}
            style={{
              borderRadius: 20,

              //  backgroundColor:"orange"
            }}
            data={clientDetail}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <ListofClientCard item1={item} />;
            }}
            keyExtractor={item => item.id}
          />
        </View>

        <View
          style={{
            marginVertical: 10,
            justifyContent: 'center',
            //backgroundColor:"red"
          }}>
          <Button
            text={'Sale Plot'}
            color={Colors.white}
            fontSize={15}
            height={50}
            width={'94%'}
            backgroundColor={Colors.darkPrimery}
            onPress={() => {
              setSalePlotModalVisible(true);
            }}
          />
        </View>
      </ScrollView>

      <>
        <SalePlotModal
          isModalVisible={issalePlotModalVisible}
          setModalVisible={setSalePlotModalVisible}
        />
      </>
    </SafeAreaView>
  );
};

export default PlotDetail;
