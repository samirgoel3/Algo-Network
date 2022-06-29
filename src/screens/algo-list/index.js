import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import Item from './Item';
import AlgoService from '../../network/services/algo-service';
import NoInternetRetryComponent from '../../common-components/NoInternetRetryComponent';
import SkeletonListLoading from './SkeletonListLoading';


const AlgoList = ()=>{

    const nav = useNavigation()
    const route = useRoute()
    const { name, category_id } = route.params;
    const [algorithms, setAlgorithms] = React.useState();

    const getItem = ({item, index})=>{
        return <Item heading={item.problem[0].heading} description={item.problem[0].description} level={item.level} algorithmId={item._id} />
    }

    const [apiHandler, setApiHandler] = React.useState({
        loading:false,
        apiError:null
    })

    useEffect(()=>{fetchAlgoByCategoryId()}, [])


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

    const fetchAlgoByCategoryId = async ()=>{
        try{
            setApiHandler({loading: true, apiError: null})
            const data = await AlgoService.AlgoService.getAlgoListByCategory(""+category_id)

            if(!data){
                setApiHandler({loading: false, apiError: "Some problem in api response"})
            }
            else{
                if(data.data.result === 1){
                    setApiHandler({loading: false, apiError: null})
                    setAlgorithms(data.data.response)
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
            apiHandler.apiError ? <NoInternetRetryComponent error={apiHandler.apiError} onRetryClick={()=>{fetchAlgoByCategoryId()}}/> :
                <View >
                    <FlatList data={algorithms} renderItem={getItem}/>
                </View>
            }
        </SafeAreaView>
    )
}

export default AlgoList
