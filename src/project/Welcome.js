import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity} from "react-native";
import React from "react";

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Welcome = ({ navigation }) => {
    return (
        <>
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <Image 
                    style={styles.img } 
                    resizeMode={'contain'} 
                    source={require('./images/logo/logo.png')}
                />
                <View style={styles.boxillustration}>
                    <Image  
                        style={styles.img2 } 
                        resizeMode={'contain'} 
                        source={require('./images/illustration/gambar.jpg')}
                    />
                    <Text style={styles.Text}>
                        KODEIN
                    </Text>
                    <Text style={styles.Text2}>
                        SEKOLAH DEVELOPER INDONESIA
                    </Text>
                </View>
                <View style={styles.box3}>
                    <TouchableOpacity 
                        onPress={() => {
                            navigation.navigate(
                                'Home',{
                                    fullname: 'Sekolah Developer Indonesia'
                                }
                            )
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText} >Selanjutnya</Text>
                        <FontAwesome5
                            style={styles.icon}
                            size={26}
                            name={'arrow-circle-right'}
                            solid
                        />
                    </TouchableOpacity>
                </View>                                   
            </View>
        </>
    )
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },

    Text: {
        position: 'absolute',
        bottom: 35,
        fontSize:35,
        color: '#444444',
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    Text2: {
        position: 'absolute',
        bottom:17,
        fontSize: 18,
        color: '#000000',
        alignSelf: 'center',
    },

    box3: {
        flex: 1,
        justifyContent: 'center',
    },

    bg: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    img: {
        height: 150,
        width: 150,
        marginVertical: 4,
        borderRadius: 12,
        alignSelf: "center"
    },

    img2: {
        flex: 1,
        width: 400
    },

    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 32,
        paddingVertical: 10,
        paddingHorizontal:16,
        borderRadius: 106,
        backgroundColor: '#59C1BD',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 20
    },

    boxillustration: {
        flex: 3,
        alignSelf: "center",
        position: 'relative'
    },

    icon: {
        color: '#ffffff',
    }
});
