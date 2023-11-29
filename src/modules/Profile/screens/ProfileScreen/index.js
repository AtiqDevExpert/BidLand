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
import Modal from 'react-native-modal';
import {CommonActions} from '@react-navigation/native';
import {Colors} from '../../../../constants/Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import TextField from '../../../../components/TextField';
import {TouchableOpacity} from 'react-native';
import {LogoutIcon} from '../../../../Assets/SVG/SvgDashboard';
import Loading from '../../../../components/Loading/Loading';
import Toast from 'react-native-simple-toast';
import {
  delete_user_Account,
  verify_user_Profile,
} from '../../../../utils/API/Requests';
import {CrossRedIcon, PlusIcon, UploadIcon} from '../../../../Assets/SVG/Svg';
import PickerButton from '@components/Button/pickerButton';
import Button from '../../../../components/Button/button';
import ImagePicker from 'react-native-image-crop-picker';
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
  const [verifyModal, setVerifyModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [frontImage, setFrontImage] = useState(null);
  const [frontImageUrl, setFrontImageUrl] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [backImageUrl, setBackImageUrl] = useState(null);
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
  const verifyProfile = async () => {
    setLoading(true);
    let token = await AsyncStorage.getItem('USER_TOKEN');

    let body = {
      cnicFront: 'http://firebase/14m32144dfadsf.com',
      cnicBack: 'http://firebase/14m32144dfadsf.com',
    };

    try {
      let response = await verify_user_Profile(token, user?.userId, body);
      console.log('response ==== > ', response);
      setVerifyModal(false);
      setFrontImage(null);
      setFrontImageUrl(null);
      setBackImage(null);
      setBackImageUrl(null);
      setLoading(false);
      Toast.show(response.message, Toast.LONG);
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
      id: 'verifyProfile',
      title: 'Verify Profile',

      icon: <Icon2 name={'profile'} size={30} color={Colors.black} />,
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
      case 'verifyProfile':
        setVerifyModal(true);
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

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      if (frontImage === null) {
        setFrontImage(image.path);
        setFrontImageUrl(image.data);
        setVisible(false);
      } else {
        setBackImage(image.path);
        setBackImageUrl(image.data);
        setVisible(false);
      }
    });
  };

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      if (frontImage === null) {
        setFrontImage(image.path);
        setFrontImageUrl(image.data);
        setVisible(false);
      } else {
        setBackImage(image.path);
        setBackImageUrl(image.data);
        setVisible(false);
      }
    });
  };
  const onPressCancel = () => {
    if (frontImageUrl || backImageUrl || frontImage || backImage) {
      setFrontImage(null);
      setFrontImageUrl(null);

      setBackImage(null);
      setBackImageUrl(null);
      setVerifyModal(false);
    } else {
      setVerifyModal(false);
    }
  };
  console.log('image', user.profilePicture);
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
                {image !== '' ? (
                  <Image
                    resizeMode="contain"
                    source={{uri: `data:image/png;base64,${image}`}}
                    style={styles.images}
                  />
                ) : (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      resizeMode="contain"
                      source={require('../../../../Assets/Images/profile.png')}
                      style={{width: 130, height: 130, borderRadius: 100}}
                    />
                  </View>
                )}
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
      <>
        <Modal isVisible={verifyModal}>
          <View style={styles.ModalViewImage}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              {frontImage === null ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: Colors.white,
                      height: 100,
                      width: 100,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: Colors.hiddenText,
                      marginBottom: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={styles.touch1}
                      onPress={() => setVisible(true)}>
                      <UploadIcon style={styles.uploadIcon} />
                      <Text
                        style={{
                          color: 'black',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: Colors.dark,
                        }}>
                        Upload Image
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: Colors.white,
                      height: 100,
                      width: 100,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: Colors.hiddenText,
                      marginBottom: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={styles.imageBox}>
                      <View style={styles.imageContainer}>
                        <Image
                          resizeMode="cover"
                          source={{uri: frontImage}}
                          style={styles.imagesVerify}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
              {backImage === null ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: Colors.white,
                      height: 100,
                      width: 100,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: Colors.hiddenText,
                      marginBottom: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={styles.touch1}
                      onPress={() => setVisible(true)}>
                      <UploadIcon style={styles.uploadIcon} />
                      <Text
                        style={{
                          color: 'black',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: Colors.dark,
                        }}>
                        Upload Image
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: Colors.white,
                      height: 100,
                      width: 100,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: Colors.hiddenText,
                      marginBottom: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={styles.imageBox}>
                      <View style={styles.imageContainer}>
                        <Image
                          resizeMode="contain"
                          source={{uri: backImage}}
                          style={styles.imagesVerify}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              <View style={styles.dummy}>
                <Button
                  text={'Verify Profile'}
                  color={Colors.white}
                  fontSize={15}
                  height={50}
                  width={'120%'}
                  backgroundColor={Colors.black}
                  marginBottom={20}
                  onPress={verifyProfile}
                  marginTop={80}
                  borderWidth={1}
                  padding={10}
                  disabled={backImageUrl && frontImageUrl ? false : true}
                />
              </View>
              <View style={styles.dummy}>
                <Button
                  text={'Cancel Request'}
                  color={Colors.white}
                  fontSize={15}
                  height={50}
                  width={'120%'}
                  backgroundColor={Colors.black}
                  marginBottom={20}
                  onPress={onPressCancel}
                  marginTop={80}
                  borderWidth={1}
                  padding={10}
                />
              </View>
            </View>
          </View>
        </Modal>
      </>
      <>
        <Modal isVisible={visible}>
          <View style={styles.ModalView}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.modalIcon}>
              <CrossRedIcon style={styles.crossRedIcon} />
            </TouchableOpacity>
            <Text style={{color: Colors.modalTextColor}}>
              Click your desired Button
            </Text>
            <View style={styles.ModalBtnView}>
              <PickerButton
                text={'Open camera'}
                color={Colors.white}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={30}
                backgroundColor={Colors.black}
                borderColor={Colors.black}
                borderWidth={1}
                marginBottom={10}
                onPress={takePhotoFromCamera}
              />

              <PickerButton
                text={'Open Gallery'}
                color={Colors.white}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={30}
                backgroundColor={Colors.black}
                borderColor={Colors.black}
                borderWidth={1}
                marginBottom={10}
                onPress={takePhotoFromGallery}
              />
            </View>
          </View>
        </Modal>
      </>
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
