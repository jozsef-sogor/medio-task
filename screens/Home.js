import React, {useState} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import InputBar from '../components/InputBar'
import DisplayText from '../components/DisplayText'

export default function Home() {
    const [displayName, setDisplayName] = useState('');
    const handleSubmit = (name) => setDisplayName(name);

    return (
        <View style={style.home}>
            <Image source={require('../assets/medio-logo.png')}/>
            <DisplayText displayName={displayName}></DisplayText>
            <InputBar submitName={handleSubmit}></InputBar>
        </View>
    );
}

const style = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        //backgroundColor: 'coral',
        width: '100%',
        height: '100%',
        paddingTop: 40,
    },
})