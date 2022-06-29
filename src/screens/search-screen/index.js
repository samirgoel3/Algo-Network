import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
import {useNavigation} from '@react-navigation/native';
import ProgressView from './ProgressView';
import NoDataView from './NoDataView';
import CategorySearchedView from './CategorySearchedView';
import AlgorithmSearchedView from './AlgorithmSearchedView';
import Services from '../../network/services';
import axios from 'axios';


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
    const [apiResponse, setApiResponse] = React.useState({
        loading:false,
        errorMessage:null,
        data:null
    })



    const getViewAccordingToData = () =>{
        return (
            <View>
                <CategorySearchedView data={apiResponse.data.categoryData}/>
                <AlgorithmSearchedView data={apiResponse.data.algorithmData}/>
            </View>
        )
    }

    const fetchSearchApi = async (keyToSearch)=>{
        try{
            let cancelToken
            //Check if there are any previous pending requests
            if (typeof cancelToken != typeof undefined) {
                cancelToken.cancel("Operation canceled due to new request.")
            }
            cancelToken = axios.CancelToken.source()

            setApiResponse({loading:true, errorMessage:null,data: null})
            const response = await Services.AlgoService.getSearchAlgorithmClient(keyToSearch, cancelToken.token)
            if(!response){
                setApiResponse({loading:false, errorMessage:"Problem in api response",data: null})
            }else{
                if(response.data.result == 0){
                    setApiResponse({loading:false, errorMessage:response.data.message,data: null})
                }else{
                    setApiResponse({loading:false, errorMessage:null,data:response.data.response})
                }
            }
        }catch (e){

            setApiResponse({loading:false, errorMessage:e.message,data: null})
        }
    }


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.GREEN_BACKGROUND}}>
            <View></View>
            {setHeader()}
            <TextInput
                style={{backgroundColor: Colors.WHITE, height: 49, borderRadius: 10, margin: 10, padding: 15}}
                placeholder={'Search your algo or category'}
                onChangeText={(e) => {e.length >0 ? fetchSearchApi(e) : null}}
            />
            <ScrollView>
                {apiResponse.loading?<ProgressView/>:null}
                {apiResponse.errorMessage ? <NoDataView message={apiResponse.errorMessage}/>: null }
                {apiResponse.data ? getViewAccordingToData():null }

            </ScrollView>

        </SafeAreaView>
    );
}

export default SearchScreen;
