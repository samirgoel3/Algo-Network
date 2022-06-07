import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from '../../Constants';
import FavouriteCategoryBlock from './FavouriteCategoryBlock';
import Mock from '../../constants-data';

const FavouriteTab = ()=>{
    return(
        <View style={styles.rootLayout}>
            <ScrollView>
                <FavouriteCategoryBlock element={Mock.MockData.favourites_algos}  />
                <View style={{height:80}}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    rootLayout:{
        flex:1,
        backgroundColor:Colors.GREEN_BACKGROUND,
        padding:10
    }
})

export default FavouriteTab;
