import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, View ,Text, Image} from 'react-native';
import styles from './styles'
import Lottie from 'lottie-react-native';
// import colors from '@commons/colors'

const AppPreLoader = () => {
  const animationRef = useRef<Lottie>(null)
  useEffect(() => {

  }, [])
  return (
    <View style={styles.preloader}>
      <View style={{ width: 160, height: 161, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
        <Lottie
          ref={animationRef}
          source={require('../../Assets/LoadingLottie/loaderLottie.json')}
          autoPlay
          loop
        />
        <Image style={{width:40, height:40,position: 'absolute',alignSelf:'center'}} source={require('../../Assets/LoadingLottie/logo.png')} />
      </View>

    </View>
  )
}

export default AppPreLoader