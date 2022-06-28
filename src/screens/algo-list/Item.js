import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, Screens} from '../../Constants';
import Utils from '../../utils';
import Chip from '../../common-components/Chip';
import {useNavigation} from '@react-navigation/native';

const Item = ({data})=>{
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.blockLayout,{margin:10}]}  onPress={()=>{navigation.navigate(Screens.SpecificAlgoScreen)}}>
            <Text style={styles.textStyle_HEADER} numberOfLines={3} ellipsizeMode={'tail'}>Heading Goes here</Text>
            <Text style={styles.textStyle_DESCRIPTION} numberOfLines={3} ellipsizeMode={'tail'}>Some long description about the algorithm will goes here accordingly </Text>
            <View style={{flexDirection:'row', marginTop:5, alignItems:'flex-end', justifyContent:'flex-end'}}>
                <Chip value={""+Utils.getStringAccordingToAlgoLevel(3)} color={Utils.getColourAccordingToAlgoLevel(3)} textStyle={{fontFamily:FONT.EXTRA_BOLD, fontSize:10}}/>
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
