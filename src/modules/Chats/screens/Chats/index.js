import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../constants/Colors';
const Chats = ({navigation}) => {
  const [stories, setStories] = useState([
    {
      userImage: 'https://randomuser.me/api/portraits/men/60.jpg',
      userName: 'Brayden Willis',
      storyImage:
        'https://images.pexels.com/photos/4726898/pexels-photo-4726898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
    {
      userImage: 'https://randomuser.me/api/portraits/women/81.jpg',
      userName: 'Sophie Price',
      storyImage:
        'https://images.pexels.com/photos/5257534/pexels-photo-5257534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/79.jpg',
      userName: 'Rick Perry',
      storyImage:
        'https://images.pexels.com/photos/3380805/pexels-photo-3380805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/85.jpg',
      userName: 'Dave Pena',
      storyImage:
        'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
    {
      userImage: 'https://randomuser.me/api/portraits/women/74.jpg',
      userName: 'Layla Kennedy',
      storyImage:
        'https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
  ]);

  const [messages, setMessages] = useState([
    {
      userImage: 'https://randomuser.me/api/portraits/women/79.jpg',
      userName: 'Alma Carpenter',
      message: {
        sender: 'Alma Carpenter',
        text: 'Hello',
        seenByYou: true,
        seenByUser: true,
      },
      isTyping: true,
      time: 'now',
    },
    {
      userImage: 'https://randomuser.me/api/portraits/women/81.jpg',
      userName: 'Sophie Price',
      message: {
        sender: 'You',
        text: 'Are you learning React Native too?',
        seenByYou: true,
        seenByUser: false,
      },
      time: '03:32 PM',
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/33.jpg',
      userName: 'Jessie Collins',
      message: {
        sender: 'You',
        text: 'Bye!',
        seenByYou: true,
        seenByUser: true,
      },
      time: '01:40 PM',
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/85.jpg',
      userName: 'Clinton Meyer',
      message: {
        sender: 'Clinton Meyer',
        text: 'Let me know, what you think?',
        seenByYou: false,
        seenByUser: false,
      },
      time: '10:37 AM',
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/60.jpg',
      userName: 'Brayden Willis',
      message: {
        sender: 'Brayden Willis',
        text: 'Okay, will share it with you by Friday.',
        seenByYou: true,
        seenByUser: true,
      },
      time: 'Yesterday',
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/47.jpg',
      userName: 'Dennis Brown',
      message: {
        sender: 'Dennis Brown',
        text: 'Sure, talk to you later.',
        seenByYou: true,
        seenByUser: true,
      },
      time: '3 days ago',
    },
    {
      userImage: 'https://randomuser.me/api/portraits/women/21.jpg',
      userName: 'Dolores Bell',
      message: {
        sender: 'You',
        text: 'Thanks!',
        seenByYou: true,
        seenByUser: true,
      },
      time: '4 days ago',
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/54.jpg',
      userName: 'Everett Green',
      message: {
        sender: 'Everett Green',
        text: 'I am not sure about that.',
        seenByYou: true,
        seenByUser: true,
      },
      time: 'one month ago',
    },
  ]);

  const [currentStoryView, setCurrentStoryView] = useState(stories);
  const [storyModalVisible, setStoryModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      {/* Header */}

      <View
        style={{
          height: 50,
          backgroundColor: Colors.white,
        }}>
        <View
          style={{
            marginTop: 10,
            // backgroundColor: 'red',
            // paddingVertical: 20,
            paddingHorizontal: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginLeft: 14,
              fontSize: 22,
              color: Colors.dark,
            }}>
            Chats
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: Colors.white, marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              height: 50,
              backgroundColor: Colors.white,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              borderRadius: 12,
            }}>
            <Icon2 name="search" color={Colors.grey} size={25} />
            <TextInput
              placeholder="Search address, city, location"
              placeholderTextColor={Colors.dark}
            />
          </View>

          <View
            style={{
              backgroundColor: Colors.dark,
              height: 50,
              width: 50,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Icon2 name="tune" color={Colors.white} size={25} />
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          {messages.map(chat => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChatDetails', chat);
              }}
              style={{
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fafafa',
                borderBottomWidth: 1,
                borderBottomColor: '#dfe4ea',
              }}
              onLongPress={() => {
                Alert.alert(
                  'Delete Chat?',
                  `Do you want to delete ${chat.userName}s chats?`,
                  [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                      style: 'cancel',
                    },
                    {
                      text: 'Yes',
                      onPress: () => {
                        let newChats = messages.filter(
                          m => m.userName !== chat.userName,
                        );
                        setMessages(newChats);
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }}>
              <TouchableOpacity
                onPress={() => {
                  let chatStory = stories.filter(
                    story => story.userName === chat.userName,
                  );
                  if (chatStory.length > 0) {
                    setCurrentStoryView(chatStory);
                    setStoryModalVisible(true);
                  }
                }}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    borderWidth:
                      stories.filter(story => story.userName === chat.userName)
                        .length > 0
                        ? 4
                        : null,
                    borderColor:
                      stories.filter(story => story.userName === chat.userName)
                        .length > 0
                        ? '#3c40c6'
                        : null,
                  }}
                  source={{
                    uri: chat.userImage,
                  }}
                />
              </TouchableOpacity>
              <View style={{flex: 1, paddingHorizontal: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: Colors.dark,
                      fontWeight: '900',
                    }}>
                    {chat.userName}
                  </Text>
                  <Text style={{color: Colors.dark, fontSize: 14}}>
                    {chat.time}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  {chat.isTyping ? (
                    <Text
                      style={{
                        fontFamily: 'NSRegular',
                        fontSize: 16,
                        color: 'green',
                      }}>
                      typing...
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontFamily:
                          chat.message.sender !== 'You'
                            ? chat.message.seenByYou
                              ? 'NSRegular'
                              : 'NSBold'
                            : 'NSRegular',
                        fontSize: 16,
                        color: Colors.textblack,
                      }}>
                      {chat.message.text}
                    </Text>
                  )}
                  {chat.message.sender === 'You' ? (
                    chat.message.seenByUser ? (
                      <MIcon name="done-all" size={16} color="#3c40c6" />
                    ) : (
                      <MIcon name="done" size={16} color={'#555'} />
                    )
                  ) : null}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{height: 20}}></View>
      </ScrollView>
    </View>
  );
};

export default Chats;
