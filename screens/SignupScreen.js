
import React, { useState } from "react";
import {
  StyleSheet,Text,View,
  Image,TextInput,Button,
  TouchableOpacity,
  ImageBackground,Dimensions
} from "react-native";
import { color } from "react-native-reanimated";
import images from '../resources/assets/imageLocator'
import { BUTTONS, COLORS, SIZES } from "../resources/assets/theme";

const SignupScreen = props =>  {

    const { width, height } = Dimensions.get('screen');

    return (
        <ImageBackground
        source={images.welcomeImage}
        resizeMode="fill"
        style={[
            StyleSheet.absoluteFillObject,
            { width, height },
            styles.container
        ]}
        blurRadius={2}
        >
     
        <View style={styles.container}>
          <Text style={styles.create_account}>Create An Account</Text>
    
          <Image style={styles.image} source={require("../resources/images/white_bg_2.jpg")} />
    
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#809980"
            />
          </View>
    
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#809980"
              secureTextEntry={true}
             />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              placeholderTextColor="#809980"
              secureTextEntry={true}
             />
          </View>
    
          <TouchableOpacity
            onPress={()=> props.navigation.navigate('Login')}
          >
            <Text style={styles.already_have_account}>Already Have An Account?</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Create Account</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
      },

      create_account : {
        color: COLORS.col3,
        fontSize: SIZES.h3,
        fontWeight:'900'
        
      },    
    
      image: {
        marginBottom: 40,
      },
    
      inputView: {
        ...BUTTONS.prim2,
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        overflow: 'hidden',

        alignItems: "center",
      },
    
      TextInput: {
        color: '#fff',
        height: 50,
        width: '100%',
        padding: 10,
        textAlign: 'center'
      },
    
      already_have_account: {
        height: 30,
        marginTop: 40,
        fontStyle : 'underline',
        fontWeight: '600',
        fontSize : SIZES.h6
      },
    
      loginBtn: {
        ...BUTTONS.prim1,
        width: "70%",
        borderRadius: 14,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
      },

      loginText: {
          color:'#fff'
      }
    });
export default SignupScreen;
