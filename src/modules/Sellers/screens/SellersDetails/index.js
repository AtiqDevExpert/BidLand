import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SwitchSelector from 'react-native-switch-selector';
import {Colors} from '../../../../constants/Colors';
import {BackIconWhite} from '@assets/SVG/SvgDashboard';
import styles from './styles';
import Button from '@components/Button/button';
import Loading from '../../../../components/Loading/Loading';
import {
  get_Seller,
  get_properties,
  get_bidding_properties,
} from '../../../../utils/API/Requests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const SellersDetail = ({navigation, route}) => {
  const [activeSwicth, setActiveSwicth] = useState('listing');
  const options = [
    {label: 'Listing', value: 'listing'},
    {label: 'Bid Listing', value: 'bidListing'},
  ];
  const [loading, setLoading] = useState(false);
  const [seller, setSeller] = useState({});
  const [proerties, setProperties] = useState([]);
  const [biddingProerties, setBiddingProperties] = useState([]);
  const [sellerProperties, setSellerProperties] = useState([]);
  let sellerId = route.params?.sellerId;
  let sellerObj = route.params?.seller;

  const {width} = Dimensions.get('screen');

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

  useFocusEffect(
    React.useCallback(() => {
      fetchAllSellers();
      fetchSellerProperty();
    }, [sellerId]),
  );

  const fetchSellerProperty = async () => {
    setLoading(true);
    try {
      let token = await AsyncStorage.getItem('USER_TOKEN');
      let bidingProperties = await get_bidding_properties(token);
      let listingproperties = await get_properties(token);

      const filteredBidingProperties = bidingProperties.filter(
        property => property.addedBy === sellerId,
      );
      const filteredProperties = listingproperties?.properties.filter(
        property => property.addedBy === sellerId,
      );

      const allSellerProperties = [
        ...filteredProperties,
        ...filteredBidingProperties,
      ];

      // Set the merged result in the state
      setSellerProperties(allSellerProperties);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const renderProperties = ({item, index}) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', item)}
        style={{marginVertical: 5}}>
        <View style={styles.card}>
          {/* House image */}
          <View>
            <Image
              source={{uri: item.images[0]}} // Assuming item.images contains image URLs
              style={styles.cardImage}
            />
          </View>
          <View style={{marginTop: 5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: Colors.black}}>
                {item.name ? item.name : ''}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: Colors.black, fontSize: 16}}>
                PKR-{item.fixedPrice ? item.fixedPrice : ''}
              </Text>
            </View>

            <Text style={{color: Colors.black, fontSize: 14, marginTop: 5}}>
              {item?.location?.address ? item?.location?.address : ''}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={styles.facility}>
                <Icon name="hotel" size={18} />
                <Text style={styles.facilityText}>
                  {item?.specifications[0]}
                </Text>
              </View>
              <View style={styles.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={styles.facilityText}>
                  {item?.specifications[1]}
                </Text>
              </View>
              <View style={styles.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={styles.facilityText}>
                  {item?.specifications[2]}
                </Text>
              </View>
              <View style={styles.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={styles.facilityText}>
                  {item?.specifications[3]}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  const contactToSeller = () => {
    navigation.navigate('ChatModule', {seller: sellerObj});
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar hidden={true} />
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
              width: '100%',
              backgroundColor: Colors.white,
              marginVertical: 10,
              // borderRadius: 10,
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
            <Text style={styles.text6}>Seller Properties</Text>
          </View>
        </View>
        {/* <View
          style={{
            paddingBottom: 5,
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          <SwitchSelector
            initial={0}
            height={50}
            onPress={label => {
              setActiveSwicth(label);
            }}
            textColor={'#000'}
            bold={true}
            fontSize={15}
            selectedColor={'#fff'}
            buttonColor={'#000'}
            borderColor={'#000'}
            hasPadding
            options={options}
            testID="gender-switch-selector"
            accessibilityLabel="gender-switch-selector"
          />
        </View> */}
        <>
          <View style={{flex: 1}}>
            <FlatList
              snapToInterval={width - 20}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingLeft: 20,
                paddingVertical: 20,
              }}
              horizontal={false}
              data={sellerProperties}
              renderItem={renderProperties}
              extraData={sellerProperties}
            />
          </View>
        </>
        <View
          style={{
            marginVertical: 10,
            justifyContent: 'center',
          }}>
          <Button
            text={'Contact to Seller'}
            color={Colors.white}
            fontSize={15}
            height={50}
            width={'94%'}
            backgroundColor={Colors.dark}
            borderColor={Colors.dark}
            onPress={contactToSeller}
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
