import React from 'react'
import { StyleSheet, Text, View,Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import images from '../assets/images/images';
import { BUTTONS, COLORS, FONTS, HEIGHT, SIZES } from '../constants/theme';

function WelcomePage({ navigation }) {

     // Screen Size to properly size image
     const {width, height } = Dimensions.get('screen')

     return (<ImageBackground
         source={require('../assets/home_bg.jpg')}
         resizeMode="contain"
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

             <View style={styles.homeImg}>
                 <Image style={styles.homeImg} source={require('../assets/laptop4.jpg.png')}/>
             </View> 
 
             <View>

                  <TouchableOpacity style={styles.btnwarning}
                    onPress={() => navigation.navigate('Auth', {
                        auth: false
                    })}
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
        ...BUTTONS.prim1,
        width: "100%",
        borderRadius: 14,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
     },
     btnwarning: {
         ...BUTTONS.prim1,
         height: 20,
         padding : 30,
         borderRadius : 20,
     }
 
 })
 
 export default WelcomePage;