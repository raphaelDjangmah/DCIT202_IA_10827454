import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import MainCategory from '../src/Components/MainCategory';
import RenderExplore from '../src/Components/RenderExplore';


function Home({ navigation }) {
    

    return (
        <View style={{backgroundColor: 'lightgray'}}>
            <ScrollView style={styles.container} >
            <MainCategory />
            <RenderExplore navigation={navigation} />
           </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: SIZES.paddingLarge,

        // backgroundColor: COLORS.tetiary,
        // paddingBottom: SIZES.padding * 10
    }
})

export default Home
