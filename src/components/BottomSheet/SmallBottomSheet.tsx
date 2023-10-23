import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import styles from './styles';
import TextField from '@components/TextField';
import IconButton from '@components/Button/iconButton';
import TextFieldSearch from '@components/TextFieldSearch';
const SmallBottomSheet: React.FC<any> = ({value,errorText,onChangeText,touchonPress}) => {
  const [text, setText] = useState<any>('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20, color: '#0277FA', fontWeight: '600'}}>
        Add Client Detail
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
       
          <TextFieldSearch  onPress={touchonPress}/>
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
           <TextField
                        editable={true}
                        value={value}
                        label="Add Client Amount"
                        errorText={errorText}
                        onChangeText={onChangeText}
                        secure={false}
                        
                      />
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
           <IconButton
            
            text={'Add'}
            color={Colors.white}
            fontSize={20}
            height={50}
            width={'100%'}
            backgroundColor={Colors.darkPrimery}
            marginBottom={40}
            borderWidth={1}
            borderRadius={10}
            fill={Colors.white}
            stroke={Colors.white}
            //onPress={rbsheetOpen}
            />
      </View>
    
    </SafeAreaView>
  );
};
export default SmallBottomSheet;
