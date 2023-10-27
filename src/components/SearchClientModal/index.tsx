import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {BackIcon, SearchIcon, TickIcon} from '../../Assets/SVG/Svg';
import {Text, View, TouchableOpacity, FlatList, TextInput, TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Button/button';
import {Colors} from '../../constants/Colors';
import TextField from '@components/TextField';
import {
  CreateNewPasswordScreenLogo,
  CrossRedIcon,
  ModalLogo,
} from '../../Assets/SVG/Svg';
import { Image } from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';

const SearchClientModal: React.FC<any> = ({
  isVisible,
  isModalVisible,
  setModalVisible,
}) => {
  // console.log("asfavas",isVisible)
  const [search, setSearch] = useState<any>('');
  const [visible, setVisible] = useState<boolean>(false);
 
 let clientlistdatareducer=[]

  
  // const checkFunction = (item) => {
  //   console.log(visible);
  //   setSisible( !visible);
  // }

  const renderItem = ({item, index}) => {
    return (
      <>
        <TouchableWithoutFeedback
              onPress={(item) => setVisible(!visible) 
                
               // (item) => {checkFunction(item) }
              }>
          <View
          style={{
            //hight: '10%',
            flexDirection: 'row',
           // backgroundColor: 'red',
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              //backgroundColor: 'green',
            }}>
            <View>
              <View
                style={{
                  width: 33,
                  height: 33,
                  borderRadius: 80,
                  backgroundColor: 'yellow',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 5,
                  marginVertical:3
                }}>
                <Text>{`${item.name.charAt(0)}${item.name.charAt(1).toLowerCase()}`}</Text>
              </View>
              {/* <View>
              <Image source={require('../../Assets/Images/image.png')} />;
              </View> */}
            </View>


            <View style={{
              //backgroundColor: 'orange', 
            marginHorizontal: 5, marginVertical:3}}>
              <Text
                style={{
                  color: Colors.darkPrimery,
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: '#B0B0B0',
                  fontSize: 13,
                  fontWeight: '400',
                }}>
                {item.email}
              </Text>
            </View>
          </View>
{visible && (
          <View
            style={{
              // width: 30,
              // height: 30,
              //borderRadius: 80,
              //backgroundColor: 'yellow',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 25,
              marginVertical:3
            }}>
            <TickIcon
              //onPress={goBack}
              style={styles.icon}
            />
          </View>
         )}
          </View>
          </TouchableWithoutFeedback>
      </>
    );
  };
  return (
    <>
      {/* <View
        style={{
          flex: 1,
          //backgroundColor: 'red',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#D9D9D9',
          height: 65,
          width: '100%',
          justifyContent: 'space-between',
        }}> */}

      <Modal
        // animationType="fade"
        // transparent={true}
        isVisible={isModalVisible}>
        <View style={styles.modelMainView}>
          <View style={styles.modelView1}>
            <CrossRedIcon
              onPress={() => {
                isVisible();
                setModalVisible(false);
              }}
              style={styles.crossRedIcon}
            />
          </View>

          <View style={styles.modelView3}>
            <Text style={styles.modelText}>Search Client</Text>
          </View>

          <View
            style={{
              //backgroundColor:"red",
              borderColor: '#D9D9D9',
              width: '95%',
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 5,
            }}>
            <TextInput
              style={{color: Colors.darkPrimery,marginHorizontal:12,}}
              onChangeText={setSearch}
              value={search}
              placeholder="Search"
              underlineColorAndroid="transparent"
              // keyboardAvoidingViewEnabled={true}
            />
          </View>

          <View
            style={{
              height: '60%',
              width: '95%',
              alignSelf: 'center',
              marginTop: 5,
              borderRadius:10,
              backgroundColor:Colors.white
            }}>
            <FlatList
            style={{marginHorizontal:10}}
              data={clientlistdatareducer
                
              }
              // data={clientlistdatareducer.filter(item =>
              //   item.name.toUpperCase().includes(search.toUpperCase()),
              // )}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      width: '90%',
                      height: 1,
                      backgroundColor: '#D9D9D9',
                      alignSelf: 'center',
                    }}></View>
                );
              }}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View>
            <Button
              text={'Done'}
              color={Colors.white}
              fontSize={15}
              height={50}
              width={'70%'}
              backgroundColor={Colors.darkPrimery}
              // onPress={toggleModal}
              marginTop={20}
            />
          </View>
        </View>
      </Modal>

      {/* </View> */}
    </>
  );
};

export default SearchClientModal;
