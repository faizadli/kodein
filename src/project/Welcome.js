import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const logo = require('../project/images/logo/kodein.png');
const illustration = require('../project/images/illustration/1.png');

const Welcome = ({ navigation }) => {
    return (
        <>
            <StatusBar hidden={true} />
            <LinearGradient colors={['#ebedff', '#dee2ff', '#a8b2ff']} style={styles.container}>
                <Image
                    style={styles.logo}
                    resizeMode={'contain'}
                    source={logo}
                />
                <View style={styles.boxIllustration}>
                    <Image
                        style={styles.illustration}
                        resizeMode={'contain'}
                        source={illustration}
                    />
                    <Text style={styles.heading}>KODEIN</Text>
                    <Text style={styles.description}>SEKOLAH DEVELOPER INDONESIA</Text>
                </View>
                <View style={styles.box3}>
                    <TouchableOpacity 
                        onPress={() => {
                            navigation.navigate(
                                'Home', {
                                    fullname: 'Sekolah Developer Indonesia'
                                }
                            )
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Selanjutnya</Text>
                        <FontAwesome5 
                            style={styles.icon} 
                            size={26} 
                            name={'arrow-circle-right'} 
                            solid 
                        />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    logo: {
        alignSelf:'center',
        flex: 1,
        width: 300,
    },
    boxIllustration: {
        flex: 3,
        alignSelf:'center',
        position:'relative',
    },
    illustration: {
        flex: 1,
        width: 400,
    },
    heading: {
        position:'absolute',
        bottom:35,
        fontSize:35,
        color:'#313131',
        fontFamily:'Poppins-ExtraBold',
        alignSelf:'center',
    },
    description: {
        position:'absolute',
        bottom:17,
        fontSize:18,
        color:'#414141',
        fontFamily:'Poppins-Bold',
        alignSelf:'center',
    },
    box3: {
        flex: 1,
        justifyContent:'center',
    },
    button: {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#149B8B',
        marginHorizontal:32,
        paddingVertical:10,
        borderRadius:16,
        paddingHorizontal:16,
    },
    text: {
        textAlign:'center',
        color:'#FFFFFF',
        fontFamily:'Poppins-Medium',
        fontSize:16,
    },
    icon: {
        color:'#FFFFFF',
    }
})