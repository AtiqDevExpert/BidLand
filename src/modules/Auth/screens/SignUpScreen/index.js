import {View, Text, ScrollView, SafeAreaView, Image} from 'react-native';
import TextField from '../../../../components/TextField/index';
import TextInputField from '../../../../components/TextInputField/index';
import Button from '../../../../components/Button/button';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import React, {useState} from 'react';
//component containing the view of Login screen
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState(null);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(null);
  const [bio, setBio] = useState('');
  const [bioError, setBioError] = useState(null);
  const gotoSignupProperty = () => {
    console.log('Goto opt');
    navigation.navigate('login');
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.dummyView}>
        <View style={styles.mainView1}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={styles.dummyView1}>
              <Image source={require('../../../../Assets/Images/image.png')} />
            </View>
            <View style={styles.bluebackground}>
              <Text style={styles.text}>Sign Up</Text>
              <View style={styles.whitebackground}>
                <View style={styles.dummy}>
                  <View style={styles.input}>
                    <TextField
                      value={name}
                      label="Name"
                      errorText={nameError}
                      onChangeText={text => setName(text)}
                      secure={false}
                    />
                  </View>
                  <View style={styles.input}>
                    <TextField
                      value={username}
                      label="Username"
                      errorText={usernameError}
                      onChangeText={text => setUsername(text)}
                      secure={false}
                    />
                  </View>
                </View>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={emailValue}
                        label="Email"
                        errorText={emailError}
                        onChangeText={text => setEmailValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={passwordValue}
                        label="Password"
                        errorText={passwordError}
                        onChangeText={text => setPasswordValue(text)}
                        secure={true}
                      />
                    </View>
                  </View>
                </>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={city}
                        label="City"
                        errorText={cityError}
                        onChangeText={text => setCity(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={address}
                        label="Address"
                        errorText={addressError}
                        onChangeText={text => setAddress(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextInputField
                        value={bio}
                        label="Bio"
                        errorText={bioError}
                        onChangeText={text => setBio(text)}
                        secure={false}
                        multiline={true}
                      />
                    </View>
                    <Button
                      text={'Next'}
                      color={Colors.white}
                      fontSize={15}
                      height={50}
                      width={'100%'}
                      backgroundColor={Colors.darkPrimery}
                      marginBottom={20}
                      onPress={gotoSignupProperty}
                    />
                  </View>
                </>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
