import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import InputBar from '../components/InputBar'
import DisplayText from '../components/DisplayText'

export default function Home() {
    const [displayName, setDisplayName] = useState('');
    const handleSubmit = (name) => {
        setDisplayName(name);
        Keyboard.dismiss(); //Billentyűzet bezárása, miután a név el lett "küldve"
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={style.home}>
                <Image source={require('../assets/medio-logo.png')}/>
                <DisplayText displayName={displayName}></DisplayText>
                <InputBar submitName={handleSubmit}></InputBar>
            </View>
        </TouchableWithoutFeedback>
    );
}

const style = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
        width: '100%',
        height: '100%',
        paddingTop: 40,
    },
})