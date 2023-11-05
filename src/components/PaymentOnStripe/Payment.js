import {
  Modal,
  Alert,
  SafeAreaView,
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
// import {createPaymentIntent} from '../../utils/API/Requests';
import {
  CardField,
  useStripe,
  createToken,
  confirmPayment,
} from '@stripe/stripe-react-native';
import {Colors} from '../../constants/Colors';
export default function Payment({price}) {
  const [cardInfo, setCardinfo] = useState(null);
  const [amount, setAmount] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setAmount(price);
    console.log(price);
  });

  const createPaymentIntent = async data => {
    try {
      const response = await fetch('http://192.168.30.131:8182/payment-sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error; // You can choose to re-throw the error for the calling code to handle
    }
  };

  const fatchCardInfo = cardDetail => {
    if (cardDetail.complete) {
      setCardinfo(cardDetail);
      setCardinfo(true);
    } else {
      setCardinfo(null);
    }
  };
  const onDone = async () => {
    let sendingData = {
      amount: price,
      currency: 'usd',
    };
    Keyboard.dismiss();
    console.log('CARD INFO', cardInfo);

    try {
      const response = await createPaymentIntent(sendingData);
      console.log('response____', response);

      if (response?.paymentIntent) {
        const confirmPaymentIntent = await confirmPayment(
          response?.paymentIntent,
          {paymentMethodType: 'Card'},
        );
        console.log('response of confirm payments is...', confirmPaymentIntent);

        if (confirmPaymentIntent?.paymentIntent?.status === 'Succeeded') {
          // Payment was successful
          console.log(
            'Payment successfully...status:',
            confirmPaymentIntent?.paymentIntent?.status,
          );
          setModalVisible(true);
          Alert.alert(
            'Payment successfully...',
            <LottieView
              source={require('../../Assets/Images/payment.json')}
              autoPlay
              loop
              style={{width: 200, height: 200}}
            />,
          );
        } else {
          // Payment failed or was canceled
          console.log('Payment failed or canceled');
        }
      } else {
        console.log('Payment intent not found in the response.');
        // Handle this case as needed.
      }
    } catch (error) {
      console.error('Error in onDone:', error);
      // Handle the error, e.g., display an error message to the user.
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '70%',
          height: '20%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          backgroundColor: Colors.white,
        }}>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
            placeholderColor: 'black',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={cardDetails => {
            console.log('cardDetails', cardDetails);
            fatchCardInfo(cardDetails);
          }}
          onFocus={focusedField => {
            console.log('focusField', focusedField);
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onDone}
        disabled={!cardInfo}
        style={{
          padding: 10,
          backgroundColor: cardInfo ? '#000' : 'gray',
          color: '#fff',
          width: '50%',
          alignSelf: 'center',
          alignItems: 'center',
          borderRadius: 10,
          top: 50,
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>Payment Done</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.8)',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              padding: 50,
              borderRadius: 10,
              elevation: 5,
            }}>
            <LottieView
              source={require('../../Assets/Images/payment.json')}
              autoPlay={true}
              loop={false}
              style={{width: 200, height: 200}}
            />
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                fontSize: 20,
                padding: 10,
                fontWeight: 'bold',
              }}>
              Payment successfully..
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                backgroundColor: 'gray',
                padding: 10,
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 20}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}