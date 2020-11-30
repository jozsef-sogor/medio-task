import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import InputBar from '../components/InputBar'
import DisplayText from '../components/DisplayText'

export default function Home() {
    const [displayName, setDisplayName] = useState('');
    const handleSubmit = (name) => {
        setDisplayName(name);
    };

    return (
        <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss} 
        disabled={window.navigator.product == 'ReactNative' ? false : true} //Böngészőbn deaktiválva van (kifókuszált a beviteli mezőből)
        >
            <View style={styles.home}>
                <Image source={require('../assets/medio-logo.png')} style={styles.image}/>
                <DisplayText displayName={displayName}></DisplayText>
                <InputBar submitName={handleSubmit}></InputBar>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
        width: '100%',
        height: '100%',
        paddingTop: 40,
    },
    image: {
        width: 202,
        height: 68,
    }
})