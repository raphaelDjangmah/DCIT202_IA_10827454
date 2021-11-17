import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

function MainCategory() {

    const [category, setCategory] = useState("EXPLORE")

    const deviceType = [
        "CURRENTLY IN STOCK"
    ]

    const renderItem = (item) => (
        <TouchableOpacity 
            style={styles.category}  
            onPress={() => setCategory(item)}
            >
            <Text style={[
                styles.categoryText,
                { color: category === item ? COLORS.black : COLORS.col4 }
            ]} >
                {`${item}`}
            </Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container} >
            <Text style={styles.textMain} >
                DreemWare 
            </Text>
            <Text style={styles.categoryText}>
                Your Home Of Quality Laptops
            </Text>
            <FlatList
                data={deviceType}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ (item, index) => 'key' + index }
                key={ (item, index) => 'key' + index }
                renderItem={ item =>  renderItem(item.item)}
                contentContainerStyle={{ paddingVertical: SIZES.padding* 2 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding * 2,
        // backgroundColor: COLORS.primary 
    },
    textMain: {
        ...FONTS.h2,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: 20
    },
    category: {
        marginRight: SIZES.padding,
        marginBottom: 5
    },
    categoryText: {
        ...FONTS.h5,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default MainCategory
