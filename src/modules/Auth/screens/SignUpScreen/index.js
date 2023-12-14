import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import React, {useState} from 'react';
import {SignUp_Request} from '../../../../utils/API/Requests';
import ImagePicker from 'react-native-image-crop-picker';
import RNImageToBase64 from 'react-native-image-base64';
import PickerButton from '@components/Button/pickerButton';
import {CrossRedIcon, UploadIcon} from '@assets/SVG/Svg';
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [role, setRole] = useState('user');
  const [selecter, setSelecter] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const Signup = async () => {
    setLoading(true);
    let finalUsername = name.replace(/\s+/g, '');
    const formattedEmailValue =
      emailValue.charAt(0).toLowerCase() + emailValue.slice(1);
    let body = {
      username: finalUsername,
      email: emailValue,
      password: passwordValue,
      role: role,
      phone: phoneNumber,
      profilePicture: '',
    };
    let userInfo = {
      username: finalUsername,
      email: emailValue,
      password: passwordValue,
      role: role,
      phone: phoneNumber,
      profilePicture: imageUrl,
    };
    console.log('Signup body ===== > ', body);
    if (!body.email.includes('@') || body.password.length < 8) {
      alert(
        'Invalid Credential! Please check your email has @ and password should be 8 or greater than 8 characters',
      );
      setLoading(false);
    } else {
      try {
        let response = await SignUp_Request(body);
        console.log('response ==== > ', response);
        Toast.show('User Registered Successfully', Toast.LONG);
        await AsyncStorage.setItem('USER_INFO', JSON.stringify(userInfo));
        navigation.navigate('login');
        setLoading(false);
      } catch (error) {
        console.error('Error signing up:', error);
        Toast.show(error.message, Toast.LONG);
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
      if (selecter === false) {
        setImage(image.path);
        setVisible(false);
        setSelecter(false);
      } else {
        console.log('Error2');
        setVisible(false);
        setSelecter(false);
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
      convertToBase64(image);
      if (selecter === false) {
        setImage(image.path);
        setVisible(false);
        setSelecter(false);
      } else {
        console.log('Error2');
        setVisible(false);
        setSelecter(false);
      }
    });
  };
  const convertToBase64 = img => {
    if (img) {
      // Use the library to convert the image to Base64
      RNImageToBase64.getBase64String(img.path)
        .then(base64String => {
          setImageUrl(base64String);
          // You can now use the base64String in your request to upload the image to the server
          // Include the base64String in your request body
          // Example: body.profilePicture = base64String;
        })
        .catch(error => {
          console.error('Error converting image to base64:', error);
        });
    }
  };
  const onClear = () => {
    setImage(null);
    setSelecter(false);
  };
  return (
    <SafeAreaView
      pointerEvents={loading === true ? 'none' : 'auto'}
      style={styles.mainView}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../../Assets/Images/background2.jpg')}>
        <View style={styles.dummyView}>
          <View style={styles.mainView1}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.bluebackground}>
                <View style={styles.whitebackground}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.text}>Sign Up</Text>
                  </View>
                  {image === null ? (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View style={styles.coverView}>
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
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View style={styles.coverView}>
                        <View style={styles.imageBox}>
                          <TouchableOpacity
                            onPress={onClear}
                            style={styles.touchable}>
                            <CrossRedIcon style={styles.crossRedIcon2} />
                          </TouchableOpacity>
                          <View style={styles.imageContainer}>
                            <Image
                              resizeMode="contain"
                              source={{uri: image}}
                              style={styles.images}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
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
                          autoCapitalize={'none'}
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

                  <>
                    <View style={styles.dummy}>
                      {loading ? (
                        <View
                          style={{
                            alignSelf: 'center',
                            backgroundColor: Colors.black,
                            height: 50,
                            width: '90%',
                            borderRadius: 10,
                            justifyContent: 'center',

                            borderColor: '#000',
                            top: -10,
                          }}>
                          <ActivityIndicator
                            size="small"
                            color={Colors.white}
                          />
                        </View>
                      ) : (
                        <>
                          <Button
                            disabled={
                              name === '' &&
                              phoneNumber === '' &&
                              emailValue === '' &&
                              passwordValue === '' &&
                              role === '' &&
                              imageUrl === null
                                ? true
                                : false
                            }
                            text={'Next'}
                            color={Colors.white}
                            fontSize={15}
                            height={50}
                            width={'95%'}
                            backgroundColor={Colors.black}
                            marginBottom={20}
                            onPress={Signup}
                          />
                        </>
                      )}
                    </View>
                  </>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
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
      </ImageBackground>
    </SafeAreaView>
  );
};
export default SignUp;
