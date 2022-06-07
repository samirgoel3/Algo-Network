import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { FONT, Colors, ICONS} from '../../../Constants';
import Mock from '../../../constants-data';
import Chip from '../../../common-components/Chip';

const LatestReleaseAlgos = ()=>{
    return(
        <View style={{marginTop:10}}>
            <Text style={styles.headerText}> Latest Algos</Text>
            <View style={styles.rootView}>
                {Mock.MockData.latest_algos.map((item, index)=>{
                    return(
                        <View style={{padding:8}}>
                            <Text style={styles.problemText} numberOfLines={3} ellipsizeMode={'tail'}>{item.problem_statement}</Text>
                            <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between', alignItems:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Chip value={'Level: Moderate'} color={Colors.GREEN_MUTED} />
                                    <Chip value={'Type: ARRAY'} color={'#131D20'}/>
                                </View>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Text style={{fontSize:10, color:Colors.WHITE, fontFamily:FONT.SEMI_BOLD, marginRight:10}}> Added on: 28/March</Text>
                                    <ICONS.RightArrow width={10} height={10}/>
                                </View>

                            </View>
                            {(index != (Mock.MockData.latest_algos.length - 1))? <View style={{height:0.3, backgroundColor:Colors.GREEN_BACKGROUND, marginTop:20}}/> : null }

                        </View>
                    )
                })}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    rootView:{
        backgroundColor:'#254444',
        borderRadius:5,
        width:'100%',
    },
    headerText:{fontSize:20, marginBottom:5, fontFamily:FONT.BOLD, color:Colors.WHITE},
    problemText: {fontSize:15, fontFamily:FONT.REGULAR, color:Colors.WHITE},
})


export default LatestReleaseAlgos;
