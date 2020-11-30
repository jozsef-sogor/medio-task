import React, {useState} from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, Button, Keyboard } from 'react-native';

export default function InputBar(props) {
    const [name, setName] = useState('');
    const handleSubmit= () => {
        Keyboard.dismiss(); //Billentyűzet bezárása, miután a név el lett "küldve"
        props.submitName(name);
        setName(''); //Bevitei mező kiürítése a név elküldése után
    };

    return (

        <KeyboardAvoidingView style={styles.input} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TextInput 
                style={styles.inputField}
                placeholder='Név'
                value={name}
                onChangeText={(inputVal) => setName(inputVal)}
            />
            <Button 
                title='Küldés'
                color='#2C9BF8'
                disabled={name.trim().length ? false : true} //A gomb csak akkor aktív, ha van beírt név
                onPress={()=>handleSubmit()}
            />
      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    input: {
        //flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#eaeaea',
        paddingVertical: 5,
        left: 0,
        bottom: 0,
        right: 0,
        shadowColor: '#3C3C3C',
        shadowOffset: {
          width: 0,
          height: -5,
        },
        shadowOpacity: .8,
        shadowRadius: 15,
      },
      inputField: {
        padding: 10,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        width: '70%',
      },
})