import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, Screens} from '../../Constants';
import {getStringAccordingToAlgoLevel} from '../../utils/StringUtils';
import {getColourAccordingToAlgoLevel} from '../../utils/ColoursUtil';
import {useNavigation} from '@react-navigation/native';

const AlgorithmSearchedView = ({data})=>{

    const navigation = useNavigation()

    return(

        <View>
            {data.map( (item, index)=>{
                return(
                    <TouchableOpacity style={{marginTop:10, marginHorizontal:15}} key={index} onPress={()=>{navigation.navigate(Screens.SpecificAlgoScreen,{algorithmId:item._id} )}}>
                        <View style={{backgroundColor:'#254444', borderRadius:5, width:'100%', padding:8}}>
                            <Text style={{fontSize:15, fontFamily:FONT.REGULAR, color:Colors.WHITE}} numberOfLines={3} ellipsizeMode={'tail'}>{item.problem_statement}</Text>
                            <View style={{flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>

                                    <View style={{backgroundColor:getColourAccordingToAlgoLevel(item.level), borderRadius:50, paddingVertical:3, paddingHorizontal:10}}>
                                        <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:10}}>{getStringAccordingToAlgoLevel(item.level)}</Text>
                                    </View>
                                    {/*<View style={{backgroundColor:Colors.MEDIUM, borderRadius:50, paddingVertical:3, paddingHorizontal:10, marginLeft:5}}>*/}
                                    {/*    <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:10}}>Type Array</Text>*/}
                                    {/*</View>*/}
                                </View>

                            </View>
                        </View>

                    </TouchableOpacity>
                )
            })}
        </View>

    )
}

export default AlgorithmSearchedView;
