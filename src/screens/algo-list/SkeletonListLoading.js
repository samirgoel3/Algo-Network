import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../Constants';
import {Dimensions, View} from 'react-native';

const SkeletonListLoading = ()=>{
    return (
        <View style={{flex:1}}>
            <SkeletonPlaceholder backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} highlightColor={Colors.GREEN_BACKGROUND_LIGHT_TAB} >
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={100} borderRadius={5} marginLeft={10} marginBottom={10} marginTop={10}/>
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={100} borderRadius={5} marginLeft={10} marginBottom={10}/>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} highlightColor={Colors.GREEN_BACKGROUND_LIGHT_TAB} >
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={100} borderRadius={5} marginLeft={10} marginBottom={10}/>
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={100} borderRadius={5} marginLeft={10} marginBottom={10}/>
            </SkeletonPlaceholder>


            <SkeletonPlaceholder backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} highlightColor={Colors.GREEN_BACKGROUND_LIGHT_TAB} >
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={100} borderRadius={5} marginLeft={10} marginBottom={10}/>
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={100} borderRadius={5} marginLeft={10} marginBottom={10}/>
            </SkeletonPlaceholder>

        </View>

    )
}

export default SkeletonListLoading;
