import React, {useEffect, useState} from 'react';
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
import Loading from '../../../../components/Loading/Loading';
import {get_Seller} from '../../../../utils/API/Requests';
import AsyncStorage from '@react-native-async-storage/async-storage';
//component containing the view of Login screen
const SellersDetail = ({navigation, route}) => {
  const [issalePlotModalVisible, setSalePlotModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [seller, setSeller] = useState({});
  let sellerId = route.params;

  const fetchAllSellers = async () => {
    setLoading(true);
    try {
      let token = await AsyncStorage.getItem('USER_TOKEN');
      let response = await get_Seller(token, sellerId);

      if (response) {
        setSeller(response);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllSellers();
  }, [sellerId]);
  console.log(seller);
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.view1}>
        <BackIconWhite
          style={styles.backIcon}
          fill={Colors.dark}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text1}>Seller Detail</Text>
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
              padding: 10,
            }}>
            <Text style={styles.text3}>{seller?.seller?.username}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                flex: 1,
              }}>
              <View style={{width: '50%', flex: 1}}>
                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Phone No :</Text>
                  <Text style={styles.text5}>{seller?.seller?.phone}</Text>
                </View>
              </View>

              <View
                style={{
                  width: '50%',
                  //backgroundColor: 'yellow'
                }}>
                <View style={{marginVertical: 10}}>
                  <Text style={styles.text4}>Email :</Text>
                  <Text numberOfLines={1} style={styles.text5}>
                    {seller?.seller?.email}
                  </Text>
                </View>
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

        {/* <View style={styles.view12}>
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
        </View> */}

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

      {loading && (
        <View
          style={{
            zIndex: 99999,
            width: '100%',
            height: '100%',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SellersDetail;
