import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Introo from '../../../../components/Intro/intro';
// import Tabs from '../../BottomTab/Tab/tab';
import styles from './styles';

const AppIntro = ({navigation}) => {
  const [show, setShow] = useState(false);

  const onSkip = () => {
    setShow(true);
  };
  const slides = [
    {
      text: 'Lorem ipsum is a placeholder text\n commonly used to demonstrate the\n visual form of a document or a typeface\n without relying on meani Lorem ipsum\n may be ',

      image: require('../../../../Assets/Intro/Images/Logo1.png'),
      ImageBackground: require('../../../../Assets/Intro/Images/background2.jpg'),
      TouchableOpacity: TouchableOpacity,
    },
    {
      key: 's2',
      title: 'Sale & Purchase\nProperty Here',

      text: 'Lorem ipsum is a placeholder text\n commonly used to demonstrate the\n visual form of a document or a typeface\n without relying on meani Lorem ipsum\n may be ',

      image: require('../../../../Assets/Intro/Images/Logo2.png'),
      ImageBackground: require('../../../../Assets/Intro/Images/background2.jpg'),
      TouchableOpacity: TouchableOpacity,
    },
    {
      key: 's3',
      title: 'Its Totally\nReliable',
      text: 'Lorem ipsum is a placeholder text\n commonly used to demonstrate the\n visual form of a document or a typeface\n without relying on meani Lorem ipsum\n may be ',
      image: require('../../../../Assets/Intro/Images/Logo3.png'),
      ImageBackground: require('../../../../Assets/Intro/Images/background2.jpg'),
      TouchableOpacity: TouchableOpacity,
    },
  ];
  return (
    <View style={styles.safeareaview}>
      <Introo data={slides} onSkip={onSkip} showNextButton={true} goToSlide />
    </View>
  );
};

export default AppIntro;
