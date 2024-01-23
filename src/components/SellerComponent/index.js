import React, {useEffect, useRef, useState} from 'react';

import {Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import {Colors} from '../../constants/Colors';
import FastImage from 'react-native-fast-image';
const SellerComponent = ({item1, onPressButton, onChangeText}) => {
  const data = item1;

  return (
    <>
      <TouchableOpacity
        onPress={onPressButton}
        onChangeText={onChangeText}
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
          height: 80,
          // padding: 15,
          height: 120,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
              padding: 10,
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
            {data.profilePicture ? (
              <>
                <FastImage
                  source={{uri: data.profilePicture}}
                  style={{height: 80, width: 80, borderRadius: 100}}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </>
            ) : (
              <>
                <FastImage
                  style={{height: 80, width: 80, borderRadius: 100}}
                  source={require('../../Assets/Images/Userimage.png')}
                  resizeMode={FastImage.resizeMode.cover}
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
                fontSize: 24,
              }}>
              {data?.username}
            </Text>
            <Text
              style={{fontWeight: '600', color: Colors.black, fontSize: 14}}>
              Email : {data.email}
            </Text>
            <Text
              style={{fontWeight: '600', color: Colors.black, fontSize: 14}}>
              Phone Number : {data.phone}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default SellerComponent;
