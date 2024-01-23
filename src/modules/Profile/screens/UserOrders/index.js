import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import Loading from '../../../../components/Loading/Loading';
import {
  get_All_Orders,
  get_bidding_properties,
  get_properties,
} from '../../../../utils/API/Requests';

const UserOrders = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {width} = Dimensions.get('screen');
  const [orders, setOrders] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      getAllOrder();
    }, []),
  );
  const getAllOrder = async () => {
    setLoading(true);
    let myOrdersArray = [];
    try {
      let response = await get_All_Orders();
      let token = await AsyncStorage.getItem('USER_TOKEN');
      let bidingProperties = await get_bidding_properties(token);
      let listingproperties = await get_properties(token);

      // Ensure that both are arrays
      if (!Array.isArray(bidingProperties)) {
        bidingProperties = [];
      }

      if (!Array.isArray(listingproperties)) {
        listingproperties = [];
      }

      // Combine the two arrays
      const allProperties = [...listingproperties, ...bidingProperties];

      if (response?.orders?.length > 0) {
        for (let i = 0; i < response?.orders?.length; i++) {
          const element = response?.orders[i];

          let findedProperty = allProperties.forEach(property => {
            return property._id === element.propertyId;
          });
          console.log(findedProperty);
          if (findedProperty) {
            myOrdersArray.push(findedProperty);
          }
        }
        console.log('esponse?.orders', myOrdersArray);
        setOrders(response?.orders);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleBack = () => {
    navigation.goBack();
  };

  const ListHeader = () => {
    return (
      <View style={styles.header1}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={{left: 30}}>
          <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
            Total Orders
          </Text>
        </View>
      </View>
    );
  };
  const renderOrders = ({item, index}) => {
    return (
      <View style={{marginVertical: 10, marginHorizontal: 20}}>
        <View style={[styles.card]}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: Colors.black}}>
                {item?.paymentName ? item.paymentName : '--------'}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: Colors.black, fontSize: 16}}>
                PKR-{item.totalPrice ? item.totalPrice : ''}
              </Text>
            </View>

            <Text style={{color: Colors.black, fontSize: 14, marginTop: 5}}>
              {item?.location?.address ? item?.location?.address : ''}
            </Text>
            <Text
              style={{
                color: Colors.black,
                fontSize: 14,
                marginTop: 5,
                backgroundColor: Colors.graywhite,
              }}>
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 14,
                  marginTop: 5,
                  fontWeight: 'bold',
                }}>
                Payment Mode :
              </Text>
              {item?.paymentMethod ? item?.paymentMethod : ''}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ListHeader />
      <View style={{flex: 1, marginVertical: 10}}>
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          data={orders}
          renderItem={renderOrders}
        />
      </View>
      <>
        {loading && (
          <View style={[styles.popupContainer, {zIndex: 99999}]}>
            <Loading />
          </View>
        )}
      </>
    </ScrollView>
  );
};

export default UserOrders;
