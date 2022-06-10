import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../../Constants';

const LoadingSkeletonView = ()=>{
    return (
        <SkeletonPlaceholder backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} highlightColor={Colors.GREEN_BACKGROUND_LIGHT_TAB}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" >
                <SkeletonPlaceholder.Item width={150} height={100} borderRadius={5} marginRight={20}/>
                <SkeletonPlaceholder.Item width={150} height={100} borderRadius={5} marginRight={20}/>
                <SkeletonPlaceholder.Item width={150} height={100} borderRadius={5} />
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    )
}

export default LoadingSkeletonView;
