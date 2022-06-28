import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import Item from './Item';
import AlgoService from '../../network/services/algo-service';
import NoInternetRetryComponent from '../../common-components/NoInternetRetryComponent';
import SkeletonListLoading from './SkeletonListLoading';

const MockAlgos = ["","","","","", "","","","",""]


const AlgoList = ()=>{

    const nav = useNavigation()
    const route = useRoute()
    const { name, id } = route.params;

    const getItem = ()=>{
        return <Item/>
    }

    const [apiHandler, setApiHandler] = React.useState({
        loading:false,
        apiError:null
    })

    useEffect(()=>{fetchCategoryDetails()}, [])


    const setHeader = ()=>{
        nav.setOptions({
            headerLeft:()=>(
                <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingRight:20}} >
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=>( nav.goBack()) }>
                        <ICONS.BackArrowWhite width={16} height={16} marginRight={10}/>
                        <View style={{paddingLeft:5}}>
                            <Text style={{fontSize:17, fontFamily:FONT.EXTRA_BOLD, color:Colors.WHITE}}>{name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ),
            headerRight:()=>(null)
        })
    }

    const fetchCategoryDetails = async ()=>{
        try{
            setApiHandler({loading: true, apiError: null})
            const data = await AlgoService.AlgoService.getAlgorithm('62b4ba96f8e339ff4db70035')

            if(!data){
                setApiHandler({loading: false, apiError: "Some problem in api response"})
            }
            else{
                if(data.data.result === 1){
                    setApiHandler({loading: false, apiError: null})
                }else{
                    setApiHandler({loading: false, apiError: data.data.message})
                }
            }
        }catch (e){
            setApiHandler({loading: false, apiError: e.message})
        }
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:Colors.GREEN_BACKGROUND}}>
            {setHeader()}
            {apiHandler.loading? <SkeletonListLoading/> :
            apiHandler.apiError ? <NoInternetRetryComponent error={apiHandler.apiError} onRetryClick={()=>{fetchCategoryDetails()}}/> :
                <View >
                    <FlatList data={MockAlgos} renderItem={getItem}/>
                </View>
            }
        </SafeAreaView>
    )
}

export default AlgoList
