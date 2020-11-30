import React, {useRef} from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

export default function DisplayText(props) {
    const pulseAnim = useRef(new Animated.Value(1)).current;

    const pulse= () => {
      Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.25,
            duration: 125,
            useNativeDriver: true
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 125,
            useNativeDriver: true
          }),
      ]).start();
    };

    return(
        <Text style={styles.title}>{`Üdv,\n`}
            <Animated.View style={{transform: [{scale: pulseAnim}]}}>
                <Text onChange={pulse()} style={styles.name}>
                    {props.displayName}
                </Text>
            </Animated.View>
        {`\n!`}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '300',
        textAlign: 'center',
        color: '#1d1d1d',
      },
      name: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1d1d1d',
      }
})