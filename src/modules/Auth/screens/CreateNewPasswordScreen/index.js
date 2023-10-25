import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import {Colors} from '../../../../constants/Colors';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import {
  CreateNewPasswordScreenLogo,
  CrossRedIcon,
  ModalLogo,
} from '../../../../Assets/SVG/Svg';
//component containing the view of CreateNewPassword screen
const CreateNewPassword = ({navigation}) => {
  const countdownRef = useRef(null);
  const [newPasswordValue, setNewPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const toggleModal = () => {
    navigation.navigate('login');
    // // -------Password validation---------
    // let validatepass = passwordValidation(newPasswordValue);
    // if (validatepass.valid == false) {
    //   setNewPasswordError(validatepass.errors);
    //   return
    // }
    // else {
    //   setNewPasswordError('');
    //   console.log("passwordError true=======>",newPasswordError)
    // }

    //   // -------Confirm Password validation---------
    //   let validateConfirmPass = passwordValidation(confirmPasswordValue);
    //   if (validateConfirmPass.valid == false) {
    //     setConfirmPasswordError(validateConfirmPass.errors);
    //     return
    //   }
    //   else {
    //     setConfirmPasswordError('');
    //     console.log("Confirm  passwordError true=======>",newPasswordError)
    //   }

    // if(newPasswordValue===confirmPasswordValue)
    // {
    //   console.log("match");
    //   console.log("on Button confirm new password=======>",newPasswordValue);
    //   const body = {
    //     email:auth?.data?.user?.email,
    //     password: newPasswordValue,
    //   }
    //    console.log("newPasswordValue data body from function ---------------------->",body)
    //   dispatch(NewPasswordRequest({ newPassword: body }))
    // }else {
    //   console.log("not match")
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Password Not Match',
    //     visibilityTime: 3000,
    //   });
    // }
  };
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../../Assets/Images/background2.jpg')}>
        <View style={styles.view3}>
          <View style={styles.whitebackground}>
            <View style={styles.view1}>
              <CreateNewPasswordScreenLogo style={styles.logo} />
            </View>
            <View style={styles.view2}>
              <Text style={styles.forgetpassword}>Create New Password</Text>
              <Text style={styles.fgdiscription}>
                New password must be diffrent from{'\n'} previously used
                password
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                marginVertical: 15,
              }}>
              <View style={{marginVertical: 10}}>
                <TextField
                  value={newPasswordValue}
                  label="New Password"
                  onChangeText={text => setNewPasswordValue(text)}
                  secure={true}
                />
              </View>
              <View style={{marginVertical: 10}}>
                <TextField
                  value={confirmPasswordValue}
                  label="Confirm Password"
                  secure={true}
                  onChangeText={text => setConfirmPasswordValue(text)}
                />
              </View>
              <View>
                <Button
                  text={'Confirm'}
                  color={Colors.white}
                  fontSize={15}
                  height={50}
                  width={'95%'}
                  borderWidth={1}
                  marginTop={20}
                  // marginBottom={10}
                  backgroundColor={Colors.black}
                  onPress={() => navigation.popToTop()}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreateNewPassword;
