import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, FONT, ICONS} from '../../../Constants';

const SearchBar = ({onPress = ()=>{}})=>{
    return(
        <TouchableOpacity style={styles.rootView} onPress={onPress}>

            <ICONS.Search width={20} height={20}/>
            <Text style={styles.textStyle}> Search Algorithm</Text>
        </TouchableOpacity>
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
