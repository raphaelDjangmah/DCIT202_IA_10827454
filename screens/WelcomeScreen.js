import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import images from '../resources/assets/imageLocator';
import { BUTTONS, COLORS, FONTS, SIZES } from '../resources/assets/theme';


function WelcomeScreen() {

    // Screen Size to properly size image
    const { width, height } = Dimensions.get('screen') 

    return (
        <ImageBackground
            source={images.welcomeImage}
            resizeMode="contain"
            style={[
                StyleSheet.absoluteFillObject,
                { width, height },
                styles.container
            ]}
        >
            <View>
                <Text style={styles.welcomeText}>
                    LapShop
                </Text>
                
                <Text style={styles.subText}>
                    Quality And Affordable 
                </Text>
            </View>

            <View>
                {/* IMAGE BUTTON TO MOVE TO HOMESCREEN WHEN CLICKED */}
                <TouchableOpacity 
                    style={styles.btnwarning}
                    >
                    <Text style={styles.shopText}>
                        Visit Shop
                    </Text>
                    
                </TouchableOpacity>

                

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding * 2,
        justifyContent: 'space-around',
        
    },
    welcomeText: {
        ...FONTS.h1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        fontSize: 25
    },
    subText: {
        ...FONTS.h3,
        fontWeight: "300",
        textAlign: 'center'
    },
    shopText: {
        fontWeight:'bold',
        color: COLORS.darkgray
        
    },
    btnwarning: {
        ...BUTTONS.warning,
        
    }
     
})
 
export default WelcomeScreen;
