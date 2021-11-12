import React, { useCallback } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { results } from '../../resources/assets/dummyData';
import FavouriteCard from './FavouriteCard';

import { ICONS } from '../../resources/assets/icon';
import { SIZES} from '../../resources/assets/theme';


function RenderFavourites({ navigation }) {

    const renderItem = useCallback(
        ({item}) => (
            <FavouriteCard item={item} navigation={navigation} />
        )
    )

    return (
        <View>
            <FlatList 
                data={results}
                // showsVerticalScrollIndicator={false}
                keyExtractor={ item => `${item.id}`}
                key={ item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ padding: SIZES.padding* 2 }}
            />
        </View>
    )
}

export default RenderFavourites
