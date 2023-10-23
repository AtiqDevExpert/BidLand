import React from 'react';
import styles from './styles';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {InvestmentIcon,PlotIcon} from '@assets/SVG/Svg';
import {ArrowIconnext,ThreePersonIconblue} from '@assets/SVG/SvgDashboard';

const TotalPlotsDashboard: React.FC<any> = ({
  
  totalPlotsValue,
  totalClientsValue,
}) => {

  return (
    <SafeAreaView>
              <View 
                  style={styles.plotsView1}>
                  <View style={styles.plotsView2}>
                    <View style={styles.plotsView3}>
                      <View style={styles.plotsView4}>
                        <PlotIcon style={styles.ploticon} />
                      </View>
                      <Text style={styles.plotsText1}>Total Plots</Text>
                    </View>

                    <View style={styles.plotsView5}>
                        <Text style={styles.plotsText2}>{totalPlotsValue}</Text>
                      <View style={styles.plotsView6}>
                        <ArrowIconnext style={styles.arrowIconnext} />
                      </View>
                    </View>


                  </View>
                  <View style={{borderWidth:1, borderColor:"#BDBDBD", width:"95%", alignSelf: "center"}}/>
                  <View style={styles.plotsView2}>
                    <View style={styles.plotsView3}>
                      <View style={styles.plotsView4}>
                        <ThreePersonIconblue style={styles.ploticon} />
                      </View>
                      <Text style={styles.plotsText1}>Total Clients</Text>
                    </View>

                    <View style={styles.plotsView5}>
                        <Text style={styles.plotsText2}>{totalClientsValue}</Text>
                      <View style={styles.plotsView6}>
                        <ArrowIconnext style={styles.arrowIconnext} />
                      </View>
                    </View>


                  </View>
          </View>
    </SafeAreaView>
  );
};

export default TotalPlotsDashboard;
