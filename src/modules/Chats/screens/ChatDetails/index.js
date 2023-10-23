import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../constants/Colors';
export default function ChatDetails({navigation, route}) {
  let chat = route.params;
  console.log('🚀 ~ file: index.js:20 ~ ChatDetails ~ chat:', chat);
  const [chatUser] = useState({
    name: 'Robert Henry',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });

  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [messages, setMessages] = useState([
    {sender: 'John Doe', message: 'Hey there!', time: '6:01 PM'},
    {
      sender: 'Robert Henry',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: 'I am good, how about you?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: '😊😇',
      time: '6:02 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Can't wait to meet you.`,
      time: '6:03 PM',
    },
    {
      sender: 'John Doe',
      message: `That's great, when are you coming?`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `This weekend.`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Around 4 to 6 PM.`,
      time: '6:04 PM',
    },
    {
      sender: 'John Doe',
      message: `Great, don't forget to bring me some mangoes.`,
      time: '6:05 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Sure!`,
      time: '6:05 PM',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: Colors.secondry,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={{paddingRight: 10}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="arrow-back" size={30} color={Colors.white} />
            </TouchableOpacity>
            <Image
              style={styles.userProfileImage}
              source={{uri: route?.params?.userImage}}
            />
            <View
              style={{
                paddingLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>
                {route.params?.userName}
              </Text>
              <Text style={{color: '#fff', fontWeight: '300'}}>
                {route.params?.isTyping === true ? 'online' : 'offline'}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              Alert.alert('Audio Call', 'Audio Call Button Pressed');
            }}>
            <Icon name="call" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList
            style={{backgroundColor: '#f2f2ff'}}
            inverted={true}
            data={JSON.parse(JSON.stringify(messages)).reverse()}
            renderItem={({item}) => (
              <TouchableWithoutFeedback>
                <View style={{marginTop: 6}}>
                  <View
                    style={{
                      maxWidth: Dimensions.get('screen').width * 0.8,
                      backgroundColor: '#3a6ee8',
                      alignSelf:
                        item.sender === currentUser.name
                          ? 'flex-end'
                          : 'flex-start',
                      marginHorizontal: 10,
                      padding: 10,
                      borderRadius: 8,
                      borderBottomLeftRadius:
                        item.sender === currentUser.name ? 8 : 0,
                      borderBottomRightRadius:
                        item.sender === currentUser.name ? 0 : 8,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                      }}>
                      {item.message}
                    </Text>
                    <Text
                      style={{
                        color: '#dfe4ea',
                        fontSize: 14,
                        alignSelf: 'flex-end',
                      }}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />

          <View style={{paddingVertical: 10}}>
            <View style={styles.messageInputView}>
              <TextInput
                defaultValue={inputMessage}
                style={styles.messageInput}
                placeholder="Message"
                placeholderTextColor={Colors.dark}
                onChangeText={text => setInputMessage(text)}
                onSubmitEditing={() => {
                  sendMessage();
                }}
              />
              <TouchableOpacity
                style={styles.messageSendView}
                onPress={() => {
                  sendMessage();
                }}>
                <Icon name="send" color={Colors.dark} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {height: 30, aspectRatio: 1, borderRadius: 100, width: 30},
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
