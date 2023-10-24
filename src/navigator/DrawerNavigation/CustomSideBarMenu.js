import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {
  DrawerBackIcon,
  PlotIcon,
  ClientsIcon,
  ProfileIcon,
  LogoutIcon,
} from '@assets/SVG/SvgDashboard';
const CustomSidebarMenu = props => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '90%',
        backgroundColor: '#fff',
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#fff',
        }}>
        <DrawerContentScrollView
          showsVerticalScrollIndicator={false}
          {...props}>
          <ImageBackground
            source={require('../../Assets/Images/backimageDrawer.png')}
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              marginTop: -4,
            }}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <View>
                <Image
                  source={require('../../Assets/Images/image1.png')}
                  style={styles.icon}
                />
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: '600',
                    fontSize: 20,
                  }}>
                  John Smith
                </Text>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: '400',
                    fontSize: 12,
                  }}>
                  John Smith@rentluck.com
                </Text>
              </View>
            </View>
          </ImageBackground>

          <DrawerItemList {...props} />
          <TouchableOpacity
            style={styles.customItem}
            onPress={() => {
              navigation.navigate('profile');
            }}>
            <ProfileIcon style={{height: 20, width: 30}} fill={'#026BE1'} />
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customItem}
            onPress={() => {
              navigation.navigate('Plots');
            }}>
            <PlotIcon style={{height: 20, width: 30}} fill={'#026BE1'} />
            <Text style={styles.text}>Plots</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customItem}
            onPress={() => {
              navigation.navigate('Clients');
            }}>
            <ClientsIcon style={{height: 20, width: 30}} fill={'#026BE1'} />
            <Text style={styles.text}>Clients</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </SafeAreaView>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          flex: 1,
          width: '90%',
          top: 90,
          marginHorizontal: 10,
        }}
        onPress={() => {
          navigation.navigate('login');
        }}>
        <LogoutIcon style={{height: 20, width: 30}} fill={'#026BE1'} />
        <Text style={styles.text}>LogOut</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customItem: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logo: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    top: 30,
  },
  text: {
    color: '#263238',
    fontWeight: '400',
    fontSize: 18,
    marginHorizontal: 10,
  },
  icon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  icon2: {
    height: 300,
    width: 230,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  customItem2: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: 10,
    // marginLeft: -80,
    // backgroundColor:'red',
    position: 'absolute',
    bottom: 30,
  },
});

export default CustomSidebarMenu;
