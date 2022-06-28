import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, FONT} from '../../../Constants';
import LoadingSkeletonView from './LoadingSkeletonView';
import CategoryHorizontalScrollView from './CategoryHorizontalScrollView';
import services from '../../../network/services';

const AlgosCategories = ()=>{

    const [isLoading, setLoading] = React.useState(false)
    const[categories, setCategories] = React.useState([])

    const fetchAlgoCategories = async ()=>{
        setLoading(true)
        try{
            const response = await services.AlgoService.getAlgoCategories();
            setLoading(false)
            if(response) setCategories(response.data.response)
        }catch (e){
            setLoading(false)
            alert(e.message)
        }
    }
    useEffect(()=>{fetchAlgoCategories()}, [])

    const header = ()=>{return(<Text style={styles.headerText}>Top Algo Categories..</Text>)}

    return(
        <View>
            { isLoading?header():categories?header():null}
            {isLoading?
            <LoadingSkeletonView/> : categories?<CategoryHorizontalScrollView data={categories}/> :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
       headerText:{fontSize:20, marginBottom:5, fontFamily:FONT.BOLD, color:Colors.WHITE, marginTop:15}
})


export default AlgosCategories;
