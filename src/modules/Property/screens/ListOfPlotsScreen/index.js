import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';

import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import CheckBox from '@react-native-community/checkbox';
import {Modalize} from 'react-native-modalize';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import StepIndicatorComponent from '@components/stepIndicator/StepIndicatorComponent';
import ListofClientCard from '@components/ListofClientCard/ListofClientCard';
import SetupCompleteModal from '@components/SetupCompleteModal';
import {ModalLogo} from '../../../../Assets/SVG/Svg';

import {BackIcon} from '../../../../Assets/SVG/Svg';
import IconButton from '@components/Button/iconButton';
import PlotComponent from '@components/SellerComponent';
import {FlatList} from 'react-native-gesture-handler';
//component containing the view of Login screen
const ListOfPlots = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const data = [
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Jawad ',
      mail: 'jawad@gmail.com',
      id: '1',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'aSAD Ahmad',
      mail: 'asadahmad@gmail.com',
      id: '2',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Nabeel Ahmad',
      mail: 'nabeelahmad@gmail.com',
      id: '3',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Alipaki Ahmad',
      mail: 'jawad@gmail.com',
      id: '4',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '5',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '6',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '7',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '8',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '9',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
    {
      Phase: 'Phase 1',
      PLot: 'Plot # 201204',
      Block: 'Block C',
      Location: 'New colony 33 street n New colony 33 street nyy....',
      price: '2,000,0000',
      width: '2000*2000',
      area: '5 Canal',
      image: null,
      name: 'Jawad Ahmad',
      mail: 'nabeelismaeel1122@gmail.com',
      id: '10',
      data: [
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
        {
          name: 'Jawad ',
          persentage: '20%',
        },
      ],
    },
  ];
  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity
        //onPress={goBack}
        style={styles.buttonTouch}>
        <BackIcon
          //onPress={goBack}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.indicator}>
        <StepIndicatorComponent />
      </View>
      <View style={styles.dummyView}>
        <View style={styles.mainView1}>
          <View style={styles.bluebackground}>
            <Text style={styles.text}>List Of Plots</Text>
            <ScrollView
              style={
                {
                  // backgroundColor:"yellow"
                }
              }>
              <View style={styles.whitebackground}>
                <View
                  style={{
                    width: '92%',
                    alignSelf: 'center',
                    marginVertical: 10,
                    height: height / 2 + 10,
                    //alignItems: "center",
                    //justifyContent: "center",
                    // backgroundColor:"green",
                    // backgroundColor:"red",
                    borderRadius: 20,
                  }}>
                  <FlatList
                    style={{
                      marginVertical: 5,
                      borderRadius: 20,
                      //  backgroundColor:"orange"
                    }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) => {
                      return <PlotComponent item1={item} />;
                    }}
                    keyExtractor={item => item.id}
                  />
                </View>

                <View style={styles.buttonView}>
                  <Button
                    text={'Add New Plot'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    marginVertical={10}
                    //  onPress={onOpen}
                  />
                </View>
                <View style={styles.buttonView}>
                  <Button
                    text={'Setup Complete'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    marginBottom={10}
                    onPress={() => {
                      setModalVisible(true);
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      <>
        <SetupCompleteModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          ModalLogo={ModalLogo}
          modalText1={'Setup Complete!'}
          modalText2={
            'Thanks to fill out all info you profile setup has been completed click to view your Dashboard'
          }
          modalButton={'Go To Dashboard'}
        />
      </>
    </SafeAreaView>
  );
};
export default ListOfPlots;
