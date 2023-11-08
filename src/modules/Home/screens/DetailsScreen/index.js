import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  StatusBar,
} from 'react-native';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../constants/Colors';
const {width} = Dimensions.get('screen');
import {Rating} from 'react-native-ratings';
import Button from '@components/Button/button';
import BiddindList from '@components/BiddingList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {
  get_bidding_properties,
  get_properties,
} from '../../../../utils/API/Requests';
import Loading from '../../../../components/Loading/Loading';
const DetailsScreen = ({navigation, route}) => {
  const item = route.params?.item;
  const bidPrice = route.params?.bidPrice;
  const propertyID = route.params?.propertyID;
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([
    'good location , with good price , awosome ',
  ]);
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState(item);

  useEffect(() => {
    fetchProperties(propertyID);
  }, [propertyID]);
  const fetchProperties = async propertyID => {
    setLoading(true);
    try {
      let token = await AsyncStorage.getItem('USER_TOKEN');
      let responseList = await get_properties(token);
      let responseBiding = await get_bidding_properties(token);

      if (responseList.properties.length > 0 && responseBiding.length > 0) {
        let combineArrays = responseList.properties.concat(responseBiding);
        let updatedProperty = combineArrays.find(property => {
          return property._id === propertyID;
        });

        if (updatedProperty !== undefined) {
          setProperty(updatedProperty);
          if (updatedProperty.reviews.length > 0) {
            setReviews(updatedProperty.reviews);
          } else {
            setReviews(null);
          }
        } else {
          // Handle the case when no matching property is found
          console.log('Property not found');
        }
      }
      setLoading(false);
    } catch (error) {
      Toast.show(error.message, Toast.LONG);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const renderReview = ({item}) => {
    return (
      <>
        <View style={styles.review}>
          <Text style={styles.facilityText}>{item.username}</Text>
          <View
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}>
            <View style={{backgroundColor: Colors.light}}>
              <Rating
                ratingCount={item.rating}
                imageSize={20}
                onFinishRating={rating => {
                  console.log('Star Rating: ' + JSON.stringify(rating));
                }}
              />
            </View>
          </View>
        </View>
      </>
    );
  };
  // const SubmitReview = () => {
  //   console.log('property.reviews', property.reviews);
  //   if (review.trim() !== '') {
  //     setReviews([...reviews, review]);
  //     if (
  //       (Array.isArray(property.reviews) && property.reviews !== undefined) ||
  //       property.reviews !== null
  //     ) {
  //       property.reviews.push(review);
  //       setReview('');
  //     } else {
  //       setReview('');
  //     }
  //     // Clear the review input field after submission
  //   }
  // };
  const renderBids = ({item, index}) => {
    return <BiddindList item1={item} />;
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <StatusBar hidden={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.backgroundImageContainer}>
            <ImageBackground
              style={styles.backgroundImage}
              source={{uri: property?.images[0]}}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={styles.headerBtn}>
                  <Icon name="arrow-back-ios" size={20} color={'black'} />
                </TouchableOpacity>
                <View style={styles.headerBtn}></View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.detailsContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: Colors.dark}}>
                {property.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                }}>
                <View>
                  <Rating
                    ratingCount={5}
                    imageSize={20}
                    onFinishRating={rating => {
                      console.log('Star Rating: ' + JSON.stringify(rating));
                    }}
                  />
                </View>
              </View>
            </View>

            <Text
              style={{fontSize: 16, color: Colors.black, fontWeight: '600'}}>
              {property.location.address}
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
                  {property?.specifications[0]}
                </Text>
              </View>
              <View style={styles.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={styles.facilityText}>
                  {property?.specifications[1]}
                </Text>
              </View>
              <View style={styles.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={styles.facilityText}>
                  {property?.specifications[2]}
                </Text>
              </View>
              <View style={styles.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={styles.facilityText}>
                  {property?.specifications[3]}
                </Text>
              </View>
            </View>
            {Array.isArray(reviews) && reviews.length > 0 && (
              <View style={{flex: 1}}>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: Colors.black,
                      fontWeight: 'bold',
                    }}>
                    Customer Reviews
                  </Text>
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={true}
                  keyExtractor={(_, key) => key.toString()}
                  data={reviews}
                  renderItem={renderReview}
                />
              </View>
            )}

            {/* <View style={{marginVertical: 10}}>
              <Text
                style={{fontSize: 16, color: Colors.black, fontWeight: '600'}}>
                Enter your Feedback
              </Text>
              <View style={{marginTop: 10}}>
                <TextInput
                  value={review}
                  placeholder="Write your review"
                  onChangeText={text => {
                    setReview(text);
                  }}
                  style={[
                    styles.inputReview,
                    {
                      height: 100,
                      paddingVertical: 10,
                      textAlignVertical: 'top',
                    },
                  ]}
                  multiline={true}
                  maxLength={1000}
                />
              </View>
              <>
                <Button
                  text={'Submit Review'}
                  color={Colors.white}
                  fontSize={15}
                  height={50}
                  width={'100%'}
                  backgroundColor={Colors.black}
                  marginTop={10}
                  onPress={SubmitReview}
                />
              </>
            </View> */}

            {Array.isArray(property?.bids) && property.bids.length > 0 && (
              <View
                style={{
                  // flex: 1,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  backgroundColor: '#fff',
                  // zIndex: 1000,
                  // padding: 10,
                  height: 300,
                }}>
                <FlatList
                  nestedScrollEnabled={true}
                  style={{
                    borderRadius: 20,
                  }}
                  data={property?.bids}
                  showsVerticalScrollIndicator={false}
                  renderItem={renderBids}
                  keyExtractor={item => item.id}
                />
              </View>
            )}

            {/* footer container */}
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text
                style={{fontSize: 20, color: Colors.black, fontWeight: 'bold'}}>
                Price Details
              </Text>
            </View>

            {bidPrice ? (
              <View style={styles.footer}>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: Colors.black,
                      fontWeight: 'bold',
                    }}>
                    Fixed Price
                  </Text>
                  <Text
                    style={{
                      color: Colors.switchergray,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    PKR-{property.fixedPrice}
                  </Text>
                </View>
                <View style={{height: 50, backgroundColor: 'red', width: 2}} />

                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: Colors.black,
                      fontWeight: 'bold',
                    }}>
                    Bidding Price
                  </Text>
                  <Text
                    style={{
                      color: Colors.switchergray,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    PKR-{bidPrice}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.footer}>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: Colors.black,
                      fontWeight: 'bold',
                    }}>
                    Fixed Price
                  </Text>
                  <Text
                    style={{
                      color: Colors.switchergray,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    PKR-{property.fixedPrice}
                  </Text>
                </View>
              </View>
            )}

            <>
              <Button
                text={'Book Now'}
                color={Colors.white}
                fontSize={15}
                height={50}
                width={'100%'}
                backgroundColor={Colors.black}
                marginBottom={10}
                onPress={() => {
                  navigation.navigate('PaymentScreen', {
                    price: property.fixedPrice,
                  });
                }}
              />
            </>
          </View>
        </ScrollView>

        {loading && (
          <View style={[styles.popupContainer, {zIndex: 99999}]}>
            <Loading />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default DetailsScreen;
