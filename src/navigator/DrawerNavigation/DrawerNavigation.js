// import Tabs from '../../../../BottomTab/Tab/tab';
// import HomeModule from '..';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {Colors} from '../../constants/Colors';
import CustomSidebarMenu from './CustomSideBarMenu';
import BottomTab from '../BottomTab/Tab/BottomTab';
import SoldNavigation from '../../modules/Plots/navigation/SoldModuleNavigation';
import PlotDetailNavigation from '../../modules/Plots/navigation/PlotDetailModuleNavigation';
// import UpdateClientNavigation from '@Clients/navigation/UpdateClientNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="homeName"
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '85%',
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="homeName"
        component={BottomTab}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="SoldNavigation"
        component={SoldNavigation}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="PlotDetailNavigation"
        component={PlotDetailNavigation}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />

      {/* <Drawer.Screen
        name="UpdateClientNavigation"
        component={UpdateClientNavigation}
        options={{
          drawerItemStyle: {height: 0},
        }}
      /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
