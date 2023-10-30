import DashboardBlueDetail from '@components/DashboardBlueDetail';
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {Colors} from '../../../../constants/Colors';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
const Profile = ({navigation}) => {
  const [user, setUser] = useState({});

  const fetchUserInfo = async () => {
    let userInfo = await AsyncStorage.getItem('USER_INFO');
    let userDetail = JSON.parse(userInfo);
    if (userDetail) {
      setUser(userDetail);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchUserInfo();
    }, []),
  );
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View style={styles.view1}>
          <View style={styles.img}></View>
        </View>
        <View style={styles.view4}>
          <View style={styles.view5}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                textAlign: 'left',
                color: Colors.dark,
              }}>
              Name
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'left',
                color: Colors.dark,
              }}>
              {user.username}
            </Text>
          </View>

          <View style={styles.view6}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                textAlign: 'left',
                color: Colors.dark,
              }}>
              Email
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'left',
                color: Colors.dark,
              }}>
              {user.email}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
