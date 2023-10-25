import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import React, {useState} from 'react';
import {SignUp_Request} from '../../../../utils/API/Requests';
import ImagePicker from 'react-native-image-crop-picker';
import PickerButton from '@components/Button/pickerButton';
import {CrossRedIcon, UploadIcon} from '@assets/SVG/Svg';
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [role, setRole] = useState('user');
  const [image, setImage] = useState('');
  const [selecter, setSelecter] = useState(false);
  const [visible, setVisible] = useState(false);
  const Signup = async () => {
    let finalUsername = name.replace(/\s+/g, '');
    let body = {
      username: finalUsername,
      email: emailValue,
      password: passwordValue,
      role: role,
      phone: phoneNumber,
    };
    if (!body?.email.includes('@') || body?.password.length < 8) {
      alert(
        'Invalid Credential! Please check your email has @ and passowrd should be 8 or greater than 8 characters',
      );
    } else {
      // let response = await SignUp_Request(body);

      Toast.show('User Registered Successfully', Toast.LONG);
      // console.log('🚀 ~ file: index.js:31 ~ Signup ~ response:', response);
    }
  };
  const takePhotoFromCamera = () => {
    // setVisible(false);

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      if (selecter === false) {
        setImage(image.path);
        console.log(
          'selected image from main file ---------------------',
          image.path,
        );
      } else {
        console.log(
          'selected image from main file ---------------------',
          image.path,
        );
        Alert.alert('Error2');
      }
    });
  };

  const takePhotoFromGallery = () => {
    setVisible(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (selecter === false) {
        setImage(image.path);
        console.log(
          'selected image from main file ---------------------',
          image.path,
        );
      } else {
        console.log(
          'selected image from main file ---------------------',
          image.path,
        );
        Alert.alert('Error2');
      }
    });
  };
  const onClear = () => {
    setImage('');
  };
  return (
    <SafeAreaView style={styles.mainView}>
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
                  {image === '' ? (
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View style={styles.coverView}>
                        <TouchableOpacity
                          style={styles.touch1}
                          onPress={() => setVisible(true)}>
                          <UploadIcon style={styles.uploadIcon} />
                          <Text>Upload Image</Text>
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
                      <Button
                        text={'Next'}
                        color={Colors.white}
                        fontSize={15}
                        height={50}
                        width={'95%'}
                        backgroundColor={Colors.black}
                        marginBottom={20}
                        onPress={Signup}
                      />
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
