import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {SearchIcon} from '../../Assets/SVG/Svg';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {Colors} from '../../constants/Colors';
import {
  NewPropertyPlotIcon,
  AreaIcon,
  LocationIcon,
  AreaIcon1,
} from '../../Assets/SVG/Svg';
import {IndexIcon} from '@assets/SVG/SvgDashboard';

const SoldPlotComponent = ({item1, onPressHandler}) => {
  const divider = (index: number) => {
    if (data.length - 1 == index) {
      return 0;
    } else {
      return 1;
    }
  };

  const data = item1.data;
  return (
    <>
    <TouchableOpacity
        onPress={onPressHandler}
        style={{
          marginVertical: 10,
          // marginHorizontal: 5,
          flex: 1,
          width: '100%',
          // alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            backgroundColor: Colors.darkPrimery,
            flexDirection: 'row',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text5}>{item1.Phase}</Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderLeftWidth: 1,
              borderRightWidth: 1,
              marginHorizontal: 8,
              borderColor: '#D9D9D9',
              marginVertical: 7,
            }}>
            <Text style={[styles.text5, {marginHorizontal: 10}]}>
              {item1.PLot}
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text5}>{item1.Block}</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
            // marginBottom:8
          }}>
          <View>
            <View style={styles.ndummyChild1}>
              <View style={styles.ndummyChild2}>
                <LocationIcon style={styles.logo} />
                <Text numberOfLines={1} style={styles.text2}>
                  {item1.Location}
                </Text>
              </View>

              <View style={styles.ndummyChild3}>
                <Text style={[styles.bluePrice, {marginHorizontal: 10}]}>
                  {item1.price}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                //marginVertical: 5,
                marginHorizontal: 5,
                //backgroundColor:'yellow',
                // alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={
                  {
                    // backgroundColor:"green",
                  }
                }>
                <View style={styles.ndummyChild21}>
                  <AreaIcon style={styles.logo} />
                  <Text style={styles.text2}>{item1.width}</Text>
                </View>

                <View style={styles.ndummyChild21}>
                  <AreaIcon1 style={styles.logo} />
                  <Text style={styles.text2}>{item1.area}</Text>
                </View>

                <View style={styles.ndummyChild21}>
                  <IndexIcon style={styles.logo} />
                  <Text style={styles.text2}>{item1.index}</Text>
                </View>
              </View>

              <View
                style={{
                  // backgroundColor:"red",
                  justifyContent: 'center',
                }}>
                <View style={styles.ndummyChild31}>
                  <Text style={styles.text12}>Sold Date</Text>
                  <Text style={styles.text13}>{item1.soldDate}</Text>
                </View>

                <View style={styles.ndummyChild31}>
                  <Text style={styles.text12}>Sold Price</Text>
                  <Text style={styles.text13}>{item1.soldPrice}</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'rgba(2,119,250,0.13)',
              flexDirection: 'row',
              borderRadius: 10,
              alignItems: 'center',
              //marginHorizontal:5,

              justifyContent: 'flex-start',
              marginVertical: 10,
              marginBottom: 15,
              width: '98%',
              alignSelf: 'center',
              flexWrap: 'wrap',
            }}>
            {data.map((item, index) => {
              return (
                <>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRightWidth: divider(index),
                      marginLeft: 5,
                      borderColor: Colors.darkPrimery,
                      marginVertical: 5,
                    }}>
                    <Text style={styles.text6}>{item.name} 20%</Text>
                  </View>
                </>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>

    </>
  );
};

export default SoldPlotComponent;
