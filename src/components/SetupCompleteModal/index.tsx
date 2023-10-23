import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {BackIcon, SearchIcon, TickIcon} from '../../Assets/SVG/Svg';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../components/Button/button';
import {Colors} from '../../constants/Colors';
import TextField from '@components/TextField';
import {
  CreateNewPasswordScreenLogo,
  CrossRedIcon,
  // ModalLogo,
} from '../../Assets/SVG/Svg';
import {Image} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const SetupCompleteModal: React.FC<any> = ({
  modalText1,
  modalButton,
  onPress,
  modalText2,
  ModalLogo,
  isModalVisible,
  setModalVisible,
  
}) => {
  // const [isModalVisible, setModalVisible] = useState<boolean>(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modelMainView}>
          <TouchableOpacity style={styles.modelView1}>
            <CrossRedIcon onPress={toggleModal} style={styles.crossRedIcon} />
          </TouchableOpacity>
          <View style={styles.modelView2}>
            <ModalLogo style={styles.modalLogo} />
          </View>
          <View style={styles.modelView3}>
            <Text style={styles.modelText}>{modalText1}</Text>
          </View>
          <View style={styles.modelView3}>
            <Text style={styles.modelText1}>
            {modalText2}
            </Text>
          </View>
          <View>
            <Button
              text={modalButton}
              color={Colors.white}
              fontSize={15}
              height={60}
              width={'80%'}
              backgroundColor={Colors.darkPrimery}
              onPress={()=>{ navigation.navigate('HomeScreen');}}
              marginTop={20}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SetupCompleteModal;
