import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, FONT} from '../../../Constants';
import LoadingSkeletonView from './LoadingSkeletonView';
import CategoryHorizontalScrollView from './CategoryHorizontalScrollView';
import services from '../../../network/services';

const AlgosCategories = ()=>{

    const [isLoading, setLoading] = React.useState(false)
    const[categories, setCategories] = React.useState([])

    const fetchAlgoCategories = ()=>{
        setLoading(true)
        services.FeedsService.getAlgoCategories()
            .then((response)=>{
                setLoading(false)
                setCategories(response.data.response)
            })
            .catch((error)=>{
                setLoading(false)
                alert(error.message)
            })
    }
    useEffect(()=>{fetchAlgoCategories()}, [])

    return(
        <View>
            <Text style={styles.headerText}>Top Algo Categories</Text>
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
