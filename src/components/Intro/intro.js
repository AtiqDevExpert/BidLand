import React, {useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {useNavigation} from '@react-navigation/native';
import {ForwardIcon} from '../../Assets/SVG/Svg';
const Introo = ({data, onSkip, onDone, onSlideChange}) => {
  let slider = AppIntroSlider;
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <>
        <ImageBackground
          source={item.ImageBackground}
          resizeMode={'cover'}
          style={{flex: 1}}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>
      </>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.mainView}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <View
            onPress={() => navigation.navigate('login')}
            style={styles.skip}>
            <Text style={styles.textskip}>Skip</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.renderNextButton}
            onPress={() => navigation.navigate('login')}>
            <ForwardIcon style={{height: 20, width: 20}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <>
        <View style={styles.mainView}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <View style={styles.skip}>
              <Text style={styles.textskip}>Skip</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <View style={styles.renderNextButton}>
              <ForwardIcon style={{height: 20, width: 20}} />
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={data}
        activeDotStyle={{backgroundColor: '#fff', height: 8, width: 8}}
        dotStyle={{backgroundColor: '#000', width: 8, height: 8}}
        renderItem={renderItem}
        onSkip={onSkip}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onSlideChange={onSlideChange}
        onDone={onDone}
        showNextButton={true}
        showSkipButton={false}
        showDoneButton={true}
        bottomButton
      />
    </>
  );
};
const styles = StyleSheet.create({
  skip: {
    height: 32,
    width: 64,
    padding: 6,
    backgroundColor: '#0000',
    borderRadius: 32,
  },
  textskip: {
    color: '#ffffff',
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 80,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#fff',
    marginTop: 8,
  },

  text: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
  },
  renderNextButton: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 15,
  },
});
export default Introo;
