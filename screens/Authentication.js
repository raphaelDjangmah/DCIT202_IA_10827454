import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import images from '../assets/images/images';
import { BUTTONS, COLORS, FONTS, HEIGHT, SIZES } from '../constants/theme';
import { AuthContext } from '../src/Components/Context';

function Authentication({ route }) {

    const [registration, setRegistration] = useState(true)

    const { signIn, signUp } = useContext(AuthContext)

    const { width, height } = Dimensions.get('screen')

    useEffect(() => {

        const { auth } = route.params

        setRegistration(auth)

    }, [])

    // const handleSignIn = () => {
    //     signIn()
    // }


    return (
        <ImageBackground
            source={images.signupImage}
            resizeMode="contain"
            style={[
                StyleSheet.absoluteFillObject,
                { width, height },
                styles.container
            ]}
            blurRadius={2}
        >
            <View style={styles.container}>
                <Text style={styles.create_account}>
                    {
                        registration ? 'Sign up' : 'Sign in'
                    }
                </Text>
            </View>
          

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

                { 
                    registration ? (
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Confirm Password"
                                placeholderTextColor="#809980"
                                secureTextEntry={true}
                            />
                        </View>
                    ) : null
                }
           
                <View>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => signIn()}
                >
                    
                    <Text style={styles.btnText}>
                        {
                            registration ? 'Create Account' : 'Login'
                        }
                    </Text>
                </TouchableOpacity>
                </View>
            <View>
                <TouchableOpacity onPress={() => setRegistration(!registration)} >
                    <Text style={styles.question}>
                        {
                            registration ? 'Have an Account already ?' : 'Don\'t have an account yet?'
                        }

                    </Text>
                    <Text style={styles.questionBtn} >
                        {
                            registration ? 'Sign in' : 'Sign up'
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
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
      fontWeight: '600',
      fontSize : SIZES.h6
    },
  
    loginBtn: {
      ...BUTTONS.prim1,
      width: "100%",
      borderRadius: 14,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      padding: 10
    },

    loginText: {
        color:'#fff'
    },
    btnText: {
        ...FONTS.primary
    },
    question: {
        ...FONTS.body4,
        color: 'gray'
    },
    questionBtn: {
        ...FONTS.body3,
        color: 'black'
    }
})

export default Authentication
