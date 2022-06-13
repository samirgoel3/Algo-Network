import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, Screens} from '../../Constants';
import Utils from '../../utils';
import Chip from '../../common-components/Chip';
import {useNavigation} from '@react-navigation/native';

const FavouriteCategoryItem = ({element})=>{
    const navigation = useNavigation();

    return (
        <View>
            {element.map((item, index)=>{
                return(
                    <TouchableOpacity style={[styles.blockLayout ]} key={index} onPress={()=>{navigation.navigate(Screens.SpecificAlgoScreen)}}>
                        <Text style={styles.textStyle}
                              numberOfLines={3}
                              ellipsizeMode={'tail'}
                        >{ item.problem_statement }</Text>
                        <View style={{flexDirection:'row', marginTop:5, alignItems:'flex-end', justifyContent:'flex-end'}}>
                            <Chip value={""+Utils.getStringAccordingToAlgoLevel(item.algo_level)} color={Utils.getColourAccordingToAlgoLevel(item.algo_level)}/>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    blockLayout:{
        borderRadius:5,
        padding:8,
        marginBottom:5,
        backgroundColor:Colors.GREEN_BACKGROUND_LIGHT
    },
    textStyle:{
        fontSize:13,
        fontFamily:FONT.REGULAR,
        color:Colors.WHITE
    }
})




export default FavouriteCategoryItem;
