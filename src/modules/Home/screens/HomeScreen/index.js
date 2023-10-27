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
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import {
  get_properties,
  get_bidding_properties,
} from '../../../../utils/API/Requests';
import Loading from '../../../../components/Loading/Loading';
import {useFocusEffect} from '@react-navigation/native';
const HomeScreen = ({navigation}) => {
  const [activeSwicth, setActiveSwicth] = useState('listing');
  const [proerties, setProperties] = useState([]);
  const [biddingProerties, setBiddingProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const options = [
    {label: 'Listing', value: 'listing'},
    {label: 'Bid Listing', value: 'bidListing'},
  ];
  const fetchPropertyDetails = async () => {
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

  useFocusEffect(
    React.useCallback(() => {
      fetchPropertyDetails();
      fetchPropertyBidding();
    }, []),
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchPropertyDetails();
    fetchPropertyBidding();
    setRefreshing(false);
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

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={Colors.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={styles.header}>
        <View>
          <Text style={{color: Colors.grey}}>Location</Text>
          <Text style={{color: Colors.dark, fontSize: 20, fontWeight: 'bold'}}>
            Canada
          </Text>
        </View>
        <Image
          style={styles.profileImage}
          source={require('../../../../Assets/Images/person.jpg')}
        />
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
            placeholder="Search address, city, location"
            placeholderTextColor={'#000'}
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
              data={proerties}
              renderItem={renderProperties}
              extraData={proerties}
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
              data={biddingProerties}
              renderItem={renderProperties}
              extraData={biddingProerties}
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
