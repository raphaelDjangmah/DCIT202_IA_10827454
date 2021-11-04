import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import images from '../resources/assets/imageLocator';
import { BUTTONS, COLORS, FONTS, SIZES } from '../resources/assets/theme';


const WelcomeScreen = props => {

    // Screen Size to properly size image
    const { width, height } = Dimensions.get('screen')

    return (<ImageBackground
        source={require('../resources/images/home_bg.jpg')}
        resizeMode="fill"
        style={[
            StyleSheet.absoluteFillObject,
            { width, height },
            styles.container
        ]}
        // blurRadius={2}
    >
            <View>
                <Text style={styles.welcomeText}>
                    DreemWare
                </Text>

                <Text style={styles.subText}>
                    Your Home Of Quality Laptops
                </Text>
            </View>
`       `
            <View style={styles.homeImg}>
                <Image style={styles.homeImg} source={require('../resources/images/laptop4.jpg.png')}/>
            </View> 

            <View>
                 <TouchableOpacity style={styles.btnwarning}
                  onPress={()=> props.navigation.navigate('Signup')}
                 >
                    <Text style={styles.shopText}>Visit Shop</Text>
                </TouchableOpacity>
            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        padding: SIZES.padding * 2,
        justifyContent: 'space-around',
        backgroundColor: 'cream',
        width: '100%',
        height: '100%',

    },

    homeImg:{
        width: '100%',
        height: '70%',
        marginTop: 0,
        marginBottom : 0
    },  

    welcomeText: {
        marginTop: 40,
        marginBottom: 20,
        ...FONTS.h1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        color : COLORS.col7
    },
    subText: {
        ...FONTS.h3,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: "600",
        color: 'gray'
    },
    shopText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize : 20

    },
    btnwarning: {
        ...BUTTONS.prim1,
        height: 20,
        padding : 30,
        borderRadius : 20,
    }

})

export default WelcomeScreen;