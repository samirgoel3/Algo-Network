import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Chip from '../../common-components/Chip';
import {Colors, FONT, ICONS} from '../../Constants';
import {useNavigation} from '@react-navigation/native';
import ProblemStatementScreen from './ProblemStatementScreen';
import SolutionScreen from './SolutionScreen';

const SpecificAlgoScreen = ()=>{


    const [isProblemSelected, selectProblem] = React.useState(true)

    const nav = useNavigation()

    const setHeader = ()=>{
        nav.setOptions({
            headerLeft:()=>(
                <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingRight:20}} >
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=>( nav.goBack()) }>
                        <ICONS.BackArrowWhite width={16} height={16} marginRight={10}/>
                        <View style={{paddingLeft:5}}>
                            <Text style={{fontSize:14, fontFamily:FONT.EXTRA_BOLD, color:Colors.WHITE}}>Array</Text>
                            <View style={{ backgroundColor:Colors.GREEN_MUTED, borderRadius:60, paddingLeft:5, paddingRight:5}}>
                                <Text style={{fontSize:11, fontFamily:FONT.REGULAR, color:Colors.WHITE}}>Level Easy</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                       <Chip value={'Problem Statement'} color={ isProblemSelected?Colors.GREEN_LIGHT:Colors.GREEN_BACKGROUND_LIGHT_TAB}
                             textColor={isProblemSelected?Colors.BLACK_MUTED:Colors.WHITE} onPress={()=>{selectProblem(true)}}/>
                       <Chip value={'Solution'} color={isProblemSelected?Colors.GREEN_BACKGROUND_LIGHT_TAB:Colors.GREEN_LIGHT}
                             textColor={isProblemSelected?Colors.WHITE:Colors.BLACK_MUTED } onPress={()=>{selectProblem(false)}}/>
                    </View>


                </View>
            ),
            headerRight:()=>(null)
        })
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:Colors.GREEN_BACKGROUND}}>
            <View style={{flex:1, height:'100%'}}>
                {setHeader()}
                {isProblemSelected?<ProblemStatementScreen/>:<SolutionScreen/>}

            </View>
        </SafeAreaView>
    )
}

export default SpecificAlgoScreen;
