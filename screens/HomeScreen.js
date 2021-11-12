import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { COLORS, SIZES } from '../resources/assets/theme';
import MainCategory from '../src/Components/MainCategory';
import RenderExplore from '../src/Components/RenderExplore';
import RenderLatest from '../src/Components/RenderLatest';


function HomeScreen({ navigation }) {

    return (
        <ScrollView style={styles.container} >
            <MainCategory />
            <RenderExplore navigation={navigation} />
            <RenderLatest navigation={navigation} />
        </ScrollView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: SIZES.paddingLarge,
        backgroundColor: COLORS.tetiary,
      }
})

export default HomeScreen;
