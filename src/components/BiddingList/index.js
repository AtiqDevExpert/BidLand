import React, {useEffect, useRef, useState} from 'react';

import {Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import {Colors} from '../../constants/Colors';

const BiddindList = ({item1, onPressButton, onChangeText}) => {
  const data = item1;
  console.log('🚀 ~ file: index.js:8 ~ BiddindList ~ data:', item1);
  const date = new Date(data?.timestamp);

  // Extract date and time components
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  const formattedTime = `${date
    .getUTCHours()
    .toString()
    .padStart(2, '0')}:${date
    .getUTCMinutes()
    .toString()
    .padStart(2, '0')}:${date.getUTCSeconds().toString().padStart(2, '0')}`;

  return (
    <>
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 10,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 5,
          marginVertical: 10,
          flex: 1,
          marginHorizontal: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
          }}>
          <View
            style={{
              alignItems: 'center',
              padding: 8,
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 5,
              borderRadius: 100,
            }}>
            {data.user?.profilePicture ? (
              <>
                <Image
                  source={{uri: data.profilePicture}}
                  style={{height: 40, width: 40, borderRadius: 100}}
                />
              </>
            ) : (
              <>
                <Image
                  source={require('../../Assets/Images/Userimage.png')}
                  style={{height: 40, width: 40, borderRadius: 100}}
                />
              </>
            )}
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text
              style={{
                // width: '100%',
                color: Colors.black,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {data?.user?.username}
            </Text>
            <Text
              style={{fontWeight: '600', color: Colors.black, fontSize: 14}}>
              Email : {data?.user?.email}
            </Text>
            <Text
              style={{fontWeight: '600', color: Colors.black, fontSize: 14}}>
              Phone Number : {data?.user?.phone}
            </Text>
            <Text
              style={{fontWeight: '600', color: Colors.black, fontSize: 14}}>
              Time : {formattedTime}
            </Text>
            <Text
              style={{fontWeight: '600', color: Colors.black, fontSize: 14}}>
              Date : {formattedDate}
            </Text>
            <Text
              style={{fontWeight: '600', color: Colors.black, fontSize: 18}}>
              Bidding Price : {data.biddingPrice}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default BiddindList;
