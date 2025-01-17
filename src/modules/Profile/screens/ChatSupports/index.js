import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ChatSupport = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [chatHistory]);

  const questions = [
    {id: '1', question: 'How can I purchase a property?'},
    {id: '2', question: 'What are the steps for buying a house?'},
    {id: '3', question: 'Do I need a real estate agent?'},
    // Add more questions as needed
  ];

  const answers = {
    1: 'To purchase a property, you can...',
    2: 'The steps for buying a house include...',
    3: 'While it is not mandatory, having a real estate agent can be beneficial...',
    // Add more answers as needed
  };

  const renderQuestionItem = ({item}) => (
    <View style={{marginVertical: 20}}>
      <TouchableOpacity
        style={styles.questionItem}
        onPress={() => handleQuestionSelection(item)}>
        <Icon
          name="question-answer"
          size={20}
          color="#333"
          style={styles.icon}
        />
        <Text style={styles.questionText}>{item.question}</Text>
      </TouchableOpacity>
    </View>
  );

  const handleQuestionSelection = question => {
    setSelectedQuestion(question.id);
    setChatHistory(prevChat => [
      ...prevChat,
      {id: question.id, content: question.question, type: 'question'},
      {id: question.id, content: answers[question.id], type: 'answer'},
    ]);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const ListHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={{left: 30}}>
          <Image
            source={require('../../../../Assets/Images/boot.png')}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ListHeader />
      <FlatList
        ref={flatListRef}
        data={questions}
        renderItem={renderQuestionItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.chatContainer}>
        {chatHistory.map(message => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              {
                alignSelf:
                  message.type === 'question' ? 'flex-start' : 'flex-end',
              },
            ]}>
            <Text
              style={[
                styles.messageText,
                {color: message.type === 'question' ? 'blue' : '#333'},
              ]}>
              {message.content}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ChatSupport;
