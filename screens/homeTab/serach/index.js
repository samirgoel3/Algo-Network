import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ICONS, Colors, FONT} from '../../../Constants';

const SearchBar = ()=>{
    return(
        <View style={styles.rootView}>
            <ICONS.Search width={20} height={20}/>
            <Text style={styles.textStyle}> Search Algorithm</Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    rootView:{
        flex:1,
        borderRadius:30,
        borderWidth:0.5,
        flexDirection:'row',
        borderColor:Colors.LIGHT,
        padding:15
    },
    textStyle:{
        fontSize:14,
        fontFamily:FONT.REGULAR,
        flex: 1,
        marginLeft:5,
        color:Colors.LIGHT
    }
})

export default SearchBar
