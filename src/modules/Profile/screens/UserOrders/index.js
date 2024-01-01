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
  const [orders, setOrders] = useState([
    {
      __v: 1,
      _id: '656da0b9f9eddc959ece0ed3',
      addedBy: '656d9fa8f9eddc959ece0ec8',
      bids: [],
      city: 'Karachi',
      comments: [],
      description: 'kjhkjkjdgfdggiuhhiuhhhkjhkjhkjhhkjhkjkjhkjh',
      fixedPrice: 19000000000,
      images: [
        'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FScreenshot%20(157).png?alt=media&token=7526a0e4-82eb-4836-8027-83473302c939',
      ],
      isBidding: false,
      location: {
        address:
          'Main boulevard, 15 Raiwnd Rd, D Block Block C Sher Shah Colony, Lahore, Punjab 54000, Pakistan',
        coordinates: {coordinates: [Array], type: 'Point'},
      },
      name: 'Nothing',
      propertyType: 'Commercial',
      reports: [],
      reviews: [
        {
          _id: '656da145f9eddc959ece0f76',
          email: 'zaheerzarifi@gmail.com',
          profilePicture:
            'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FWhatsApp%20Image%202023-11-23%20at%2022.45.22_89f78c49.jpg?alt=media&token=608f0e5c-008d-4dbf-b205-d3475c7f6bdf',
          rating: 5,
          reviewText: 'good',
          username: 'zaheer',
        },
      ],
      specifications: [null, null, '2 Kannal', null],
    },
    {
      __v: 1,
      _id: '656da0b9f9eddc959ece0ed3',
      addedBy: '656d9fa8f9eddc959ece0ec8',
      bids: [],
      city: 'Karachi',
      comments: [],
      description: 'kjhkjkjdgfdggiuhhiuhhhkjhkjhkjhhkjhkjkjhkjh',
      fixedPrice: 19000000000,
      images: [
        'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FScreenshot%20(157).png?alt=media&token=7526a0e4-82eb-4836-8027-83473302c939',
      ],
      isBidding: false,
      location: {
        address:
          'Main boulevard, 15 Raiwnd Rd, D Block Block C Sher Shah Colony, Lahore, Punjab 54000, Pakistan',
        coordinates: {coordinates: [Array], type: 'Point'},
      },
      name: 'Nothing',
      propertyType: 'Commercial',
      reports: [],
      reviews: [
        {
          _id: '656da145f9eddc959ece0f76',
          email: 'zaheerzarifi@gmail.com',
          profilePicture:
            'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FWhatsApp%20Image%202023-11-23%20at%2022.45.22_89f78c49.jpg?alt=media&token=608f0e5c-008d-4dbf-b205-d3475c7f6bdf',
          rating: 5,
          reviewText: 'good',
          username: 'zaheer',
        },
      ],
      specifications: [null, null, '2 Kannal', null],
    },
    {
      __v: 1,
      _id: '656da0b9f9eddc959ece0ed3',
      addedBy: '656d9fa8f9eddc959ece0ec8',
      bids: [],
      city: 'Karachi',
      comments: [],
      description: 'kjhkjkjdgfdggiuhhiuhhhkjhkjhkjhhkjhkjkjhkjh',
      fixedPrice: 19000000000,
      images: [
        'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FScreenshot%20(157).png?alt=media&token=7526a0e4-82eb-4836-8027-83473302c939',
      ],
      isBidding: false,
      location: {
        address:
          'Main boulevard, 15 Raiwnd Rd, D Block Block C Sher Shah Colony, Lahore, Punjab 54000, Pakistan',
        coordinates: {coordinates: [Array], type: 'Point'},
      },
      name: 'Nothing',
      propertyType: 'Commercial',
      reports: [],
      reviews: [
        {
          _id: '656da145f9eddc959ece0f76',
          email: 'zaheerzarifi@gmail.com',
          profilePicture:
            'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FWhatsApp%20Image%202023-11-23%20at%2022.45.22_89f78c49.jpg?alt=media&token=608f0e5c-008d-4dbf-b205-d3475c7f6bdf',
          rating: 5,
          reviewText: 'good',
          username: 'zaheer',
        },
      ],
      specifications: [null, null, '2 Kannal', null],
    },
    {
      __v: 1,
      _id: '656da0b9f9eddc959ece0ed3',
      addedBy: '656d9fa8f9eddc959ece0ec8',
      bids: [],
      city: 'Karachi',
      comments: [],
      description: 'kjhkjkjdgfdggiuhhiuhhhkjhkjhkjhhkjhkjkjhkjh',
      fixedPrice: 19000000000,
      images: [
        'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FScreenshot%20(157).png?alt=media&token=7526a0e4-82eb-4836-8027-83473302c939',
      ],
      isBidding: false,
      location: {
        address:
          'Main boulevard, 15 Raiwnd Rd, D Block Block C Sher Shah Colony, Lahore, Punjab 54000, Pakistan',
        coordinates: {coordinates: [Array], type: 'Point'},
      },
      name: 'Nothing',
      propertyType: 'Commercial',
      reports: [],
      reviews: [
        {
          _id: '656da145f9eddc959ece0f76',
          email: 'zaheerzarifi@gmail.com',
          profilePicture:
            'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FWhatsApp%20Image%202023-11-23%20at%2022.45.22_89f78c49.jpg?alt=media&token=608f0e5c-008d-4dbf-b205-d3475c7f6bdf',
          rating: 5,
          reviewText: 'good',
          username: 'zaheer',
        },
      ],
      specifications: [null, null, '2 Kannal', null],
    },
    {
      __v: 1,
      _id: '656da0b9f9eddc959ece0ed3',
      addedBy: '656d9fa8f9eddc959ece0ec8',
      bids: [],
      city: 'Karachi',
      comments: [],
      description: 'kjhkjkjdgfdggiuhhiuhhhkjhkjhkjhhkjhkjkjhkjh',
      fixedPrice: 19000000000,
      images: [
        'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FScreenshot%20(157).png?alt=media&token=7526a0e4-82eb-4836-8027-83473302c939',
      ],
      isBidding: false,
      location: {
        address:
          'Main boulevard, 15 Raiwnd Rd, D Block Block C Sher Shah Colony, Lahore, Punjab 54000, Pakistan',
        coordinates: {coordinates: [Array], type: 'Point'},
      },
      name: 'Nothing',
      propertyType: 'Commercial',
      reports: [],
      reviews: [
        {
          _id: '656da145f9eddc959ece0f76',
          email: 'zaheerzarifi@gmail.com',
          profilePicture:
            'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FWhatsApp%20Image%202023-11-23%20at%2022.45.22_89f78c49.jpg?alt=media&token=608f0e5c-008d-4dbf-b205-d3475c7f6bdf',
          rating: 5,
          reviewText: 'good',
          username: 'zaheer',
        },
      ],
      specifications: [null, null, '2 Kannal', null],
    },
    {
      __v: 1,
      _id: '656da0b9f9eddc959ece0ed3',
      addedBy: '656d9fa8f9eddc959ece0ec8',
      bids: [],
      city: 'Karachi',
      comments: [],
      description: 'kjhkjkjdgfdggiuhhiuhhhkjhkjhkjhhkjhkjkjhkjh',
      fixedPrice: 19000000000,
      images: [
        'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FScreenshot%20(157).png?alt=media&token=7526a0e4-82eb-4836-8027-83473302c939',
      ],
      isBidding: false,
      location: {
        address:
          'Main boulevard, 15 Raiwnd Rd, D Block Block C Sher Shah Colony, Lahore, Punjab 54000, Pakistan',
        coordinates: {coordinates: [Array], type: 'Point'},
      },
      name: 'Nothing',
      propertyType: 'Commercial',
      reports: [],
      reviews: [
        {
          _id: '656da145f9eddc959ece0f76',
          email: 'zaheerzarifi@gmail.com',
          profilePicture:
            'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FWhatsApp%20Image%202023-11-23%20at%2022.45.22_89f78c49.jpg?alt=media&token=608f0e5c-008d-4dbf-b205-d3475c7f6bdf',
          rating: 5,
          reviewText: 'good',
          username: 'zaheer',
        },
      ],
      specifications: [null, null, '2 Kannal', null],
    },
    {
      __v: 1,
      _id: '656da0b9f9eddc959ece0ed3',
      addedBy: '656d9fa8f9eddc959ece0ec8',
      bids: [],
      city: 'Karachi',
      comments: [],
      description: 'kjhkjkjdgfdggiuhhiuhhhkjhkjhkjhhkjhkjkjhkjh',
      fixedPrice: 19000000000,
      images: [
        'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FScreenshot%20(157).png?alt=media&token=7526a0e4-82eb-4836-8027-83473302c939',
      ],
      isBidding: false,
      location: {
        address:
          'Main boulevard, 15 Raiwnd Rd, D Block Block C Sher Shah Colony, Lahore, Punjab 54000, Pakistan',
        coordinates: {coordinates: [Array], type: 'Point'},
      },
      name: 'Nothing',
      propertyType: 'Commercial',
      reports: [],
      reviews: [
        {
          _id: '656da145f9eddc959ece0f76',
          email: 'zaheerzarifi@gmail.com',
          profilePicture:
            'https://firebasestorage.googleapis.com/v0/b/bidland-7717d.appspot.com/o/images%2FWhatsApp%20Image%202023-11-23%20at%2022.45.22_89f78c49.jpg?alt=media&token=608f0e5c-008d-4dbf-b205-d3475c7f6bdf',
          rating: 5,
          reviewText: 'good',
          username: 'zaheer',
        },
      ],
      specifications: [null, null, '2 Kannal', null],
    },
  ]);
  useFocusEffect(
    React.useCallback(() => {
      getAllOrder();
      fetchAllProperty();
    }, []),
  );
  const getAllOrder = async () => {
    setLoading(true);
    try {
      let response = await get_All_Orders();
      if (response?.orders?.length > 0) {
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
  const fetchAllProperty = async () => {
    setLoading(true);
    try {
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
      const allSellerProperties = [...listingproperties, ...bidingProperties];

      // Remove duplicates based on property ID (adjust this based on your data structure)
      const uniqueSellerProperties = Array.from(
        new Set(allSellerProperties.map(property => property.id)),
      ).map(id => allSellerProperties.find(property => property.id === id));

      // Set the merged and deduplicated result in the state
      console.log('uniqueSellerProperties', uniqueSellerProperties);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
