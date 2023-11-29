import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import SwitchSelector from 'react-native-switch-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import {
  get_properties,
  get_bidding_properties,
  place_bid,
} from '../../../../utils/API/Requests';
import Toast from 'react-native-simple-toast';
import Loading from '../../../../components/Loading/Loading';
import {useFocusEffect} from '@react-navigation/native';
import Button from '../../../../components/Button/button';
import TextField from '../../../../components/TextField';
const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [activeSwicth, setActiveSwicth] = useState('listing');
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState({});
  const [biddingProerties, setBiddingProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = useState(false);
  const [bidPrice, setBidPrice] = useState('');
  const options = [
    {label: 'Listing', value: 'listing'},
    {label: 'Bid Listing', value: 'bidListing'},
  ];
  const fetchPropertyListing = async () => {
    setLoading(true);
    try {
      let token = await AsyncStorage.getItem('USER_TOKEN');
      let response = await get_properties(token);

      if (response.properties.length > 0) {
        setProperties(response.properties);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPropertyBidding = async () => {
    setLoading(true);
    try {
      let token = await AsyncStorage.getItem('USER_TOKEN');

      let response = await get_bidding_properties(token);
      if (response.length > 0) {
        setBiddingProperties(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchUserInfo = async () => {
    let userInfo = await AsyncStorage.getItem('USER_INFO');
    let userDetail = JSON.parse(userInfo);
    if (userDetail) {
      setUser(userDetail);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchUserInfo();
      fetchPropertyListing();
      fetchPropertyBidding();
    }, []),
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchPropertyListing();
    fetchPropertyBidding();
    setRefreshing(false);
  };

  const placeBid = async (propertyID, item, bidPrice) => {
    setLoading(true);
    setVisible(false);

    try {
      let body = {
        biddingPrice: bidPrice,
      };
      Toast.show('Request in process', Toast.LONG);
      let response = await place_bid(propertyID, body);
      if (response) {
        Toast.show(response.message, Toast.LONG);
        navigation.navigate('DetailsScreen', {
          item: item,
          bidPrice: response?.bid?.biddingPrice,
          propertyID: propertyID,
        });
        setBidPrice('');
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const renderListingProperties = ({item, index}) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('DetailsScreen', {
            item: item,
            bidPrice: null,
            propertyID: item._id,
          })
        }
        style={{marginVertical: 5}}>
        <View style={[styles.card]}>
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
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizental: 10,
                marginTop: 5,
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
                  {item?.specifications[2]}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizental: 10,
                marginTop: 5,
              }}>
              <View style={styles.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={styles.facilityText}>
                  {item?.specifications[1]}
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
  const renderBiddingProperties = ({item, index}) => {
    return (
      <>
        <View style={{marginVertical: 5}}>
          <View style={[styles.card]}>
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
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: Colors.black,
                  }}>
                  {item.name ? item.name : ''}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: Colors.black,
                    fontSize: 16,
                  }}>
                  PKR-{item.fixedPrice ? item.fixedPrice : ''}
                </Text>
              </View>

              <Text style={{color: Colors.black, fontSize: 14, marginTop: 5}}>
                {item?.location?.address ? item?.location?.address : ''}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizental: 10,
                  marginTop: 5,
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
                    {item?.specifications[2]}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizental: 10,
                  marginTop: 5,
                }}>
                <View style={styles.facility}>
                  <Icon name="aspect-ratio" size={18} />
                  <Text style={styles.facilityText}>
                    {item?.specifications[1]}
                  </Text>
                </View>
                <View style={styles.facility}>
                  <Icon name="aspect-ratio" size={18} />
                  <Text style={styles.facilityText}>
                    {item?.specifications[3]}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <>
                  <Button
                    text={'Detail'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'30%'}
                    backgroundColor={Colors.black}
                    onPress={() => {
                      navigation.navigate('DetailsScreen', {
                        item: item,
                        bidPrice: null,
                        propertyID: item._id,
                      });
                    }}
                  />
                </>
                <>
                  <Button
                    text={'Place Bid'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'30%'}
                    backgroundColor={Colors.black}
                    onPress={() => setVisible(true)}
                  />
                </>
              </View>
            </View>
          </View>
        </View>
        <>
          <Modal isVisible={visible}>
            <View style={styles.ModalView}>
              <Text
                style={{
                  color: Colors.dark,
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Enter the Bid Amount
              </Text>
              <View style={styles.input}>
                <TextField
                  value={bidPrice}
                  label="Price"
                  onChangeText={text => setBidPrice(text)}
                  secure={false}
                  keyboardType="numeric"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 5,
                }}>
                <View style={{width: '60%'}}>
                  <Button
                    text={'Place Bid'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'60%'}
                    backgroundColor={
                      bidPrice === '' ? Colors.secondry : Colors.black
                    }
                    disabled={bidPrice === '' ? true : false}
                    onPress={() => placeBid(item?._id, item, bidPrice)}
                  />
                </View>
                <View style={{width: '60%'}}>
                  <Button
                    text={'Cancel'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'60%'}
                    backgroundColor={Colors.black}
                    onPress={() => setVisible(false)}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </>
      </>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      {/* Customise status bar */}
      <StatusBar hidden={true} />
      {/* Header container */}
      <View style={styles.header}>
        <View>
          <Text style={{color: Colors.dark}}>Welcome</Text>
          <Text style={{color: Colors.dark, fontSize: 20, fontWeight: 'bold'}}>
            {user.username ? user.username : ''}
          </Text>
        </View>
        <Pressable
          activeOpacity={0.8}
          onPress={() => navigation.navigate('profileModule')}>
          {user.profilePicture ? (
            <>
              <Image
                style={styles.profileImage}
                source={{uri: `data:image/png;base64,${user.profilePicture}`}}
              />
            </>
          ) : (
            <>
              <Image
                style={styles.profileImage}
                source={require('../../../../Assets/Images/Userimage.png')}
              />
            </>
          )}
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" color={Colors.grey} size={25} />
          <TextInput
            placeholder="Search property"
            value={search}
            placeholderTextColor={Colors.dark}
            onChangeText={text => setSearch(text)}
            style={{color: Colors.dark}}
          />
        </View>
      </View>
      <View
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
            setVisible(false);
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
      </View>
      {activeSwicth === 'listing' ? (
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
              data={properties.filter(
                property =>
                  property?.name.toLowerCase().includes(search.toLowerCase()) ||
                  property?.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  property.fixedPrice
                    .toString()
                    .includes(search.toLowerCase()) ||
                  (property.location &&
                    property.location.address &&
                    property.location.address
                      .toLowerCase()
                      .includes(search.toLowerCase())),
              )}
              renderItem={renderListingProperties}
              extraData={properties.filter(
                property =>
                  property?.name.toLowerCase().includes(search.toLowerCase()) ||
                  property?.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  property.fixedPrice
                    .toString()
                    .includes(search.toLowerCase()) ||
                  (property.location &&
                    property.location.address &&
                    property.location.address
                      .toLowerCase()
                      .includes(search.toLowerCase())),
              )}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </View>
        </>
      ) : (
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
              data={biddingProerties.filter(
                property =>
                  property?.name.toLowerCase().includes(search.toLowerCase()) ||
                  property?.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  property.fixedPrice
                    .toString()
                    .includes(search.toLowerCase()) ||
                  (property.location &&
                    property.location.address &&
                    property.location.address
                      .toLowerCase()
                      .includes(search.toLowerCase())),
              )}
              renderItem={renderBiddingProperties}
              extraData={biddingProerties.filter(
                property =>
                  property?.name.toLowerCase().includes(search.toLowerCase()) ||
                  property?.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  property.fixedPrice
                    .toString()
                    .includes(search.toLowerCase()) ||
                  (property.location &&
                    property.location.address &&
                    property.location.address
                      .toLowerCase()
                      .includes(search.toLowerCase())),
              )}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </View>
        </>
      )}

      {loading && (
        <View style={[styles.popupContainer, {zIndex: 99999}]}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
