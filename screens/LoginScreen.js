import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,Text,View,
  Image,TextInput,Button,
  TouchableOpacity,
  ImageBackground,Dimensions
} from "react-native";
import images from '../resources/assets/imageLocator'
import { BUTTONS, COLORS } from "../resources/assets/theme";

const LoginScreen = props => {
    
    const { width, height } = Dimensions.get('screen');

  return (
    <ImageBackground
    source={images.welcomeImage}
    resizeMode="cover"
    style={[
        StyleSheet.absoluteFillObject,
        { width, height },
        styles.container
    ]}
    blurRadius={2}
    >

    <View style={styles.container}>
      <Text style={styles.homewelcome}>Please Provide Credentials</Text>

      <Image style={styles.image} source={require("../resources/images/white_bg_2.jpg")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#fff"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
         />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}
        onPress={()=> props.navigation.navigate('Signup')}
        >Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
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

  homewelcome:{
      fontWeight : '800',
      fontStyle  : 'italic'
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    ...BUTTONS.primary,
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

  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginTop: 40
  },

  loginBtn: {
    ...BUTTONS.prim1,
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  loginText: {
    color:'#fff'
}
});

export default LoginScreen;