import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

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
                style={styles.buttonReset}
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
        height:40,
        backgroundColor:'#F06292',
        borderRadius:12,
    },
    buttonReset: {
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:40,
        backgroundColor:'#9C254D',
        borderRadius:12,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize:17,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: "#000000",
    },
    number: {
        fontSize:40,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});

export default BelajarUseState;