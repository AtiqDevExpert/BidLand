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
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../constants/Colors';
const {width} = Dimensions.get('screen');
import {Rating} from 'react-native-ratings';
import Button from '@components/Button/button';
const DetailsScreen = ({navigation, route}) => {
  const item = route.params?.item;
  // console.log('🚀 ~ file: index.js:24 ~ DetailsScreen ~ item:', item);
  const bidPrice = route.params?.bidPrice;
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState(null);

  console.log('item', item);
  useEffect(() => {
    if (item.reviews.length > 0) {
      setReviews(item.reviews);
    } else {
      setReviews(null);
    }
  }, [item]);

  const renderReview = ({item}) => {
    return (
      <>
        <View style={styles.review}>
          <Text style={styles.facilityText}>{item}</Text>
        </View>
      </>
    );
  };
  const SubmitReview = () => {
    if (review.trim() !== '') {
      setReviews([...reviews, review]);
      item.reviews.push(review);
      setReview(''); // Clear the review input field after submission
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <StatusBar hidden={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.backgroundImageContainer}>
          <ImageBackground
            style={styles.backgroundImage}
            source={{uri: item.images[0]}}>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: Colors.dark}}>
              {item.name}
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
                    Alert.alert('Star Rating: ' + JSON.stringify(rating));
                  }}
                />
              </View>
            </View>
          </View>

          <Text style={{fontSize: 16, color: Colors.black, fontWeight: '600'}}>
            {item.location.address}
          </Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={styles.facility}>
              <Icon name="hotel" size={18} />
              <Text style={styles.facilityText}>{item?.specifications[0]}</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="bathtub" size={18} />
              <Text style={styles.facilityText}>{item?.specifications[1]}</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text style={styles.facilityText}>{item?.specifications[2]}</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text style={styles.facilityText}>{item?.specifications[3]}</Text>
            </View>
          </View>

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

          <View style={{marginVertical: 10}}>
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
                  {height: 100, paddingVertical: 10, textAlignVertical: 'top'},
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
          </View>
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
                  PKR-{item.fixedPrice}
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
                  PKR-{item.fixedPrice}
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
            />
          </>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
