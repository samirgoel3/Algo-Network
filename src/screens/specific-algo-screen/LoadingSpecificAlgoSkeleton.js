import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../Constants';
import {Dimensions, View} from 'react-native';

const LoadingSpecificAlgoSkeleton = ()=>{
    return (
        <View style={{flex:1}}>
            <SkeletonPlaceholder backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} highlightColor={Colors.GREEN_BACKGROUND_LIGHT_TAB} >
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" padding={10} >
                    <SkeletonPlaceholder.Item width={10} height={10} borderRadius={5}/>
                    <SkeletonPlaceholder.Item width={100} height={10} borderRadius={5} marginLeft={10}/>
                </SkeletonPlaceholder.Item>

                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={200} borderRadius={5} marginLeft={10}/>
            </SkeletonPlaceholder>


            <View style={{marginTop:5}}>
                <SkeletonPlaceholder backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} highlightColor={Colors.GREEN_BACKGROUND_LIGHT_TAB} marginTop={10}>
                    <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={100} borderRadius={5} marginLeft={10}/>
                    <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={100} borderRadius={5} marginLeft={10}marginTop={5}/>
                </SkeletonPlaceholder>
            </View>

            <View>
                <SkeletonPlaceholder backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} highlightColor={Colors.GREEN_BACKGROUND_LIGHT_TAB} marginTop={10}>
                    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" padding={10} justifyContent={'space-between'}marginTop={10} >
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                    </SkeletonPlaceholder.Item>



                    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" padding={10} justifyContent={'space-between'}>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                    </SkeletonPlaceholder.Item>





                </SkeletonPlaceholder>
            </View>

            <View>
                <SkeletonPlaceholder backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} highlightColor={Colors.GREEN_BACKGROUND_LIGHT_TAB} marginTop={10}>
                    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" padding={10} justifyContent={'space-between'} >
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                    </SkeletonPlaceholder.Item>



                    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" padding={10} justifyContent={'space-between'}>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={5} marginLeft={10}/>
                    </SkeletonPlaceholder.Item>





                </SkeletonPlaceholder>
            </View>







        </View>

    )
}

export default LoadingSpecificAlgoSkeleton;
