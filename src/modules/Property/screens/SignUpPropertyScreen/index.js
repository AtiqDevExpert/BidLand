import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import TextField from '../../../../components/TextField/index';
import TextInputField from '../../../../components/TextInputField/index';
import Button from '../../../../components/Button/button';
import TransparentBtn from '../../../../components/TransparentBtn/transparentBtn';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';

import Modal from 'react-native-modal';

import PickerButton from '@components/Button/pickerButton';
import StepIndicatorComponent from '@components/stepIndicator/StepIndicatorComponent';
import { BackIcon, CrossRedIcon, UploadIcon } from '../../../../Assets/SVG/Svg';
//component containing the view of Login screen
const SignUpProperty = ({
  navigation
}) => {
  const [societyName, setSocietyName] = useState('');
  const [societyNameError, setSocietyNameError] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState('');
  const [totalInvestmentError, setTotalInvestmentError] = useState(null);
  const [societyLocation, setSocietyLocation] = useState('');
  const [societyLocationError, setSocietyLocationError] = useState(null);
  const [societyArea, setSocietyArea] = useState('');
  const [societyAreaError, setSocietyAreaError] = useState(null);
  const [discription, setDiscription] = useState('');
  const [discriptionError, setDiscriptionError] = useState(null);

  const [image, setImage] = useState('');
  const [selecter, setSelecter] = useState(false);
  const [visible, setVisible] = useState(false);
const progressStepsStyle = {
    activeStepIconBorderColor: '#0277FA',
    activeLabelColor: '#0277FA',
    activeStepNumColor: '#0277FA',
    activeStepIconColor: '#fff',
    completedStepIconColor: '#fff',
    completedProgressBarColor: '#0277FA',
    completedCheckColor: '#0277FA',
    borderWidth: 0,
    disabledStepNumColor: '##0277FA',
  };

  const onNextStep = async () => {
    
  };

  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };
  const goBack = () => {
    navigation.goBack();
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
      } else {
        console.log(
          'selected image from main file ---------------------',
          image,
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
      } else {
        Alert.alert('Error2');
      }
    });
  };

  const onClear = () => {
    setImage('');
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity onPress={goBack} style={styles.buttonTouch}>
        <BackIcon onPress={goBack} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.indicator}>
        <StepIndicatorComponent />
      </View>
      <View style={styles.dummyView}>
        <View style={styles.mainView1}>
          <View style={styles.bluebackground}>
            <Text style={styles.text}>Setup New Profile</Text>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.whitebackground}>
                <View style={styles.dummy}>
                  <View style={styles.input}>
                    <TextField
                      value={societyName}
                      label="Society Name"
                      onChangeText={text => setSocietyName(text)}
                      secure={false}
                      errorText={societyNameError}
                    
                    />
                  </View>
                  <View style={styles.input}>
                    <TextField
                      value={totalInvestment}
                      label="Total Investment"
                      errorText={totalInvestmentError}
                      onChangeText={text => setTotalInvestment(text)}
                      secure={false}
                      keyboardType="number-pad"
                    />
                  </View>
                </View>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={societyLocation}
                        label="Society Location (Optional)"
                        errorText={societyLocationError}
                        onChangeText={text => setSocietyLocation(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={societyArea}
                        label="Society Area (Optional)"
                        errorText={societyAreaError}
                        onChangeText={text => setSocietyArea(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>

                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextInputField
                        value={discription}
                        label="Description"
                        errorText={discriptionError}
                        onChangeText={text => setDiscription(text)}
                        secure={false}
                      />
                    </View>
                    <View>
                      <Text style={styles.cover}>Cover Image</Text>

                      {image === '' ? (
                        <>
                          <View style={styles.coverView}>
                            <TouchableOpacity
                              style={styles.touch1}
                              onPress={() => setVisible(true)}>
                              <UploadIcon style={styles.uploadIcon} />
                              <Text>Upload Image</Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      ) : (
                        <>
                          <View style={styles.coverView}>
                            <View style={styles.imageBox}>
                              <TouchableOpacity
                                onPress={onClear}
                                style={styles.touchable}>
                                <CrossRedIcon style={styles.crossRedIcon2} />
                              </TouchableOpacity>
                              <View style={styles.imageContainer}>
                                <Image
                                  resizeMode="stretch"
                                  source={{uri: image}}
                                  style={styles.images}
                                />
                              </View>
                            </View>
                          </View>
                        </>
                      )}
                    </View>
                  </View>
                </>
                <View style={styles.buttonView}>
                  <Button
                    text={'Next'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    marginBottom={80}
                    onPress={onNextStep}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {/* All Modals and Extra Sheets */}
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
                backgroundColor={Colors.darkPrimery}
                borderColor={Colors.darkPrimery}
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
                backgroundColor={Colors.darkPrimery}
                borderColor={Colors.darkPrimery}
                borderWidth={1}
                marginBottom={10}
                onPress={takePhotoFromGallery}
              />
            </View>
          </View>
        </Modal>
      </>
    </SafeAreaView>
  );
};
export default SignUpProperty;
