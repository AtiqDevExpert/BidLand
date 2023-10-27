import React from 'react';
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
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../constants/Colors';
const {width} = Dimensions.get('screen');
const DetailsScreen = ({navigation, route}) => {
  const item = route.params;

  const renderImages = ({item}) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          resizeMode="cover"
          source={{uri: item}}
          style={styles.interiorImage}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
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
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.ratingTag}>
                <Text style={{color: Colors.white}}>4.8</Text>
              </View>
              <Text style={{fontSize: 13, marginLeft: 5, color: Colors.black}}>
                155 ratings
              </Text>
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

          {/* Interior list */}
          <View style={{flex: 1}}>
            <FlatList
              contentContainerStyle={{marginTop: 20}}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, key) => key.toString()}
              data={item.images}
              // renderItem={({item}) => <InteriorCard interior={item} />}
              renderItem={renderImages}
            />
          </View>

          {/* footer container */}
          <View style={styles.footer}>
            <View>
              <Text
                style={{fontSize: 12, color: Colors.black, fontWeight: 'bold'}}>
                Fixed Price
              </Text>
              <Text
                style={{color: Colors.blue, fontWeight: 'bold', fontSize: 18}}>
                PKR-{item.fixedPrice}
              </Text>
            </View>
            <View style={{height: 50, backgroundColor: 'red', width: 2}} />
            <View>
              <Text
                style={{fontSize: 12, color: Colors.black, fontWeight: 'bold'}}>
                Bidding Price
              </Text>
              <Text
                style={{color: Colors.blue, fontWeight: 'bold', fontSize: 18}}>
                PKR-{item.biddingPrice}
              </Text>
            </View>
            <TouchableOpacity style={styles.bookNowBtn}>
              <Text style={{color: Colors.white}}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
