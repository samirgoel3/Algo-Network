import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, FONT} from '../../Constants';
import FavouriteCategoryItem from './FavouriteCategoryItem';

const FavouriteCategoryBlock  = ({element})=>{
    return(
        <View >
            {element.map((item, index)=>{
               return(
                   <View>
                       <Text style={styles.headerText}>{"Favourites in "+item.category_name}</Text>
                       <View style={styles.blockLayout}><FavouriteCategoryItem element={item.algos}/></View>
                   </View>
               )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    blockLayout:{
        borderRadius:5,
        padding:5
    },
    headerText:{fontSize:20, marginBottom:5, fontFamily:FONT.BOLD, color:Colors.WHITE, marginTop:15}

})


export default FavouriteCategoryBlock;
