import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  BackHandler,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {Colors} from '../../../../constants/Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import TextField from '../../../../components/TextField';
import {TouchableOpacity} from 'react-native';
import {LogoutIcon} from '../../../../Assets/SVG/SvgDashboard';
import Loading from '../../../../components/Loading/Loading';
import Toast from 'react-native-simple-toast';
import {delete_user_Account} from '../../../../utils/API/Requests';
import Menu, {
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const Profile = ({navigation}) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [role, setRole] = useState('user');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.username);
      setPhoneNumber(user.phone);
      setRole(user.role);
      setEmailValue(user.email);
      setImage(user.profilePicture);
    }
  }, [user]);
  useFocusEffect(
    React.useCallback(() => {
      fetchUserInfo();
    }, []),
  );
  const deleteProfile = async () => {
    setLoading(true);
    let token = await AsyncStorage.getItem('USER_TOKEN');
    try {
      let response = await delete_user_Account(token, user?.userId);
      console.log('response ==== > ', response);
      if (response) {
        await AsyncStorage.getAllKeys()
          .then(keys => AsyncStorage.multiRemove(keys))
          .then(() => {
            Toast.show('Account Deleted Successfully', Toast.LONG);
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'AuthModule'}],
              }),
            );
            setLoading(false);
          });
      }
    } catch (error) {
      Toast.show(error.message, Toast.LONG);
      console.error('Error signing up:', error);
      setLoading(false);
    }
  };
  const fetchUserInfo = async () => {
    let userInfo = await AsyncStorage.getItem('USER_INFO');
    let userDetail = JSON.parse(userInfo);
    if (userDetail) {
      setUser(userDetail);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'AuthModule'}],
        }),
      );
      await AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => {
          setLoading(false);
        });
    } catch (error) {
      Toast.show('User Logout Successfully', Toast.LONG);
      setLoading(false);
    }
  };

  const dashboardSettingArray = [
    {
      id: 'editProfile',
      title: 'Edit Profile',

      icon: <Icon name={'edit'} size={30} color={Colors.black} />,
      color: Colors.black,
    },
    {
      id: 'deleteProfile',
      title: 'Delete Profile',
      icon: <Icon name={'delete-outline'} size={30} color={Colors.black} />,
      color: Colors.black,
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: <LogoutIcon fill={Colors.red} style={{height: 30, width: 30}} />,
      color: Colors.red,
    },
  ];
  const onClickSetting = async type => {
    switch (type) {
      case 'editProfile':
        navigation.navigate('editProfile');
        break;
      case 'deleteProfile':
        deleteProfile();
        break;
      case 'logout':
        logout();
        break;
      default:
        break;
    }
  };
  const renderTouchable = () => <TouchableOpacity></TouchableOpacity>;
  const TopNavigationDashBoard = () => (
    <View>
      <Menu onSelect={value => onClickSetting(value)}>
        <MenuTrigger renderTouchable={renderTouchable}>
          <View
            style={{backgroundColor: 'black', padding: 8, borderRadius: 10}}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../../Assets/Images/setting.png')}
            />
          </View>
        </MenuTrigger>
        <MenuOptions
          optionsContainerStyle={{
            width: 'auto',
            marginTop: 32,
          }}>
          {dashboardSettingArray.map((item, index) => (
            <MenuOption
              renderTouchable={renderTouchable}
              key={item.id}
              value={item.id}>
              {index !== 0 && (
                <View
                  style={{
                    marginBottom: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.black,
                  }}
                />
              )}
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginVertical: 5,
                  paddingHorizontal: item.id === 'logout' ? 20 : 15,
                }}>
                {item.icon}
                <Text
                  style={[
                    styles.title1,
                    {color: item.color, marginHorizontal: 5},
                  ]}>
                  {item.title}
                </Text>
              </View>
            </MenuOption>
          ))}
        </MenuOptions>
      </Menu>
    </View>
  );

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar hidden={true} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'transparent',
              fontWeight: 'bold',
              fontSize: 26,
              textAlign: 'right',
              justifyContent: 'center',
            }}>
            Profile
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'transparent',
              fontWeight: 'bold',
              fontSize: 26,
              textAlign: 'right',
              justifyContent: 'center',
            }}>
            Profile
          </Text>
        </View>
        <TopNavigationDashBoard />
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignContent: 'center',
          top: 40,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.coverView}>
            <View style={styles.imageBox}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="contain"
                  source={{uri: `data:image/png;base64,${image}`}}
                  style={styles.images}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.dummy}>
          <View style={styles.input}>
            <TextField
              editable={false}
              value={name}
              label="Name"
              onChangeText={text => setName(text)}
              secure={false}
            />
          </View>
          <View style={styles.input}>
            <TextField
              editable={false}
              value={phoneNumber}
              label="Phone Number"
              onChangeText={text => setPhoneNumber(text)}
              secure={false}
            />
          </View>
        </View>
        <>
          <View style={styles.dummy}>
            <View style={styles.input}>
              <TextField
                editable={false}
                value={role}
                label="Role"
                onChangeText={text => setRole(text)}
                secure={false}
              />
            </View>
          </View>
        </>
        <>
          <View style={styles.dummy}>
            <View style={styles.input}>
              <TextField
                editable={false}
                value={emailValue}
                label="Email"
                onChangeText={text => setEmailValue(text)}
                secure={false}
              />
            </View>
          </View>
        </>
      </ScrollView>
      {loading && (
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            zIndex: 9999,
          }}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
