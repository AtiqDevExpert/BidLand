import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Animated,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  PlotIcon,
  AddIcon,
  ClientsIcon,
  ProfileIcon,
  ChatIcon,
} from '@assets/SVG/SvgDashboard';
import HomeModule from '@Home/navigation/index';
import SellersModule from '@Sellers/navigation/index';

import ProfileModule from '@Profile/navigation';
import ChatModule from '@Chats/navigation';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeModule"
      screenOptions={{
        showLabel: false,
        tabBarStyle: {
          padding: 10,
          height: 70,
        },
        tabBarOptions: {
          style: {
            borderTopWidth: 0,
            position: 'absolute',
            elevation: 0,
          },
        },
        tabBarStyle: {
          height: 60,
          borderBottomLeftRadius: 0,
          backgroundColor: '#fff',
          padding: 5,
        },
      }}>
      <Tab.Screen
        name="HomeModule"
        component={HomeModule}
        options={{
          tabBarShowLabel: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: 30,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <HomeIcon
                fill={focused ? '#000' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#000' : '#798293',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#798293',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SellersModule"
        component={SellersModule}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: 30,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ClientsIcon
                fill={focused ? '#000' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#000' : '#798293',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#798293',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Sellers
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ChatModule"
        component={ChatModule}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: 30,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ChatIcon
                fill={focused ? '#000' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#000' : '#798293',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#798293',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Chats
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="profileModule"
        component={ProfileModule}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: 30,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ProfileIcon
                fill={focused ? '#000' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#000' : '#798293',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#798293',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
