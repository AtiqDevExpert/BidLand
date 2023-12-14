import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import {Colors} from '../../../../constants/Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import Button from '../../../../components/Button/button';
import {ActivityIndicator} from 'react-native';
import TextField from '../../../../components/TextField';
import {CrossRedIcon, PlusIcon, UploadIcon} from '../../../../Assets/SVG/Svg';
import {TouchableOpacity} from 'react-native';
import {AddIcon, LogoutIcon} from '../../../../Assets/SVG/SvgDashboard';
import Loading from '../../../../components/Loading/Loading';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import RNImageToBase64 from 'react-native-image-base64';
import PickerButton from '@components/Button/pickerButton';
import Toast from 'react-native-simple-toast';
import {update_user_Profile} from '../../../../utils/API/Requests';

const UserOrders = ({navigation}) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [role, setRole] = useState('user');
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const UpdateProfile = async () => {
    setLoading(true);
    let token = await AsyncStorage.getItem('USER_TOKEN');
    let finalUsername = name.replace(/\s+/g, '');
    const formattedEmailValue =
      emailValue.charAt(0).toLowerCase() + emailValue.slice(1);
    let body = {
      username: finalUsername,
      email: formattedEmailValue,
      password: passwordValue,
      role: role,
      phone: phoneNumber,
      profilePicture: '',
    };
    let userInfo = {
      username: finalUsername,
      email: formattedEmailValue,
      password: passwordValue,
      role: role,
      phone: phoneNumber,
      profilePicture: image,
    };
    console.log('update profile body ===== > ', body, userInfo);
    if (!body.email.includes('@') || body.password.length < 8) {
      alert(
        'Invalid Credential! Please check your email has @ and password should be 8 or greater than 8 characters',
      );
      setLoading(false);
    } else {
      try {
        let response = await update_user_Profile(token, user?.userId);
        console.log('response ==== > ', response);
        await AsyncStorage.removeItem('USER_INFOR');
        Toast.show('Profile Updated Successfully', Toast.LONG);
        await AsyncStorage.setItem('USER_INFO', JSON.stringify(userInfo));
        setLoading(false);
        navigation.navigate('HomeModule');
      } catch (error) {
        Toast.show(error.message, Toast.LONG);
        console.error('Error signing up:', error);
        setLoading(false);
      }
    }
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      convertToBase64(image);
    });
  };

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      convertToBase64(image);
    });
  };
  const convertToBase64 = img => {
    if (img) {
      // Use the library to convert the image to Base64
      RNImageToBase64.getBase64String(img.path)
        .then(base64String => {
          if (base64String) {
            setImage(base64String);
            setVisible(false);
          } else {
            console.log('Error2');
            setVisible(false);
          }
        })
        .catch(error => {
          console.error('Error converting image to base64:', error);
        });
    }
  };
  const fetchUserInfo = async () => {
    let userInfo = await AsyncStorage.getItem('USER_INFO');
    let userDetail = JSON.parse(userInfo);

    if (userDetail) {
      setUser(userDetail);
    }
  };
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
  const onOpenModal = () => {
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar hidden={true} />
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

                <TouchableOpacity
                  onPress={onOpenModal}
                  style={styles.touchable}>
                  <Icon
                    name="file-upload"
                    style={{
                      position: 'absolute',
                      left: 80,
                      top: -25,
                      color: '#000',
                    }}
                    size={50}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.dummy}>
          <View style={styles.input}>
            <TextField
              value={name}
              label="Name"
              onChangeText={text => setName(text)}
              secure={false}
            />
          </View>
          <View style={styles.input}>
            <TextField
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
                value={emailValue}
                label="Email"
                onChangeText={text => setEmailValue(text)}
                secure={false}
              />
            </View>
            <View style={styles.input}>
              <TextField
                value={passwordValue}
                label="Password"
                onChangeText={text => setPasswordValue(text)}
                secure={true}
              />
            </View>
          </View>
        </>

        <View style={styles.dummy}>
          <Button
            text={'Update Profile'}
            color={Colors.white}
            fontSize={15}
            height={50}
            width={'95%'}
            backgroundColor={Colors.black}
            marginBottom={20}
            onPress={UpdateProfile}
            marginTop={80}
          />
        </View>
      </ScrollView>
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

export default UserOrders;
