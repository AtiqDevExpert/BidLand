import React, {useEffect, useRef, useState} from 'react';
import {BackIcon, SearchIcon, TickIcon} from '../../Assets/SVG/Svg';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Button/button';
import {Colors} from '../../constants/Colors';
import TextField from '@components/TextField';
import {
  CreateNewPasswordScreenLogo,
  CrossRedIcon,
  // ModalLogo,
} from '../../Assets/SVG/Svg';
import {Image} from 'react-native-svg';
import {DownIcon} from '@assets/SVG/SvgDashboard';
import { ScrollView } from 'react-native-gesture-handler';

const SalePlotModal: React.FC<any> = ({
  onPress,
  isModalVisible,
  setModalVisible,
}) => {

  const [enterPrice, setEnterPrice] = React.useState<string>();
  const [selectPlot, setSelectPlot] = React.useState<string>();



  const toggleModal = () => { 
    setModalVisible(false);
  };
  return (
    <>
      <Modal 
        isVisible={isModalVisible}
        avoidKeyboard={false}
        >

        <View style={styles.modelMainView}>

          <TouchableOpacity style={styles.modelView1}>
            <CrossRedIcon onPress={toggleModal} style={styles.crossRedIcon} />
          </TouchableOpacity>
          
          <View style={styles.view1}>
            <Text style={styles.filter}>Sale Plot</Text>
          </View>

          <View style={{
            //backgroundColor:"red",
            // height:'65%'
             }}>
                    
            <View style={styles.view1}>
              <Text style={styles.text1}>Select Plot</Text>
              <View
                style={styles.view11}>
                <TextInput 
                placeholder="Select Plot"
                style={styles.text3}
                onChangeText={setSelectPlot}
                value={selectPlot}
                />
              </View>
            </View>

            <View style={styles.view1}>
              <Text style={styles.text1}>Price</Text>
              <View
                style={styles.view11}>
                <TextInput 
                placeholder="Enter Price"
                style={styles.text3}
                onChangeText={setEnterPrice}
                value={enterPrice}
                />
              </View>
            </View>
          </View>  

          <View style={styles.view1}>
          <Button
                    text={'Sale'}
                    color={Colors.white}
                    fontSize={18}
                    height={50}
                    width={'50%'}
                    backgroundColor={Colors.darkPrimery}
                    onPress={onPress}
                    // onPress={gotoLogin}
                  />
          </View>


        </View>
      </Modal>
    </>
  );
};

export default SalePlotModal;
