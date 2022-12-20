import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const BelajarUseState = (props) => {
    const [counter, setCounter] = useState(1)
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => setCounter(counter+1)}
            >
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => setCounter(0)}
            >
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <View style={styles.box}>
                <Text style={styles.number}>{counter}</Text>
            </View>
        </View>
    )
}

export default BelajarUseState

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
    },
    button: {
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:30,
        backgroundColor:'#0441BC',
        borderRadius:12,
    },
    buttonText: {
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:17,
    },
    box: {
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:100/2,
        backgroundColor:'#000000',
    },
    number: {
        fontSize:30,
        fontWeight:'bold',
        color:'#FFFFFF',
    }
})