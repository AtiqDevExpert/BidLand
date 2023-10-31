import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import SellerComponent from '@components/SellerComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Loading from '../../../../components/Loading/Loading';
import {get_allSeller} from '../../../../utils/API/Requests';
const Sellers = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [allSellers, setAllSellers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const fetchAllSellers = async () => {
    setLoading(true);
    try {
      let token = await AsyncStorage.getItem('USER_TOKEN');
      let response = await get_allSeller(token);

      if (response?.sellers?.length > 0) {
        setAllSellers(response.sellers);
        setLoading(false);
        setRefreshing(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    setRefreshing(false);
    fetchAllSellers();
  }, []);
  const onRefresh = () => {
    setRefreshing(true);
    fetchAllSellers();
  };
  const renderSellers = ({item, index}) => {
    return (
      <SellerComponent
        item1={item}
        onPressButton={() =>
          navigation.navigate('SellersDetail', {
            sellerId: item._id,
            seller: item,
          })
        }
      />
    );
  };
  return (
    <SafeAreaView style={styles.mainView1}>
      <StatusBar hidden={true} />
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 20,
            marginHorizontal: 10,
          }}>
          <>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text1}>All Sellers</Text>
            </View>
          </>
          <>
            <View
              style={{
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.searchInputContainer}>
                <Icon name="search" color={Colors.grey} size={25} />
                <TextInput
                  placeholder="Search seller"
                  placeholderTextColor={'#000'}
                  value={search}
                  onChange={text => {
                    setSearch(text);
                  }}
                />
              </View>
            </View>
          </>
        </View>

        <View style={{flex: 1}}>
          <FlatList
            nestedScrollEnabled={true}
            style={{
              borderRadius: 20,
            }}
            data={allSellers}
            showsVerticalScrollIndicator={false}
            renderItem={renderSellers}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </>

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

export default Sellers;
