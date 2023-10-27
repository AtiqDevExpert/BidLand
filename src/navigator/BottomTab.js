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
import AddModule from '@Add/navigation';
import ProfileModule from '@Profile/navigation';
import ChatModule from '@Chats/navigation';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeModule"
      screenOptions={{
        tabBarStyle: {
          padding: 10,
          height: 70,
        },
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#F8F8F8',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          borderBottomLeftRadius: 0,
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
        },
      }}
      tabBarStyle={{height: 100, marginBottom: 10}}>
      <Tab.Screen
        name="HomeModule"
        component={HomeModule}
        options={{
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
                  tintColor: focused ? '#000' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#748c94',
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
                  tintColor: focused ? '#000' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#748c94',
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
        name="AddModule"
        component={AddModule}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: 30,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <AddIcon
                fill={focused ? '#000' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#000' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#748c94',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Add
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatModule"
        component={ChatModule}
        options={{
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
                  tintColor: focused ? '#000' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#748c94',
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
                  tintColor: focused ? '#000' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#748c94',
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
