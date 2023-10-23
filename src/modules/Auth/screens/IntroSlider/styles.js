import {StyleSheet, Platform} from 'react-native';


export default StyleSheet.create({
  safeareaview: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: 100,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#ffffff',
    marginTop: 150,
  },
  title1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#ffffff',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 20,
  },
  renderNextButton: {
    height: 30,
    width:30,
    // marginHorizontal: 15,
    backgroundColor: '#000',
    borderRadius: 50,
    // justifyContent: 'center',
  },
  rendertext: {
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  rendertext2: {
    fontSize: 13,
    color: '#FFFFFF',
  },
  rendertext3: {
    fontSize: 13,
    color: '#4AB5E3',
    // marginHorizontal: 5
  },
  renderview: {
    marginHorizontal: 5,
  },
  skip: {
    height: 32,
    width: 64,
    padding: 6,
    backgroundColor: 'rgba(255,255,255,0.32)',
    borderRadius: 32,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: Platform.OS == 'ios' ? 60 : 30,
    marginHorizontal: 15,
  },
  textskip: {
    color: '#ffffff',
    textAlign: 'center',
  },
  bottomview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
});