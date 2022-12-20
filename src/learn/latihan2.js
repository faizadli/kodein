import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Latihan2 = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#FF0000',
        flexDirection:'row',
    },
    box: {
        width:100,
        height:100,
        borderRadius:100/2,
        backgroundColor:'#000000'
    },
});

export default Latihan2;