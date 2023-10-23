import {Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {
  CreateNewPasswordScreenLogo,
  Usernamelogo,
  PlotIcon,
  NavigationIcon,
} from '../../Assets/SVG/Svg';
import {DotsIcon} from '../../Assets/SVG/SvgDashboard';
import {Button} from '@components/Button/button';
import styles from './styles';

const ListofClientCard = ({item1, rightIcon, style,navigation }) => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };
  // const[visible,setModalVisible]= useState<Boolean>(false)
  return (
    <View style={styles.cardView}>
      <View style={styles.cardView1}>
        <View style={styles.cardView2}>
          <Usernamelogo style={styles.logo} />
          <Text style={styles.username}>{item1?.name}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Button
            text={'Call'}
            color={'#fff'}
            fontSize={12}
            height={20}
            width={60}
            borderWidth={1}
            backgroundColor={'#0277FA'}
            // onPress={onPress}
          />
          <TouchableOpacity style={style} 
          onPress={toggleModal}
          >
            {rightIcon}
          </TouchableOpacity>

          {/* Update Client Small Modal  */}
          {visible == true ?
          <View style={styles.modalView2}>
              <TouchableOpacity 
                 onPress={() => navigation.navigate('UpdateCilent')}
                style={styles.editButton}>
                <Text>Edit</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.deleteButton}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
            :<></>
          }
        </View>
      </View>

      <View style={styles.cardView3}>
        
        <View style={styles.cardView4} />
        <View style={{
          //  backgroundColor:"yellow",
      flex:1}}>
          <View style={styles.cardView5}>
            <View style={{flexDirection: 'row', 
            // backgroundColor:"orange"
            }}>
              <PlotIcon style={styles.logo} />
              <Text style={styles.address}> No of Plots</Text>
            </View>
            <View>
              <Text style={styles.plotamount}>{item1.plotcount}</Text>
            </View>
          </View>
          <View style={styles.cardView7}>
            <NavigationIcon style={styles.logo} />
            <Text style={styles.location}>{item1.location}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.totalInvestment}>Total Investment</Text>
        </View>
        <View>
          <Text style={styles.price}>{item1.total_investment} </Text>
        </View>
      </View>
    </View>
  );
};

export default ListofClientCard;
