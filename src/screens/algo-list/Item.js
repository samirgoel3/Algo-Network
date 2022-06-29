import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, Screens} from '../../Constants';
import Utils from '../../utils';
import Chip from '../../common-components/Chip';
import {useNavigation} from '@react-navigation/native';

const Item = ({heading , description , level, algorithmId})=>{
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.blockLayout,{margin:10}]}  onPress={()=>{navigation.navigate(Screens.SpecificAlgoScreen, {algorithmId})}}>
            <Text style={styles.textStyle_HEADER} numberOfLines={3} ellipsizeMode={'tail'}>{heading}</Text>
            <Text style={styles.textStyle_DESCRIPTION} numberOfLines={3} ellipsizeMode={'tail'}>{description}</Text>
            <View style={{flexDirection:'row', marginTop:5, alignItems:'flex-end', justifyContent:'flex-end'}}>
                <Chip value={""+Utils.getStringAccordingToAlgoLevel(level)} color={Utils.getColourAccordingToAlgoLevel(level)} textStyle={{fontFamily:FONT.EXTRA_BOLD, fontSize:10}}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    blockLayout:{
        borderRadius:5,
        padding:8,
        marginBottom:5,
        backgroundColor:Colors.GREEN_BACKGROUND_LIGHT
    },
    textStyle_HEADER:{
        fontSize:16,
        fontFamily:FONT.EXTRA_BOLD,
        color:Colors.WHITE
    },
    textStyle_DESCRIPTION:{
        fontSize:13,
        fontFamily:FONT.REGULAR,
        color:Colors.WHITE
    }
})




export default Item;
