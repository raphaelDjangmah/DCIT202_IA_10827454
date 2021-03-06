import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import images from '../assets/images/images';
import { BUTTONS, COLORS, FONTS, SIZES } from '../constants/theme';


function Profile() {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.headText}>
                   Profile
                </Text>
            </View>
            <View style={styles.profile}>
                <Image 
                    source={images.dell2}
                    resizeMode="contain"
                    style={styles.profilePic}></Image>
                <View>
                    <Text style={styles.displayName} >
                        Raphael Djangmah O
                    </Text>
                </View>
                <View>
                    <Text style={styles.displayEmail}>
                        rdosro-agbo@st.ug.edu.gh
                    </Text>
                </View>
            </View>
            <View style={styles.profileBtn} >
                <TouchableOpacity style={styles.btn} >
                    <Text>
                        Edit Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>
                        Invite a friend
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>
                        Help
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.tetiary,
        paddingVertical: SIZES.paddingLarge
    },
    headText: {
        ...FONTS.h2,
        paddingHorizontal: SIZES.padding * 2,
        fontWeight: 'bold'
    },
    profile:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10
    },
    profilePic:{
        width: 180,
        height: 180,
        borderRadius: 100,
        backgroundColor: 'black',
        marginBottom: 10
    },
    displayName:{
        ...FONTS.h3
    },
    displayEmail: {
        ...FONTS.h4
    },
    profileBtn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    btn: {
        ...BUTTONS.secondary,
        width: '100%',
        marginVertical: 5
    }
})

export default Profile
