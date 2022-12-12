import { React } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const BelajarImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={[styles.img, styles.mt30]} 
                resizeMode={'contain'}
                // source={require('../assets/img/wp.jpeg')}
            />
            <Image
                style={[styles.img, styles.mt20]} 
                resizeMode={'contain'}
                // source={require('../assets/img/wp.jpeg')}
            />
            <Image
                style={[styles.img, styles.mt20]} 
                resizeMode={'contain'}
                source={{uri: 'https://bit.ly/3BbSOJN'}}
            />
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

export default BelajarImage;