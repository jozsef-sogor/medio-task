import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function DisplayText(props) {
    return(
        <Text style={styles.title}>{`Üdv,\n`}
          <Text style={styles.name}>{props.displayName}</Text>
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