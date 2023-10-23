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
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../constants/Colors';
const {width} = Dimensions.get('screen');
const DetailsScreen = ({navigation, route}) => {
  const house = route.params;

  const InteriorCard = ({interior}) => {
    return <Image source={interior} style={styles.interiorImage} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}

        <View style={styles.backgroundImageContainer}>
          <ImageBackground style={styles.backgroundImage} source={house.image}>
            <View style={styles.header}>
              <View style={styles.headerBtn}>
                <Icon
                  name="arrow-back-ios"
                  size={20}
                  onPress={navigation.goBack}
                />
              </View>
              <View style={styles.headerBtn}>
                <Icon name="favorite" size={20} color={Colors.red} />
              </View>
            </View>
          </ImageBackground>

          {/* Virtual Tag View */}
          <View style={styles.virtualTag}>
            <Text style={{color: Colors.white}}>Virtual tour</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          {/* Name and rating view container */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {house.title}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.ratingTag}>
                <Text style={{color: Colors.white}}>4.8</Text>
              </View>
              <Text style={{fontSize: 13, marginLeft: 5}}>155 ratings</Text>
            </View>
          </View>

          {/* Location text */}
          <Text style={{fontSize: 16, color: Colors.grey}}>
            {house.location}
          </Text>

          {/* Facilities container */}
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={styles.facility}>
              <Icon name="hotel" size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="bathtub" size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text style={styles.facilityText}>100m area</Text>
            </View>
          </View>
          <Text style={{marginTop: 20, color: Colors.grey}}>
            {house.details}
          </Text>

          {/* Interior list */}
          <FlatList
            contentContainerStyle={{marginTop: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={house.interiors}
            renderItem={({item}) => <InteriorCard interior={item} />}
          />

          {/* footer container */}
          <View style={styles.footer}>
            <View>
              <Text
                style={{color: Colors.blue, fontWeight: 'bold', fontSize: 18}}>
                $1,500
              </Text>
              <Text
                style={{fontSize: 12, color: Colors.grey, fontWeight: 'bold'}}>
                Total Price
              </Text>
            </View>
            <View style={styles.bookNowBtn}>
              <Text style={{color: Colors.white}}>Book Now</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
