import { StatusBar } from 'expo-status-bar';
import { Animated, Text, View, Dimensions } from 'react-native';
import styles from './styles';
import { useRef, useState } from 'react';
import getNetSpeed from '../../Hooks/getNetSpeed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let flag = false
let val = 0
let last = 0;

const colors = ["#696969","#853d3d","#856e3d","#44853d"]

export default function App() {

  const diameterVal = useRef(
    new Animated.Value(0)
  ).current

  const [color, setColor] = useState("#696969")
  
  const [netSp,setNepSp] = useState(0)

  if ( !flag ) {
    setInterval(async () => {
      val = await getNetSpeed()
      if ( val != last ) {
        setNepSp(val)
        if ( val > 70 ) {
          setColor(colors[3])
        } else if ( val > 55 ) {
          setColor(colors[2])
        } else if ( val > 40 ) {
          setColor(colors[1])
        } else {
          setColor(colors[0])
        }
        Animated.timing(diameterVal,{
          toValue: windowWidth*0.9*(val/80)*1.5,
          duration: 500,
          useNativeDriver: false 
        }).start()
        last = val
      }
    },400)
  }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />

      <Animated.View style={[styles.round,{height: diameterVal, width: diameterVal, backgroundColor: color}]}>
        <Text style={styles.number}>{netSp}</Text>
      </Animated.View>

    </View>

  );

}
