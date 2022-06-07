import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, FONT} from '../../Constants';
import Utils from '../../utils';
import Chip from '../../common-components/Chip';

const FavouriteCategoryItem = ({element})=>{
    return (
        <View>
            {element.map((item, index)=>{
                return(
                    <View style={[styles.blockLayout ]}>
                        <Text style={styles.textStyle}
                              numberOfLines={3}
                              ellipsizeMode={'tail'}
                        >{ item.problem_statement }</Text>
                        <View style={{flexDirection:'row', marginTop:5, alignItems:'flex-end', justifyContent:'flex-end'}}>
                            <Chip value={""+Utils.getStringAccordingToAlgoLevel(item.algo_level)} color={Utils.getColourAccordingToAlgoLevel(item.algo_level)}/>
                        </View>
                    </View>
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
        fontsize:18,
        fontFamily:FONT.REGULAR,
        color:Colors.WHITE
    }
})




export default FavouriteCategoryItem;
