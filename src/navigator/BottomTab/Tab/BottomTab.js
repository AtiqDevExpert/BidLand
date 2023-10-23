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
} from '@assets/SVG/SvgDashboard';

import HomeModule from '@Home/navigation/index';
// import DetailsScreen from './screens/DetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';
import PlotsModule from '@Plots/navigation';
import AddModule from '@Add/navigation';
import ProfileModule from '@Profile/navigation';
import ChatModule from '@Chats/navigation';
// import ChatModule from '@Chats//navigation';

//Screen names
const homeName = 'Home';
const Add = 'Add';
const Clients = 'Clients';
const Plots = 'Plots';
const Profile = 'Profile';
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
      tabBarStyle={{backgroundColor: 'red', height: 100, marginBottom: 10}}>
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
                fill={focused ? '#4AB5E3' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#4AB5E3' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#4AB5E3' : '#748c94',
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
        name="PlotsModule"
        component={PlotsModule}
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
              <PlotIcon
                fill={focused ? '#4AB5E3' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#4AB5E3' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#4AB5E3' : '#748c94',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Plots
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
                fill={focused ? '#4AB5E3' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#4AB5E3' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#4AB5E3' : '#748c94',
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
              <ClientsIcon
                fill={focused ? '#4AB5E3' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#4AB5E3' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#4AB5E3' : '#748c94',
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
                fill={focused ? '#4AB5E3' : '#798293'}
                style={{
                  height: 30,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#4AB5E3' : '#748c94',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  color: focused ? '#4AB5E3' : '#748c94',
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
