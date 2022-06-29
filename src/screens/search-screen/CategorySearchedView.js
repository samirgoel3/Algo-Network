import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, Screens} from '../../Constants';
import {useNavigation} from '@react-navigation/native';


const CategorySearchedView = ({data})=>{
    const navigation = useNavigation()
    return (
        <View>
            {
                data.map((item, index)=>{
                    return(
                        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop:10, marginHorizontal:15}} key={index} onPress={()=>{navigation.navigate(Screens.AlgoListScreen, {name:item.name, category_id:item._id}  )}}>
                            <View style={{padding:10, backgroundColor:item.color, alignItems:'center', borderRadius:6, justifyContent:'center'}}>
                                <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:10}}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:15, marginLeft:10}}>Find all Algos in {item.name}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default CategorySearchedView;
