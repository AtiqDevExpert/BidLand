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

import TextField from '@components/TextField';
import styles from './styles';
const BottomSheet: React.FC<any> = ({data, renderItem}) => {
  const [text, setText] = useState<any>('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 26, color: '#0A1326', fontWeight: '700'}}>
          Comments (14)
        </Text>
      </View>
      <FlatList data={data} renderItem={renderItem} />
      <>
        <View style={styles.mainInputView3}>
          <View style={styles.inputView}>
            <TextField
              value={text}
              label={''}
              staticLabel={true}
              hint={'Add a comment...'}
              hintTextColor={Colors.secondayHintColor}
              labelStyles={styles.labelStyle}
              containerStyles={styles.container}
              onChangeText={text => setText(text)}
              autoCorrect={true}
              multiline={true}
              enablesReturnKeyAutomatically={true}
              textAlign={'left'}
            />
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};
export default BottomSheet;
