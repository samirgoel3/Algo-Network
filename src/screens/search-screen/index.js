import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
import {useNavigation} from '@react-navigation/native';
import ProgressView from './ProgressView';
import NoDataView from './NoDataView';
import CategorySearchedView from './CategorySearchedView';
import AlgorithmSearchedView from './AlgorithmSearchedView';


const SearchScreen = ()=>{
    const nav = useNavigation()
    const [input, setInput] = React.useState("")
    const setHeader = ()=>{
        nav.setOptions({
            headerLeft:()=>(
                <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingRight:20}} >
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=>( nav.goBack()) }>
                        <ICONS.BackArrowWhite width={16} height={16} marginRight={10}/>
                        <View style={{paddingLeft:5}}>
                            <Text style={{fontSize:18, fontFamily:FONT.EXTRA_BOLD, color:Colors.WHITE}}>Search</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ),
            headerRight:()=>(null)
        })
    }




    return (
        <SafeAreaView style={{flex:1, backgroundColor:Colors.GREEN_BACKGROUND}} >
            <View ></View>
            {setHeader()}
            <TextInput
                style={{ backgroundColor:Colors.WHITE, height:49, borderRadius:10, margin:10, padding:15}}
                placeholder={'Search your algo or category'}
                onChangeText={(e)=>{}}
            />
            <ScrollView>
                <ProgressView/>
                <NoDataView/>
                <CategorySearchedView/>
                <AlgorithmSearchedView/>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SearchScreen;
