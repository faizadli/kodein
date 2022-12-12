import React from "react"; 
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ExamNative = () => {
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    img: {
        width:350,
        height:197,
        borderRadius:12,
    },
    mt20: {
        marginTop:20,
    },
    mt30: {
        marginTop:30,
    },
})

export default ExamNative;